'use client';

import CartIcon from "@/components/icons/cart-icon";
import MenuIcon2 from "@/components/icons/menu-icon2";
import PoweredByHorizon from "@/components/svg/PoweredByHorizon";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const demoRoutes: Record<string, { title: string; description: string }> = {
  '/demo/new-arrivals': {
    title: 'New Arrivals',
    description: 'Show your freshest products in a swipeable feed.',
  },
  '/demo/trending': {
    title: 'Trending',
    description: 'Surface what\'s hot right now so shoppers follow social proof and move faster.',
  },
  '/demo/see-it-in-action': {
    title: 'See It in Action',
    description: 'Show the product in real use cases so customers can visualize ownership.',
  },
  '/demo/user-review': {
    title: 'User Review',
    description: 'Turn real customer videos into a proof wall so visitors trust you more and hesitate less.',
  },
  '/demo/next-best-buy': {
    title: 'Next Best Buy',
    description: 'Recommend the next logical product so you quietly increase AOV.',
  },
  '/demo/ugc': {
    title: 'UGC',
    description: 'Highlight content from your customers and fans so your brand feels alive.',
  },
  '/demo/website-hero': {
    title: 'Website Hero',
    description: 'Hook visitors with bold, snackable clips that instantly show why your product matters.',
  },
  '/demo/website-explainer': {
    title: 'Website Explainer',
    description: 'Walk visitors through how it works in quick, swipeable steps so they "get it" in seconds.',
  },
};

const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const demoInfo = useMemo(() => {
    return demoRoutes[pathname] || {
      title: 'New Arrivals',
      description: 'Show your freshest products in a swipeable feed so visitors always see what\'s new first.',
    };
  }, [pathname]);

  return (
    <main>
      <header>
        {/* Top Banner */}
        <div className="bg-primary text-white text-center py-2 2xl:py-2.5 px-4">
          <p className="text-sm xl:text-base text-white">
            {demoInfo.title} - {demoInfo.description}
          </p>
        </div>

        {/* Navigation Bar */}
        <nav className="border-b border-secondary">
          <div className="container">
            <div className="flex items-center justify-between h-16 md:h-[84px]">
              {/* Hamburger Menu */}
              <button
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Menu"
              >
                <MenuIcon2 />
              </button>

              {/* Brand Name */}
              <h1 className="text-lg md:text-2xl font-medium text-primary">
                YOUR BRAND
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
        </nav>
      </header>

      <main className="container pt-8 md:pt-[45px] 2xl:pt-[60px]">
        {children}
      </main>

      <footer className="flex-center pt-8 pb-8 md:pt-8 md:pb-9 2xl:pt-[45px] 2xl:pb-[45px]">
        <PoweredByHorizon />
      </footer>
    </main>
  );
};

export default DemoLayout;