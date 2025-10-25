"use client"

import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const ReviewsSection = () => {
  const testimonials = [
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    },
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    },
    {
      quote: "Deliver instant video experiences to millions with global speed and enterprise performance. To millions with global speed and enterprise. Video experiences to millions with global speed",
      author: "Devin A.",
      title: "CEO & Founder @Click Labs"
    }
  ];

  return (
    <section className="container">
      <SectionHeader
        title="What our users say about Horizon"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-[52px] md:gap-7 2xl:gap-9"
      >

        {testimonials.map((testimonial, index) => (
          <Card key={index} className="py-10 md:py-11 2xl:py-[60px] px-5 md:px-[30px] 2xl:px-10">
            <CardContent>
              <p className="text-black-gradient font-medium text-2xl 2xl:text-[32px]">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center space-x-4 pt-[80px] 2xl:pt-[110px]">
                <div className="size-[60px] bg-black-gradient rounded-full shrink-0" />
                <div>
                  <p className="text-primary-text text-xl">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-text/50 text-xl">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewsSection;