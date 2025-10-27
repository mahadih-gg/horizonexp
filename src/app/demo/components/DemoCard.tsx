import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText: string;
  align?: 'left' | 'right';
};

const DemoCard = ({ title, description, imageUrl, link, buttonText, align = 'left' }: Props) => {
  return (
    <Card className={cn("flex flex-row justify-between p-0 gap-0 overflow-hidden", align === 'left' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row-reverse')}>
      <CardHeader
        title={title}
        description={description}
        centered={false}
        className={cn('w-full md:w-1/2 pb-0 flex flex-col items-center md:items-start justify-center text-center md:text-left pt-7 md:pt-0 pb-10 md:pb-0', align === 'left' ? 'pl-4 md:pl-[67px] 2xl:pl-[90px] pr-4 md:pr-7 2xl:pr-14' : 'pr-4 md:pr-[67px] 2xl:pr-[90px] pl-4 md:pl-7 2xl:pl-14')}
        extraContent={
          <Button asChild>
            <Link href={link} target="_blank">
              {buttonText}
            </Link>
          </Button>
        }
      />
      <CardContent className='w-full md:w-1/2 overflow-hidden aspect-119/100 md:aspect-auto h-auto md:h-[462px] 2xl:h-[616px]'>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className='w-full h-full object-cover object-left'
        />
      </CardContent>
    </Card>
  );
}

export default DemoCard;