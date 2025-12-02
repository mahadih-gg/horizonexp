
import SectionHeader from "@/components/common/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 30-day free trial of our Premium plan. Enjoy premium features of Horizon without any payment during the trial period."
    },
    {
      question: "Is Horizon worth the price?",
      answer: "Since implementing Horizon increases CTR, session times, and product/service discovery while reducing bounce rates dramatically - it is very much worth it. Short-form in general is a very high ROI format to drive conversion."
    },
    {
      question: "Do your plan prices include tax fees?",
      answer: "When subscribing to one of our paid plans, you only pay the listed price - there are no hidden fees."
    },
    {
      question: "What happens if my total view count grows beyond my current plan?",
      answer: "If you exceed the view limit on a paid plan, you can upgrade to a higher plan or overages will be billed at the next renewal. Service will not be interrupted."
    },
    {
      question: "How are views calculated?",
      answer: "Views are counted when a video is played for at least 3 seconds. This ensures we don't count accidental clicks or test runs."
    },
    {
      question: "What happens if I need to upload more or longer videos than my current plan allows?",
      answer: "We offer plans with higher upload limits and longer video lengths. If you need even higher limits, contact us and we may be able to help you with a customized plan."
    },
    {
      question: "How do I pay?",
      answer: "We accept all major credit cards. All payments are processed securely through Stripe."
    },
    {
      question: "How do I change my plan?",
      answer: "You can upgrade or downgrade your plan anytime from the Workspace & Billing section of the Horizon Console. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle."
    },
    {
      question: "What kind of support do I receive with Horizon?",
      answer: "All plans include email support with 24-48 hour response times."
    },
    {
      question: "Can I see a demo of Horizon?",
      answer: "Yes! Please visit our live demo websites. And you can also request a demo walkthrough by contacting us."
    }
  ];

  return (
    <section className="container py-section">

      <SectionHeader
        title="Pricing FAQs"
      />

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;