import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const GradientBg = ({ className, children }: Props) => {
  return (
    <div
      className={cn('w-full min-h-[484px] md:min-h-[645px] 2xl:min-h-[860px] rounded-4xl 2xl:rounded-6xl', className)}
      style={{ background: 'linear-gradient(180deg, #FBFDFF 4%, #B4E9FD 80%, #BAD9FD 100%)' }}
    >
      {children}
    </div>
  );
};

export default GradientBg;