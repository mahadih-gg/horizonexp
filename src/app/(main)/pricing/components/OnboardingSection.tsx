import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OnboardingSection = () => {
  return (
    <section className="container">
      <div className="bg-[url('/assets/images/premium-support.webp')] bg-cover bg-bottom! md:bg-center w-full aspect-191/342 md:aspect-191/100 rounded-3xl pb-10 md:pb-11 2xl:pb-[60px] flex justify-center items-end">
        <SectionHeader
          animate={false}
          className="text-white pb-0 md:pb-0 2xl:pb-0 px-4"
          topLabel={<span className="text-white font-semibold">Premium Support</span>}
          topLabelClassName="block -mb-10"
          title={<span className="leading-[1.40em] text-inherit block -mb-6">Onboarding <br className="block md:hidden" /> made simple</span>}
          description={<span className="font-normal text-white leading-[1.40em]">
            We{"’"}ll help you go from upload to live - seamlessly connecting Horizon
            <br className="hidden md:block" />
            to your site or app. Contact us for onboarding support.
          </span>}
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