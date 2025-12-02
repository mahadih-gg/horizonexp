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
        background: 'linear-gradient(180deg, #F9FCFD 0%, #FCF2F8 40.41%, #FCEEF6 54.73%, #F4F2F8 68.23%, #E7ECFC 100%)'
      }}
    >
      {children}
    </div>
  );
};

export default GradientBg;