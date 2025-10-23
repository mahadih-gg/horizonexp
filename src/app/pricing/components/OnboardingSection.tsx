import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OnboardingSection = () => {
  return (
    <section className="container py-section">
      <div className="bg-primary rounded-3xl p-10 pb-[60px] h-screen flex justify-center items-end">
        <SectionHeader
          className="text-white pb-0"
          topLabel="Premium Support"
          title="Onboarding made simple"
          description={<>
            We&apos;ll help you go from upload to live - seamlessly connecting Horizon
            <br />
            to your site or app. Contact us for onboarding support.
          </>}
          extraContent={
            <Button asChild className='mt-7' variant="secondary">
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          }
        />
      </div>
    </section>
  );
};

export default OnboardingSection;