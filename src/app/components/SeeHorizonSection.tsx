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
          <Button asChild className="hidden md:inline-flex">
            <Link href="https://demo.horizonexp.com/" target="_blank">
              Visit demo sites
            </Link>
          </Button>
        }
      />

      <FlagshipEntryPoint />
    </section>
  );
};

export default SeeHorizonSection;