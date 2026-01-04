import SectionHeader from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ForEnterpriseSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row gap-0 lg:gap-[75px] 2xl:gap-[100px] items-stretch 2xl:items-center">
      <div className='w-full lg:w-[34.63%] 2xl:w-[34.68%] flex-center'>
        <SectionHeader
          className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
          topLabel="For Enterprise"
          title={<>Need higher <br /> limits?</>}
          description={<>
            For brands with larger audiences, Horizon offers custom enterprise pricing tailored to your traffic and performance needs.
            <br />
            <br />
            Get dedicated support, customizations, and infrastructure designed to handle enterprise scale effortlessly.
          </>}
          extraContent={
            <Button asChild className='lg:inline-flex hidden mt-10'>
              <Link href="/contact">
                Contact sales
              </Link>
            </Button>
          }
        />
      </div>

      <div className='w-full lg:w-[54.55%] 2xl:w-[65.32%] rounded-3xl bg-secondary flex-center flex-col py-[30px] overflow-hidden'>
        <Image
          src="/assets/images/ready-to-scale.webp"
          alt="For Enterprise"
          width={1224}
          height={708}
          className='min-w-fit w-full max-h-[340px] xs:max-h-[380px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[530px] 2xl:max-h-[708px] object-contain py-[50px]'
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