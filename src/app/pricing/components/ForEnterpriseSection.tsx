import SectionHeader from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ForEnterpriseSection = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 gap-x-[161px]">
      <SectionHeader
        topLabel="For Enterprise"
        title={<>Ready to scale <br /> beyond limits?</>}
        description={<>
          For brands with larger audiences, Horizon offers custom enterprise pricing tailored to your traffic, integrations, and performance needs.
          <br />
          <br />
          Get dedicated support, advanced analytics, and infrastructure engineered to handle enterprise scale effortlessly.
        </>}
        centered={false}
        extraContent={
          <Button asChild className='mt-10'>
            <Link href="/contact">
              Contact us
            </Link>
          </Button>
        }
      />

      <div className='col-span-2 size-full rounded-3xl bg-secondary'>

      </div>
    </section>
  );
};

export default ForEnterpriseSection;