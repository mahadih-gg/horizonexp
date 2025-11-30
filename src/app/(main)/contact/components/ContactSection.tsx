"use client"

import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Text } from '@/components/ui/text'
import { Textarea } from "@/components/ui/textarea"

// Define the form data type
type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = form

  const onSubmit = async (data: FormData) => {
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xgvpjpge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Reset form and show success message on success
        reset()
        toast.success("Thank you for your message! We'll get back to you within 24 hours.")
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("There was an error submitting your form. Please try again.")
    }
  }

  return (
    <section className="container pt-page">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text variant="heading" className="text-center">We&apos;d love to hear from you</Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text variant="section-subheading" className="text-center pt-8 pb-[60px]">Drop us a message and our team will get back to you within 24 hours.</Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[30px] md:gap-y-6 md:gap-x-[30px] 2xl:gap-x-10 2xl:gap-y-8">
              <FormField
                control={control}
                name="fullName"
                rules={{
                  required: "Full name is required",
                  minLength: { value: 2, message: "Full name must be at least 2 characters" },
                  maxLength: { value: 100, message: "Full name must be less than 100 characters" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="company"
                rules={{
                  required: "Company name is required",
                  minLength: { value: 2, message: "Company name must be at least 2 characters" },
                  maxLength: { value: 100, message: "Company name must be less than 100 characters" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Company*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Email*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="phone"
                rules={{
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Phone number must be at least 10 characters" },
                  maxLength: { value: 20, message: "Phone number must be less than 20 characters" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone*</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2">
                <FormField
                  control={control}
                  name="message"
                  rules={{
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                    maxLength: { value: 1000, message: "Message must be less than 1000 characters" }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Send Us a Message*</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[240px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-2 flex justify-center md:justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;