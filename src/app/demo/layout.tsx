'use client';

import CartIcon from "@/components/icons/cart-icon";
import MenuIcon2 from "@/components/icons/menu-icon2";
import PoweredByHorizon from "@/components/svg/PoweredByHorizon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type DemoRoute = {
  title?: string;
  description: string;
  brand?: string | React.ReactNode;
};

const demoRoutes: Record<string, DemoRoute> = {
  '/demo/new-arrivals': {
    title: 'New Arrivals',
    description: 'Show your freshest products in a swipeable feed.',
  },
  '/demo/trending': {
    title: 'Trending',
    description: 'Highlight what’s trending now in one continuous swipe.',
  },
  '/demo/see-it-in-action': {
    title: 'See It in Action',
    description: 'Let shoppers see the product in real-world use.',
  },
  '/demo/user-review': {
    title: 'User Review',
    description: 'Turn customer reviews into quick, trust-building video clips.',
  },
  '/demo/next-best-buy': {
    title: 'Next Best Buy',
    description: 'Recommend smart add-ons and alternatives.',
  },
  '/demo/ugc': {
    title: 'UGC',
    description: 'Bring real user videos on-site for instant social proof.',
  },
  '/demo/website-hero': {
    title: 'Website Hero',
    description: 'Turn your hero into a short-form story that hooks fast.',
  },
  '/demo/website-explainer': {
    title: 'Website Explainer',
    description: 'Break down how it works in a quick swipeable series.',
  },
  '/demo/afghan-wireless': {
    title: '',
    description: 'Horizon Demo for Afghan Wireless',
    brand: <Image src="/assets/images/demo/afghan-wireless/afghan-wireless-logo.webp" alt="Afghan Wireless" width={30} height={30} className="size-5 md:size-[22px] 2xl:size-[30px]" />,
  },
  '/demo/mtb': {
    title: '',
    description: 'Horizon Demo for MTB Bank',
  },
  '/demo/launch': {
    title: '',
    description: 'Horizon Demo',
  },
  '/demo/launch/product': {
    title: '',
    description: 'Horizon Demo',
  },
  '/demo/restaurant': {
    title: '',
    description: 'Horizon Demo',
    brand: "RESTAURANT BRAND"
  },
  '/demo/restaurant/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "FOOD BRAND"
  },
  '/demo/home': {
    title: '',
    description: 'Horizon Demo',
    brand: "HOME BRAND"
  },
  '/demo/home/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "FURNITURE BRAND"
  },
  '/demo/fashion': {
    title: '',
    description: 'Horizon Demo',
    brand: "FASHION BRAND"
  },
  '/demo/fashion/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "FASHION BRAND"
  },
  '/demo/electronics': {
    title: '',
    description: 'Horizon Demo',
    brand: "ELECTRONICS BRAND"
  },
  '/demo/electronics/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "ELECTRONICS BRAND"
  },
  '/demo/fitness': {
    title: '',
    description: 'Horizon Demo',
    brand: "FITNESS BRAND"
  },
  '/demo/fitness/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "FITNESS BRAND"
  },
  '/demo/beauty': {
    title: '',
    description: 'Horizon Demo',
    brand: "BEAUTY BRAND"
  },
  '/demo/beauty/product': {
    title: '',
    description: 'Horizon Demo',
    brand: "BEAUTY BRAND"
  },
  '/demo/video-menu': {
    title: '',
    description: 'Horizon Demo',
    brand: "RESTAURANT BRAND"
  },

};


const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const demoInfo = useMemo(() => {
    const normalizedPathname = pathname.replace(/\/$/, '');
    const routeKey = Object.keys(demoRoutes).find(
      key => key.replace(/\/$/, '') === normalizedPathname
    );
    return routeKey ? demoRoutes[routeKey] : {
      title: 'New Arrivals',
      description: 'Show your freshest products in a swipeable feed so visitors always see what\'s new first.',
    };
  }, [pathname]);


  const isClientDemoPage = useMemo(() => {
    const pages = ['/demo/mtb', '/demo/mtb/'];
    return pages.includes(pathname);
  }, [pathname]);

  return (
    <main>
      <header className={cn(isClientDemoPage && "sticky top-0 z-20")}>
        {/* Top Banner */}
        <div className="bg-[#1C2B33] text-white text-center py-2 2xl:py-2.5 px-4">
          <p className="text-xs md:text-sm xl:text-base text-white font-medium">
            {demoInfo?.title ? `${demoInfo.title} - ${demoInfo.description}` : demoInfo?.description}
          </p>
        </div>

        {/* Navigation Bar */}
        {!isClientDemoPage && (
          <nav className="">
            <div className="demo-container">
              <div className="flex items-center justify-between h-16 md:h-[84px]">
                {/* Hamburger Menu */}
                <button
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Menu"
                >
                  <MenuIcon2 />
                </button>

                {/* Brand Name */}
                <h1 className="text-lg 2xl:text-2xl font-medium text-primary">
                  {demoInfo?.brand ?? "YOUR BRAND"}
                </h1>

                {/* Shopping Bag Icon */}
                <button
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Shopping bag"
                >
                  <CartIcon />
                </button>
              </div>
            </div>
          </nav>)}
      </header>

      <main className={cn(!isClientDemoPage && "demo-container")}>
        {children}
      </main>

      {!isClientDemoPage && <footer className="flex-center pt-8 pb-8 md:pt-8 md:pb-9 2xl:pt-[45px] 2xl:pb-[45px]">
        <Link href="/demo"> <PoweredByHorizon /> </Link>
      </footer>
      }
    </main>
  );
};

export default DemoLayout;