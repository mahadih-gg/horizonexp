import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const GradientBg = ({ className, children }: Props) => {
  return (
    <div
      className={cn('w-full min-h-[484px] md:min-h-[645px] 2xl:min-h-[860px] rounded-3xl', className)}
      style={{
        background: 'linear-gradient(180deg, #F9FCFD 0%, #FFE3EF 100%)'
      }}
    >
      {children}
    </div>
  );
};

export default GradientBg;