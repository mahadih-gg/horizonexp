import SectionHeader from '@/components/common/SectionHeader';
import LaunchSteps from './LaunchSteps';

const LaunchHorizonSection = () => {
  return (
    <section className="container">
      <SectionHeader
        title="Launch Horizon in 4 easy steps"
      />

      <LaunchSteps />
    </section>
  );
};

export default LaunchHorizonSection;