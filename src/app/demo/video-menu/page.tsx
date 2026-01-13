'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

const VideoMenuDemoPage = () => {

  const menus = [
    "Popular Items",
    "Small Bites",
    "Salads",
    "Burgers, Pitas & Wraps",
    "Veggie Delights",
    "Signature Chicken",
    "Lamb Specialities",
    "Seafood Delights",
    "Kids Menu",
    "Beverages",
    "Desserts",
    "Pizza Specials",
    "Pasta Favorites",
    "Appetizer Plates",
    "Hot Soups",
    "Grilled Items",
    "Vegan Choices",
    "Sizzlers",
    "Breakfast Specials",
    "Bread & Sides",
    "Sauces & Dips"
  ];

  const foodItems = [
    {
      id: 1,
      name: "Basil Cheese Pizza",
      category: "Vegetarian",
      price: 9.54,
      image: "/assets/images/menu/menu-1.webp"
    },
    {
      id: 2,
      name: "Peri Peri Fries",
      category: "Vegetarian",
      price: 2.99,
      image: "/assets/images/menu/menu-2.webp"
    },
    {
      id: 3,
      name: "Drum Sticks",
      category: "Non-Veg",
      price: 5.54,
      image: "/assets/images/menu/menu-3.webp"
    },
    {
      id: 4,
      name: "Chicken Nuggets",
      category: "Non-Veg",
      price: 3.99,
      image: "/assets/images/menu/menu-4.webp"
    },
    {
      id: 5,
      name: "Margherita",
      category: "Vegetarian",
      price: 8.54,
      image: "/assets/images/menu/menu-5.webp"
    },
    {
      id: 6,
      name: "Chicken Tenders",
      category: "Non-Veg",
      price: 4.54,
      image: "/assets/images/menu/menu-6.webp"
    },
  ];

  const { width } = useWindowSize();
  const isMobile = useMemo(() => !!width && width < 768, [width]);


  const foods = useMemo(() => {

    const foodItems1 = foodItems.slice(0, 3);
    const foodItems2 = foodItems.slice(3);
    const reversedFoodItems1 = foodItems.slice(0, 3).reverse();

    return isMobile ? [foodItems1, foodItems2, reversedFoodItems1] : [foodItems1, foodItems2];
  }, [isMobile, foodItems]);

  return (
    <section className='pt-10 md:pt-[33px] 2xl:pt-[45px]'>
      <h1 className='text-center text-[20px] 2xl:text-[28px] font-medium leading-none tracking-[-0.02em]'>
        Explore Our Best Sellers
      </h1>

      <div className="pt-5 md:pt-[27px] 2xl:pt-[36px] pb-12 md:pb-[75px] 2xl:pb-[100px] px-0 md:px-[60px] 2xl:px-[82px]">
        <EntryPoint
          id="#058286"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </div>

      <div className='max-w-[716px] md:max-w-[1097px] 2xl:max-w-[1464px] mx-auto'>
        <h2 className='text-center text-[20px] 2xl:text-[28px] font-medium leading-none tracking-[-0.02em] pb-4 md:pb-[27px] 2xl:pb-[36px]'>
          Explore Our Menu
        </h2>

        <div className='relative flex justify-start flex-nowrap gap-5 md:gap-[18px] 2xl:gap-6 overflow-hidden'>
          {menus.map((menu, index) => (
            <div key={index} className={cn('text-center text-xs 2xl:text-base border-b-[3px] font-medium leading-none tracking-[-0.02em] pb-1.5 2xl:pb-3 whitespace-nowrap', index === 0 ? 'text-primary font-semibold border-primary' : 'text-[#1C2B33]/30 font-medium border-transparent')}>
              {menu}
            </div>
          ))}

          <div className='absolute right-0 top-0 h-4 w-10 bg-white flex items-center justify-end'>
            <ChevronRight />
          </div>
        </div>


        <div className="grid gap-[26px] md:gap-[56px] 2xl:gap-y-[70px] overflow-hidden mt-12 md:mt-[52px] 2xl:mt-[70px]">
          {foods.map((item, i) => {
            return (
              <div key={i} className='flex gap-[26px] md:gap-[52px] 2xl:gap-[75px] '>
                {
                  item.map((item, j) => {
                    return (
                      <div
                        key={j}
                        className="bg-white rounded-xl border-2 border-[#E5EBEE] overflow-hidden flex min-w-[328px] 2xl:min-w-[438px]"
                      >
                        <div className="flex-1 flex flex-col justify-between pt-3 pl-4 2xl:pt-[18px] 2xl:pl-5 pb-3 2xl:pb-4">
                          <h3 className="text-xs 2xl:text-sm font-semibold text-primary mb-1.5 2xl:mb-2">{item.name}</h3>
                          <p className="text-xs 2xl:text-sm font-medium text-[#1C2B33]/30 mb-2.5 2xl:mb-3 leading-2">{item.category}</p>
                          <p className="text-xs 2xl:text-sm font-medium text-primary mb-3 2xl:mb-[18px] leading-5">${item.price.toFixed(2)}</p>
                          <button className="size-[18px] 2xl:size-6 bg-primary rounded-full flex items-center justify-center p-1">
                            <Plus color='white' />
                          </button>
                        </div>
                        <div className="relative w-[106px] 2xl:w-[142px]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VideoMenuDemoPage;

