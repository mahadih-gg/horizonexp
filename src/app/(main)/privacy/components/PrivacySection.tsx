import { privacyContent } from "./privacyContent";

const PrivacySection = () => {
  return (
    <section className="container pt-page">
      <div
        className="space-y-6 prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: privacyContent }}
      />
    </section>
  );
};

export default PrivacySection;

