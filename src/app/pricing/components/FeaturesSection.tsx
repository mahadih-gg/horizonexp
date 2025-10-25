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
    title: "Add short-form on websites",
  },
  {
    icon: GradShoppingCartIcon,
    title: "Add short-form on online stores",
  },
  {
    icon: TabletIcon,
    title: "Add short-form on landing pages",
  },
  {
    icon: PlayButtonIcon,
    title: "Entry points / video carousels",
  },
  {
    icon: LightningIcon,
    title: "Fast video streams (all browsers)",
  },
  {
    icon: PriceTagIcon,
    title: "Add custom CTAs on any video",
  },
  {
    icon: StarIcon,
    title: "AI recommendation for infinite scrolls",
  },
  {
    icon: PlaylistIcon,
    title: "Custom playlist with video tags",
  },
  {
    icon: ShareIcon,
    title: "Unique share links for all videos",
  },
  {
    icon: HeartIcon,
    title: "Customers can react to videos",
  },
  {
    icon: CommentIcon,
    title: "Customers can comment on videos",
  },
  {
    icon: SmileIcon,
    title: "Comments spam protected by AI",
  },
  {
    icon: PollIcon,
    title: "Create in-video polls for customers",
  },
  {
    icon: FrameIcon,
    title: "Setup multiple content channels",
  },
  {
    icon: UploadIcon,
    title: "Easily upload & manage videos",
  },
  {
    icon: DashboardIcon,
    title: "Central dashboards for everything",
  },
  {
    icon: WandIcon,
    title: "20+ useful no code settings",
  },
  {
    icon: AnalyticsIcon,
    title: "Powerful built-in usage analytics",
  },
  {
    icon: WorkspaceIcon,
    title: "Setup multiple workspaces",
  },
  {
    icon: TeamIcon,
    title: "Invite team members",
  }
];

const FeaturesSection = () => {
  return (
    <section className="container py-section">
      <SectionHeader
        title="All plans include these features"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-[48px] md:gap-x-12 md:gap-y-[105px] 2xl:gap-x-[60px] 2xl:gap-y-[140px]">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center gap-1.5 md:gap-4 2xl:gap-5">
              <div className="flex-center">
                <IconComponent className="size-8 md:size-10 2xl:size-[52px]" />
              </div>
              <h3 className="text-xl leading-tight">
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