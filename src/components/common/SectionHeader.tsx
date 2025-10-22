import { cn } from '@/lib/utils';
import { Text } from '../ui/text';

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  centered?: boolean;
  className?: string;
  extraContent?: React.ReactNode;
};

const SectionHeader = ({ title, description, centered = true, className, extraContent }: Props) => {
  return (
    <div className={cn('text-left pb-20', centered && 'text-center', className)}>
      <Text variant="section-heading">
        {title}
      </Text>
      {
        description && (
          <Text variant="section-subheading" className='pt-8'>
            {description}
          </Text>
        )
      }

      {
        !!extraContent && extraContent
      }
    </div>
  );
};

export default SectionHeader;