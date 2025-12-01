import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentType } from 'react';

type Props = {
  variant?: "slider" | "page";
  title: string;
  description: string | React.ReactNode;
  SvgComponent?: ComponentType<{ className?: string }>;
  imageUrl?: string;
  link: string;
  buttonText: string;
};

const DemoCard = ({ variant = "page", title, description, SvgComponent, imageUrl, link, buttonText }: Props) => {
  return (
    <div className="bg-secondary rounded-3xl lg:rounded-4xl 2xl:rounded-6xl overflow-hidden pt-7 pl-7 md:pt-[45px] md:pl-[45px] 2xl:pt-[60px] 2xl:pl-[60px]">
      <div className="flex flex-col items-start justify-center text-left pr-7 md:pr-[45px] 2xl:pr-[60px]">
        <h2 className='text-base md:text-[15px] 2xl:text-xl font-semibold'>{title}</h2>
        <p className='text-base md:text-[15px] 2xl:text-xl pt-3 md:pt-0 pb-3 md:pb-[18px] 2xl:pb-6'>{description}</p>
        <Button
          asChild
          variant={variant === "slider" ? "default" : "white"}
          className={cn('text-base md:text-[15px] 2xl:text-xl', variant === "slider" && "inline-flex md:hidden")}
        >
          <Link href={link}>
            {buttonText}
          </Link>
        </Button>
      </div>

      <div className={cn("w-full overflow-hidden flex justify-end items-end", variant == "slider" ? "mt-12 md:-mt-5 xl:-mt-7" : "mt-12 sm:mt-5 xl:-mt-7")}>
        {
          variant === "slider" && (
            <div className='pb-7 md:pb-[45px] 2xl:pb-[60px] pr-5'>
              <Button
                asChild
                className='hidden md:inline-flex text-base md:text-[15px] 2xl:text-xl min-w-fit'
              >
                <Link href={link}>
                  {buttonText}
                </Link>
              </Button>
            </div>
          )
        }

        <div className={cn('w-full md:w-4/5 flex items-end', variant === "slider" ? "justify-end" : "justify-end")}>
          {SvgComponent && (
            <SvgComponent className='w-full md:w-auto h-auto md:h-[357px] 2xl:h-[475px] flex justify-end items-end' />
          )}
          {imageUrl && (
            <div className='h-[220px] md:h-[427px] 2xl:h-[569px] w-full md:w-auto flex justify-end 2xl:justify-start items-end overflow-hidden'>
              <Image
                src={imageUrl}
                alt={title}
                width={577}
                height={569}
                className='w-full md:w-auto h-full object-left-top object-cover min-h-[220px] md:min-h-[427px] 2xl:min-h-[569px]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoCard;