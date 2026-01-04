import SectionHeader from '@/components/common/SectionHeader';
import LaunchSteps from './LaunchSteps';

const LaunchHorizonSection = () => {
  return (
    <section className="container pt-section">
      <SectionHeader title="Launch shoppable video in 4 easy steps" />

      <LaunchSteps />
    </section>
  );
};

export default LaunchHorizonSection;