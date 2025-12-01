import SectionHeader from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FlagshipEntryPoint from './FlagshipEntryPoint';

const SeeHorizonSection = () => {
  return (
    <section className="container py-section">
      <SectionHeader
        title="See Horizon in action"
        className="flex items-center justify-start md:justify-between text-left"
        extraContent={
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="/demo">
              Explore demo
            </Link>
          </Button>
        }
      />

      <FlagshipEntryPoint />

      <div className="flex items-center justify-center md:hidden pt-[52px]">
        <Button asChild variant="secondary">
          <Link href="/demo">
            Explore demo
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default SeeHorizonSection;