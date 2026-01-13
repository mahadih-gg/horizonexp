import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OnboardingSection = () => {
  return (
    <section className="container py-section">
      <div className="bg-[url('/assets/images/premium-support-sm.webp')] md:bg-[url('/assets/images/premium-support.webp')] bg-cover bg-bottom! md:bg-center w-full aspect-191/342 md:aspect-191/100 rounded-3xl pb-10 md:pb-11 2xl:pb-[60px] flex justify-center items-end">
        <SectionHeader
          animate={false}
          className="text-white pb-0 md:pb-0 2xl:pb-0 px-4"
          topLabel={<span className="text-white font-semibold">Guided Setup</span>}
          topLabelClassName="block -mb-10"
          title={<span className="leading-[1.40em] text-inherit block -mb-6">Get assisted setup from our team</span>}
          description={<span className="font-normal text-white leading-[1.40em]">
            Most teams launch Horizon in minutes.
            <br className="hidden md:block" />
            If you want help setting things up, we’re here.
          </span>}
          extraContent={
            <Button asChild className='mt-7' variant="secondary">
              <Link href="/contact">
                Get setup help
              </Link>
            </Button>
          }
        />
      </div>
    </section>
  );
};

export default OnboardingSection;