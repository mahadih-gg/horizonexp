import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  align?: 'left' | 'right';
};

const DemoCard = ({ title, description, link, buttonText, align = 'left' }: Props) => {
  return (
    <Card className={cn("flex flex-row justify-between p-0 h-[500px] gap-0 overflow-hidden", align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row')}>
      <CardHeader
        title={title}
        description={description}
        centered={false}
        className={cn('w-1/2 pb-0 flex flex-col items-start justify-center', align === 'left' ? 'pl-[90px] pr-14' : 'pr-[90px] pl-14')}
        extraContent={
          <Button asChild>
            <Link href={link} target="_blank">
              {buttonText}
            </Link>
          </Button>
        }
      />
      <CardContent className='w-1/2 h-full'>
        <div className='w-full h-full bg-primary/20' />
      </CardContent>
    </Card>
  );
}

export default DemoCard;