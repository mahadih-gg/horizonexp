import SectionHeader from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ForEnterpriseSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row gap-0 lg:gap-[75px] 2xl:gap-[100px] items-stretch 2xl:items-center">
      <div className='w-full lg:w-[34.63%] 2xl:w-[34.68%] flex-center'>
        <SectionHeader
          topLabel="For Enterprise"
          title={<>Ready to scale <br /> beyond limits?</>}
          description={<>
            For brands with larger audiences, Horizon offers custom enterprise pricing tailored to your traffic, integrations, and performance needs py-[50px].
            <br />
            <br />
            Get dedicated support, advanced analytics, and infrastructure engineered to handle enterprise scale effortlessly.
          </>}
          centered={false}
          extraContent={
            <Button asChild className='lg:inline-flex hidden mt-10'>
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          }
        />
      </div>

      <div className='w-full lg:w-[54.55%] 2xl:w-[65.32%] rounded-3xl bg-secondary flex-center flex-col py-[30px]'>
        <Image
          src="/assets/images/ready-to-scale.webp"
          alt="For Enterprise"
          width={1000}
          height={1000}
          className='w-full h-auto object-cover py-[50px]'
        />

        <Button asChild className='lg:hidden inline-flex'>
          <Link href="/contact">
            Contact us
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ForEnterpriseSection;