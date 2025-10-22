import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const ConnectSection = ({ title, description }: Props) => {
  return (
    <section className="container py-section">
      <h2 className="text-5xl md:text-6xl 2xl:text-[76px] font-medium tracking-tight text-primary-text text-center">
        {title}
      </h2>
      <p className="text-lg 2xl:text-2xl text-primary-text text-center font-medium pt-8 pb-10">
        {description}
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button asChild>
          <Link href="/signup">
            Start for free
          </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/demo">
            Visit demo site
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ConnectSection;