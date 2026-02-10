"use client";

import HmFacebookIcon from "@/components/icons/hm-facebook-icon";
import HmInstagramIcon from "@/components/icons/hm-instagram-icon";
import HmPinterestIcon from "@/components/icons/hm-pinterest-icon";
import HmTiktokIcon from "@/components/icons/hm-tiktok-icon";
import HmXIcon from "@/components/icons/hm-x-icon";
import HmYoutubeIcon from "@/components/icons/hm-youtube-icon";
import ReviewSvg from "@/components/svg/ReviewsSvg";
import { Marquee } from "@/components/ui/marquee";
import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import { Check } from "lucide-react";
import Image from "next/image";
import { OrderFormSection } from "./components/OrderFormSection";

const HardMarketPage = () => {
  const headerItems = [
    "Free delivery across Bangladesh",
    "Limited-Time Launch Offer",
    "Cash on Delivery",
    "Fast Delivery Nationwide"
  ];

  return (
    <div className="antialiased">
      {/* 1. Top Promotional Banner */}
      <header className="bg-[#07A753] text-white flex items-center h-10 2xl:h-[54px]">
        <Marquee items={headerItems} textClassName="text-white font-bold pr-[120px] 2xl:pr-[220] text-base 2xl:text-xl" separator={" "} />
      </header>

      {/* 3. Hero Section */}
      <section className="relative hm-container pt-20 2xl:pt-[107px] mb-[72px] lg:mb-[75px] 2xl:mb-[100px]">
        <div className="flex justify-center lg:hidden gap-4 2xl:gap-[25px] mb-5 2xl:mb-[34px]">
          <p className="text-lg 2xl:text-2xl text-[#1C2B33] font-bold underline border-current leading-none">Customer Review</p>
          <ReviewSvg />
        </div>
        <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="">
            <div className="hidden lg:flex gap-4 2xl:gap-[22px] mb-5 2xl:mb-7">
              <p className="text-lg 2xl:text-2xl text-[#1C2B33] font-bold underline border-current leading-none">Customer Review</p>
              <ReviewSvg />
            </div>
            <h1 className="text-4xl md:text-5xl 2xl:text-[62px] font-bold text-[#1C2B33] mb-4">Hard Markets</h1>
            <p className="text-[#1C2B33] text-xl 2xl:text-2xl mb-4 max-w-4xl leading-[30px] 2xl:leading-[40px]">
              A raw, practical guide to building in Bangladesh&apos;s toughest trenches - where constraints are real, capital is scarce, and &quot;best practices&quot; often fail.
            </p>

            <p className="hidden lg:block text-[#1C2B33] text-xl 2xl:text-2xl mb-4">By <span className="font-bold text-[#1C2B33]">Fahim Salam</span></p>

            <div className="hidden lg:inline-block w-[144px] 2xl:w-[191px] py-px 2xl:py-[5px] px-[15px] 2xl:px-[10px] bg-[#EDF8FF]  font-bold border-[3px] rounded-[10px] 2xl:rounded-xl border-[#2162A1]">
              <span className="text-xs 2xl:text-base">Hardcover</span>
              <p className="text-sm 2xl:text-lg">BDT 750/-</p>
            </div>

            <ul className="space-y-2 mb-[56px] 2xl:mb-[75px] pt-[36px] 2xl:pt-[46px]">
              {[
                "Learn why resilience beats brilliance in hard markets",
                "Avoid copy-pasting Silicon Valley playbooks that don't fit",
                "Make better calls on distribution, hiring, pricing, and survival",
                "Build for reality - and still win long-term",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#1C2B33] text-sm md:text-base">
                  {/* <Check className="size-5 shrink-0 text-[#07A753] mt-0.5" strokeWidth={2.5} /> */}
                  <span className="text-base 2xl:text-xl font-bold text-[#1C2B33] leading-[150%] lg:leading-[30px] 2xl:leading-[40px]">✅ {item}</span>
                </li>
              ))}
            </ul>

            <p className="block lg:hidden text-[#1C2B33] text-xl 2xl:text-2xl mb-6">By <span className="font-bold text-[#1C2B33]">Fahim Salam</span></p>

            <div className="flex justify-start items-center gap-[23px]">
              <div className="inline-flex flex-col items-start justify-center lg:hidden min-w-[144px] h-[50px] lg:h-auto py-px px-[15px] bg-[#EDF8FF] font-bold border-[3px] rounded-[10px] border-[#2162A1]">
                <span className="text-xs 2xl:text-base">Hardcover</span>
                <p className="text-sm 2xl:text-lg">BDT 750/-</p>
              </div>

              <button
                type="button"
                className="min-w-[129px] h-[50px] lg:min-w-[230px] lg:h-[88px] 2xl:min-w-[307px] 2xl:h-[118px] bg-[#0B61CD] text-white font-bold text-lg lg:text-[33px] 2xl:text-[44px] rounded-[11px] lg:rounded-[20px] 2xl:rounded-[28px] hover:opacity-90 transition cursor-pointer"
              >
                BUY NOW
              </button>
            </div>

          </div>
          <div className="relative flex justify-center h-full">
            <Image
              src="/assets/images/lp/hard-market/hero.webp"
              alt="Hard Markets by Fahim Salam"
              width={557}
              height={871}
              // fill
              className="h-[320px] lg:h-[645px] 2xl:h-[868px] aspect-557/871 object-center object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4. Hear from the author */}
      <section className="hm-container">
        <h2 className="text-[42px] md:text-[57px] font-bold text-[#1C2B33] mb-[22px] 2xl:mb-[30px]">Hear from the author</h2>

        <EntryPoint
          id="#501419"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />

      </section>

      {/* 5. Book overview */}
      <section className="bg-[#07A753]/5 my-[72px] lg:my-[86px] 2xl:my-[115px] py-[48px] md:py-[35px] 2xl:py-[47px]">
        <div className="hm-container text-base lg:text-xl 2xl:text-[26px]">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1C2B33] mb-5 2xl:mb-[26px]">Book overview</h2>
          <div className="space-y-4 text-[#1C2B33] leading-[30px] 2xl:leading-[40px] mb-6">
            <p className="text-[#1C2B33] leading-[30px] 2xl:leading-[40px] max-w-[1280px]">
              Forget polished playbooks. HARD MARKETS is a raw field guide forged in eight years of building within Bangladesh&apos;s toughest trenches - where constraints aren&apos;t edge cases, they&apos;re the default.
              <br />
              <br />
              Dismantling myths of quick fixes, it reveals why these markets demand resilience over brilliance and patience over speed. You&apos;ll learn how real progress gets made when trust is slow, distribution is fragmented, talent is uneven, and &quot;best practices&quot; imported from elsewhere quietly fail. This is not startup inspiration - it&apos;s operating reality.
              <br />
              <br />
              Whether you&apos;re a founder, investor, or builder, HARD MARKETS gives you a practical roadmap for navigating structural gaps and turning constraints into durable advantage. It breaks down the decisions that actually matter: where leverage comes from, how to survive long cycles, how to build momentum without burning out, and how to create systems that keep working when conditions don&apos;t.
            </p>
          </div>
          <p className=" text-[#1C2B33] mb-3">Inside, you&apos;ll find:</p>
          <ul className="space-y-2 list-disc list-inside text-[#1C2B33]">
            <li>Clear mental models for making decisions under uncertainty and friction</li>
            <li>Hard-earned lessons on distribution, execution, and trust in constraint markets</li>
            <li>The tradeoffs that separate short-term hacks from long-term compounding</li>
            <li>A framework for building teams, products, and ecosystems that last</li>
          </ul>
          <br />
          <p className="text-[#1C2B33]">
            Start stronger, fail smarter, and master the world&apos;s most challenging frontiers.
          </p>

          <button
            type="button"
            className="min-w-[129px] h-[50px] lg:min-w-[157px] lg:h-[58px] 2xl:min-w-[210px] 2xl:h-[78px] px-4 2xl:px-6 mt-[40px] 2xl:mt-[50px] bg-[#0B61CD] text-white font-bold text-lg lg:text-[22px] 2xl:text-[29px] rounded-[11px] lg:rounded-[14px] 2xl:rounded-[18px] hover:opacity-90 transition cursor-pointer"
          >
            BUY NOW
          </button>
        </div>
      </section>

      {/* 6. Built in Hard Markets */}
      <section className=""
        style={{
          background: "url('/assets/images/lp/hard-market/section-bg.webp') no-repeat left bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-0 lg:gap-5 2xl:gap-6">
          <div className="hm-container-lg-l w-full lg:flex-[52] lg:min-w-0 text-white flex flex-col justify-center pt-[100px] 2xl:pt-[133px] pb-[118px] lg:pb-[76px] 2xl:pb-[102px]">
            <h2 className="text-[42px] md:text-[57px] font-bold text-white text-center mb-[18px] 2xl:mb-[22px]">Built in Hard Markets</h2>
            <p className="text-white/95 text-xs md:text-lg 2xl:text-xl text-center mb-[56px] 2xl:mb-[75px] leading-[26px] 2xl:leading-[34px]">No inspiration. No theory. <br /> Just what works.</p>
            <div className="grid grid-cols-3 gap-x-[15px] gap-y-[40px] lg:gap-x-[38px] lg:gap-y-[40px] 2xl:gap-x-[43px] 2xl:gap-y-[53px] mb-[72px] lg:mb-[46px] 2xl:mb-[62px]">
              {[
                "Ground-truth thinking",
                "Constraint-driven execution",
                "Long-term survival skills",
                "Emerging-market reality",
                "Operating without safety nets",
                "Resilience over brilliance",
              ].map((item, i) => (
                <div key={i} className="flex flex-col justify-center items-center gap-4 lg:gap-6 2xl:gap-[31px]">
                  <span className="flex items-center justify-center size-12 lg:size-[72px] 2xl:size-[96px] rounded-full bg-white shrink-0 p-3">
                    <Check className="size-full" strokeWidth={4} color="#07A753" />
                  </span>
                  <span className="text-xs md:text-base 2xl:text-xl text-center text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="min-w-[129px] h-[50px] lg:min-w-[157px] lg:h-[58px] 2xl:min-w-[210px] 2xl:h-[78px] px-4 2xl:px-6 bg-[#0B61CD] text-white font-bold text-lg lg:text-[33px] 2xl:text-[29px] rounded-[11px] lg:rounded-[14px] 2xl:rounded-[18px] hover:opacity-90 transition cursor-pointer"
              >
                BUY NOW
              </button>
            </div>
          </div>
          <div className="w-full lg:flex-[48] lg:min-w-0 aspect-[430/427] lg:aspect-auto lg:self-stretch lg:min-h-0 relative">
            <Image
              src="/assets/images/lp/hard-market/built-in-hard-markets.webp"
              alt="Hard market environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <OrderFormSection />

      {/* 8. Footer */}
      <footer className="hm-container py-6 2xl:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 lg:gap-4 2xl:gap-6">
          <span className="text-[#1C2B33] text-base 2xl:text-xl font-semibold order-2 md:order-1">
            Copyright {new Date().getFullYear()} by Fahim Salam
          </span>
          <div className="flex gap-2 2xl:gap-3 order-1 md:order-2 pb-[72px] lg:pb-0">
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="Facebook"><HmFacebookIcon className="size-[32px] 2xl:size-[42px]" /></a>
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="X"><HmXIcon className="size-[32px] 2xl:size-[42px]" /></a>
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="Instagram"><HmInstagramIcon className="size-[32px] 2xl:size-[42px]" /></a>
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="Pinterest"><HmPinterestIcon className="size-[32px] 2xl:size-[42px]" /></a>
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="TikTok"><HmTiktokIcon className="size-[32px] 2xl:size-[42px]" /></a>
            <a href="#" className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label="YouTube"><HmYoutubeIcon className="size-[32px] 2xl:size-[42px]" /></a>
          </div>
          <span className="text-[#1C2B33] text-base 2xl:text-xl font-semibold order-3">Built by Horizon & Nuport</span>
        </div>
      </footer>
    </div>
  );
};

export default HardMarketPage;
