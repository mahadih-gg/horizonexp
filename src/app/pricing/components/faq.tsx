
import SectionHeader from "@/components/common/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial for all new users. You can explore all features of Horizon without any commitment. No credit card required to start your trial."
    },
    {
      question: "Is Horizon worth the price?",
      answer: "Absolutely! Horizon provides enterprise-grade video hosting and streaming capabilities at a fraction of the cost of traditional solutions. Our customers typically see a 40-60% reduction in video hosting costs while gaining better performance and features."
    },
    {
      question: "Do your plan prices include tax fees?",
      answer: "Our listed prices are exclusive of applicable taxes. Tax rates vary by location and will be calculated at checkout based on your billing address. We comply with all local tax regulations."
    },
    {
      question: "What happens if my total view count grows beyond my current plan?",
      answer: "If you exceed your plan's view limit, we'll automatically upgrade you to the next tier for that billing cycle. You'll only pay the prorated difference, ensuring you're never charged for overages. We'll also notify you when you're approaching your limit."
    },
    {
      question: "How are views calculated?",
      answer: "Views are counted when a video is played for at least 30 seconds or when 50% of the video duration is watched (whichever comes first). This ensures we only count meaningful engagement, not accidental clicks or brief previews."
    },
    {
      question: "What happens if I need to upload more or longer videos than my current plan allows?",
      answer: "You can upgrade your plan at any time through your dashboard. If you need additional storage or bandwidth temporarily, we offer one-time add-ons. For enterprise customers, we can create custom plans to meet your specific needs."
    },
    {
      question: "How do I pay?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through our PCI-compliant payment system. Enterprise customers can also pay via invoice."
    },
    {
      question: "How do I change my plan?",
      answer: "You can upgrade or downgrade your plan anytime from your account dashboard. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle to ensure you get the full value of your current plan."
    },
    {
      question: "What kind of support do I receive with Horizon?",
      answer: "All plans include email support with 24-48 hour response times. Pro and Enterprise plans include priority support with faster response times. Enterprise customers receive dedicated account management and phone support. We also provide comprehensive documentation and video tutorials."
    },
    {
      question: "Can I see a demo of Horizon?",
      answer: "Yes! You can request a personalized demo by contacting our sales team. We'll show you how Horizon can be customized for your specific use case, including integration examples and performance metrics relevant to your industry."
    }
  ];

  return (
    <section className="container">

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