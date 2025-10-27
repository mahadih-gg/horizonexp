import SectionHeader from '@/components/common/SectionHeader';
import AnalyticsIcon from '@/components/icons/analytics-icon';
import CommentIcon from '@/components/icons/comment-icon';
import DashboardIcon from '@/components/icons/dashboard-icon';
import FrameIcon from '@/components/icons/frame-icon';
import GradShoppingCartIcon from '@/components/icons/grad-shopping-cart-icon';
import HeartIcon from '@/components/icons/heart-icon';
import LightningIcon from '@/components/icons/lightning-icon';
import PlayButtonIcon from '@/components/icons/play-button-icon';
import PlaylistIcon from '@/components/icons/playlist-icon';
import PollIcon from '@/components/icons/poll-icon';
import PriceTagIcon from '@/components/icons/price-tag-icon';
import ShareIcon from '@/components/icons/share-icon';
import SmileIcon from '@/components/icons/smile-icon';
import StarIcon from '@/components/icons/star-icon';
import TabletIcon from '@/components/icons/tablet-icon';
import TeamIcon from '@/components/icons/team-icon';
import UploadIcon from '@/components/icons/upload-icon';
import WandIcon from '@/components/icons/wand-icon';
import WebsiteMonitorIcon from '@/components/icons/website-monitor-icon';
import WorkspaceIcon from '@/components/icons/workspace-icon';

const features = [
  {
    icon: WebsiteMonitorIcon,
    title: <>Add short-form <br /> on websites</>,
  },
  {
    icon: GradShoppingCartIcon,
    title: <>Add short-form <br /> on online stores</>,
  },
  {
    icon: TabletIcon,
    title: <>Add short-form <br /> on landing pages</>,
  },
  {
    icon: PlayButtonIcon,
    title: <>Entry points / video <br /> carousels</>,
  },
  {
    icon: LightningIcon,
    title: <>Fast video streams <br /> (all browsers)</>,
  },
  {
    icon: PriceTagIcon,
    title: <>Add custom CTAs <br /> on any video</>,
  },
  {
    icon: StarIcon,
    title: <>AI recommendation <br /> for infinite scrolls</>,
  },
  {
    icon: PlaylistIcon,
    title: <>Custom playlist <br /> with video tags</>,
  },
  {
    icon: ShareIcon,
    title: <>Unique share links <br /> for all videos</>,
  },
  {
    icon: HeartIcon,
    title: <>Customers can react <br /> to videos</>,
  },
  {
    icon: CommentIcon,
    title: <>Customers can <br /> comment on videos</>,
  },
  {
    icon: SmileIcon,
    title: <>Comments spam <br /> protected by AI</>,
  },
  {
    icon: PollIcon,
    title: <>Create in-video polls <br /> for customers</>,
  },
  {
    icon: FrameIcon,
    title: <>Setup multiple <br /> content channels</>,
  },
  {
    icon: UploadIcon,
    title: <>Easily upload & <br /> manage videos</>,
  },
  {
    icon: DashboardIcon,
    title: <>Central dashboards <br /> for everything</>,
  },
  {
    icon: WandIcon,
    title: <>20+ useful no code <br /> settings</>,
  },
  {
    icon: AnalyticsIcon,
    title: <>Powerful built-in <br /> usage analytics</>,
  },
  {
    icon: WorkspaceIcon,
    title: <>Setup multiple <br /> workspaces</>,
  },
  {
    icon: TeamIcon,
    title: <>Invite team <br /> members</>,
  }
];

const FeaturesSection = () => {
  return (
    <section className="container py-section">
      <SectionHeader
        title="All plans include these features"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-[48px] md:gap-x-12 md:gap-y-[105px] 2xl:gap-x-[60px] 2xl:gap-y-[140px]">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center gap-1.5 md:gap-4 2xl:gap-5">
              <div className="flex-center">
                <IconComponent className="size-8 md:size-10 2xl:size-[52px]" />
              </div>
              <h3 className="text-base md:text-lg 2xl:text-xl leading-tight">
                {feature.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;