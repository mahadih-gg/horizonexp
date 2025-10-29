import ConnectSection from "@/components/common/ConnectSection";
import ContactSection from "./components/ContactSection";

const ContactPage = () => {
  return (
    <main>
      <ContactSection />

      <ConnectSection
        title={<>Your next growth <br /> chapter starts here.</>}
        description={<>Reach out, our team will help you find the <br /> perfect Horizon setup for your goals.</>}
        cta={{
          primary: {
            label: "Start for free",
            href: "https://app.horizonexp.com/signup",
            target: "_blank",
            variant: "default",
          },
          secondary: {
            label: "Contact us",
            href: "/contact",
            variant: "secondary",
          },
        }}
      />
    </main>
  );
};

export default ContactPage;