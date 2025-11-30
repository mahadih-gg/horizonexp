import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ComponentType } from 'react';

type Props = {
  title: string;
  description: string | React.ReactNode;
  SvgComponent: ComponentType<{ className?: string }>;
  link: string;
  buttonText: string;
};

const DemoCard = ({ title, description, SvgComponent, link, buttonText }: Props) => {
  return (
    <div className="bg-secondary rounded-3xl lg:rounded-4xl 2xl:rounded-6xl overflow-hidden pt-7 pl-7 md:pt-[45px] md:pl-[45px] 2xl:pt-[60px] 2xl:pl-[60px]">
      <div className="flex flex-col items-start justify-center text-left pr-7 md:pr-[45px] 2xl:pr-[60px]">
        <h2 className='text-base md:text-[15px] 2xl:text-xl font-semibold'>{title}</h2>
        <p className='text-base md:text-[15px] 2xl:text-xl pt-3 md:pt-0 pb-3 md:pb-[18px] 2xl:pb-6'>{description}</p>
        <Button asChild variant="white" className='text-base md:text-[15px] 2xl:text-xl'>
          <Link href={link}>
            {buttonText}
          </Link>
        </Button>
      </div>
      <div className="w-full overflow-hidden flex justify-end items-end mt-12 sm:mt-5 xl:-mt-7">
        <div className='w-full md:w-4/5 flex justify-end items-end'>
          <SvgComponent className='w-full md:w-auto h-auto md:h-[357px] 2xl:h-[475px] flex justify-end items-end' />
        </div>
      </div>
    </div>
  );
}

export default DemoCard;