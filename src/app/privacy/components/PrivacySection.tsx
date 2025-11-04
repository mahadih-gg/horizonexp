import { privacyContent } from "./privacyContent";

const PrivacySection = () => {
  return (
    <section className="pt-page">
      <div className="container">
        <div>

          <div
            className="space-y-6 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: privacyContent }}
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;

