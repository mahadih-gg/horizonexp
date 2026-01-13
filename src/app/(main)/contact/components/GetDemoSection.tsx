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

// Define the form data type
type FormData = {
  siteUrl: string;
  email: string;
}

const GetDemoSection = () => {
  const form = useForm<FormData>({
    defaultValues: {
      siteUrl: "",
      email: "",
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
      const response = await fetch('https://formspree.io/f/xpqqzylv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, message: `Custom demo requested from ${data.email} on ${data.siteUrl}` }),
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
          <Text variant="heading" className="text-center">Get a custom Horizon demo <br className="hidden md:block" /> on your site</Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text variant="section-subheading" className="text-center pt-8 mb-[52px] md:mb-[60px] 2xl:mb-[80px]">Drop your store or site URL and we’ll spin up a Horizon video feed on <br />
            top of it - then send you a quick walkthrough.</Text>
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
                name="siteUrl"
                rules={{
                  required: "Site URL is required",
                  minLength: { value: 2, message: "Site URL must be at least 2 characters" },
                  maxLength: { value: 100, message: "Site URL must be less than 100 characters" },
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
                    message: "Please enter a valid URL (e.g., example.com or https://example.com)"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site / Store URL*</FormLabel>
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
                    <FormLabel>Work Email*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="sm:col-span-2 flex justify-center md:justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "See it on my site"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetDemoSection;