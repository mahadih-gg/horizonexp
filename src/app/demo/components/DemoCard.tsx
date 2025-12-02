import SectionHeader from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  topLabel: string;
  title: string;
  description: string | React.ReactNode;
  imageUrl: string;
  link: string;
  buttonText: string;
  align?: 'left' | 'right';
};

const DemoCard = ({ topLabel, title, description, imageUrl, link, buttonText, align = 'left' }: Props) => {
  return (
    <div className={cn("bg-transparent flex flex-row justify-between p-0 gap-0! 2xl:gap-0! overflow-hidden", align === 'left' ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row')}>
      <div
        className={cn('w-full lg:w-[38.7%] 2xl:w-[38.66%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-6 lg:pt-0 pb-10 lg:pb-0',
          align === 'left' ? 'lg:pl-[120px] 2xl:pl-[161px]' : 'lg:pr-[120px] 2xl:pr-[161px]'
        )}
      >

        <SectionHeader
          animate={false}
          topLabel={topLabel}
          title={title}
          description={description}
          centered={false}
          className={cn('flex flex-col items-center lg:items-start justify-center text-center lg:text-left',
          )}
          extraContent={
            <div className='pt-10'>
              <Button asChild>
                <Link href={link} target="_blank">
                  {buttonText}
                </Link>
              </Button>
            </div>
          }
        />

      </div>
      <CardContent className='w-full lg:w-[61.3%] 2xl:w-[61.34%] overflow-hidden aspect-119/100 lg:aspect-auto h-auto lg:h-[510px] 2xl:h-[680px]'>
        <Image
          src={imageUrl}
          alt={title}
          width={1012}
          height={686}
          priority
          quality={100}
          className={cn("w-full h-full object-cover object-left rounded-3xl lg:rounded-2xl 2xl:rounded-3xl", align === 'left' ? 'lg:object-right' : 'lg:object-left')}
        />
      </CardContent>
    </div>
  );
}

export default DemoCard;