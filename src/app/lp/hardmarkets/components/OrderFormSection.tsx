"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const orderFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  areaCode: z.string().min(1, "Area code is required"),
  phone: z.string().min(1, "Phone number is required"),
  quantity: z
    .union([z.string(), z.number()])
    .refine((v) => {
      const n = typeof v === "number" ? v : v === "" ? NaN : Number(v);
      return !Number.isNaN(n) && n >= 1;
    }, "Quantity must be at least 1")
    .transform((v) => (typeof v === "number" ? v : v === "" ? 0 : Number(v))),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
});

type OrderFormValues = z.input<typeof orderFormSchema>;

const defaultOrderValues: OrderFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  areaCode: "",
  phone: "",
  quantity: "",
  streetAddress: "",
  city: "",
};

export const OrderFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormValues>({
    defaultValues: defaultOrderValues,
    resolver: zodResolver(orderFormSchema),
  });

  const onOrderSubmit = async (data: OrderFormValues) => {
    try {
      const quantity = typeof data.quantity === "number" ? data.quantity : Number(data.quantity) || 0;
      const message = [
        `First Name: ${data.firstName}`,
        `Last Name: ${data.lastName}`,
        `Email: ${data.email}`,
        `Area Code: ${data.areaCode}`,
        `Phone: ${data.phone}`,
        `Quantity: ${quantity}`,
        `Street Address: ${data.streetAddress}`,
        `City: ${data.city}`,
      ].join("\n");
      const payload = { message };
      const response = await fetch("https://formspree.io/f/xnjbnzje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Order submitted! We'll be in touch soon.");
        reset(defaultOrderValues);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Error submitting order form:", err);
      toast.error(err instanceof Error ? err.message : "Failed to submit order. Please try again.");
    }
  };

  return (
    <section id="HMOrderForm" className="hm-container my-[72px] lg:my-[86px] 2xl:my-[115px]">
      <h2 className="text-[42px] md:text-[57px] font-bold text-[#1C2B33] mb-[22px] 2xl:mb-[30px]">Order now</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#F7F7F7] p-[36px] lg:p-[46px] 2xl:p-[64px] rounded-[12px]">
        <div className="w-full">
          <p className="text-[#1C2B33] text-base lg:text-xl 2xl:text-[26px] mb-5 2xl:mb-[26px]">Please complete this form with your details.</p>
          <form
            className="space-y-4 lg:space-y-5 2xl:space-y-6"
            onSubmit={handleSubmit(onOrderSubmit)}
          >
            <div>
              <label className="block text-[#1C2B33] text-sm md:text-base 2xl:text-lg font-medium mb-1 2xl:mb-2">
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="grid lg:grid-cols-2 gap-3 2xl:gap-4">
                <div>
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[#1C2B33] text-sm md:text-base 2xl:text-lg font-medium mb-1 2xl:mb-2">
                E-mail <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="example@example.com"
                className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-[#1C2B33] text-sm md:text-base 2xl:text-lg font-medium mb-1 2xl:mb-2">
                Contact Number <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-row gap-3 2xl:gap-4">
                <div className="w-2/5 xl:w-1/5">
                  <input
                    {...register("areaCode")}
                    type="text"
                    placeholder="Area Code"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.areaCode && (
                    <p className="mt-1 text-sm text-red-600">{errors.areaCode.message}</p>
                  )}
                </div>
                <div className="w-3/5 xl:w-4/5">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[#1C2B33] text-sm md:text-base 2xl:text-lg font-medium mb-1 2xl:mb-2">
                Quantity <span className="text-red-600">*</span>
              </label>
              <input
                {...register("quantity", { valueAsNumber: true })}
                type="number"
                placeholder="Quantity"
                className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
              />
              {errors.quantity && (
                <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
              )}
            </div>
            <div>
              <label className="block text-[#1C2B33] text-sm md:text-base 2xl:text-lg font-medium mb-1 2xl:mb-2">
                Shipping Address <span className="text-red-600">*</span>
              </label>
              <div className="space-y-3 2xl:space-y-4">
                <div>
                  <input
                    {...register("streetAddress")}
                    type="text"
                    placeholder="Street Address"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.streetAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.streetAddress.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-300 rounded-[10px] 2xl:rounded-xl px-3 py-2.5 2xl:px-4 2xl:py-3 text-base 2xl:text-lg text-[#1C2B33] bg-white placeholder:text-gray-500"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="block lg:hidden pt-[76px] pb-[52px]">
              <Image
                src="/assets/images/lp/hard-market/hero.webp"
                alt="Hard Markets by Fahim Salam"
                width={557}
                height={871}
                className="w-full block lg:hidden h-[320px] lg:h-[645px] 2xl:h-[868px] aspect-557/871 object-center object-contain"
              />
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[129px] h-[50px] lg:min-w-[157px] lg:h-[58px] 2xl:min-w-[210px] 2xl:h-[78px] px-4 2xl:px-6 mt-2 bg-[#0B61CD] text-white font-bold text-lg lg:text-[22px] 2xl:text-[29px] rounded-[11px] lg:rounded-[14px] 2xl:rounded-[18px] hover:opacity-90 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "ORDER NOW"}
              </button>
            </div>
          </form>
        </div>
        <div className="relative hidden lg:flex justify-center h-full">
          <Image
            src="/assets/images/lp/hard-market/hero.webp"
            alt="Hard Markets by Fahim Salam"
            width={557}
            height={871}
            className="h-[320px] lg:h-[645px] 2xl:h-[868px] aspect-557/871 object-center object-contain"
          />
        </div>
      </div>
    </section>
  );
};
