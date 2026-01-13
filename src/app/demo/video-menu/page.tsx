'use client';

import { cn } from '@/lib/utils';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';

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
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Peri Peri Fries",
      category: "Vegetarian",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Drum Sticks",
      category: "Non-Veg",
      price: 5.54,
      image: "https://images.unsplash.com/photo-1626645738192-c2a33ec136e5?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Chicken Nuggets",
      category: "Non-Veg",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Margherita",
      category: "Vegetarian",
      price: 8.54,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Chicken Tenders",
      category: "Non-Veg",
      price: 4.54,
      image: "https://images.unsplash.com/photo-1626087926916-7fd017cd3453?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section className='pt-[162px] md:pt-[45px] 2xl:pt-10'>
      <h1 className='text-center text-[30px] 2xl:text-[40px] font-medium leading-none tracking-[-0.02em]'>
        Explore Our Best Sellers
      </h1>

      <div className="py-10 md:py-8 2xl:py-11">
        <EntryPoint
          id="#859422"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <div>
        <h2 className='text-center text-[30px] 2xl:text-[40px] font-medium leading-none tracking-[-0.02em] pb-4 md:pb-[27px] 2xl:pb-[36px]'>
          Explore Our Menu
        </h2>

        <div className='relative flex justify-start flex-nowrap gap-5 md:gap-[18px] 2xl:gap-6 overflow-hidden'>
          {menus.map((menu, index) => (
            <div key={index} className={cn('text-center text-xs 2xl:text-base border-b-[3px] font-medium leading-none tracking-[-0.02em] pb-1.5 2xl:pb-3 whitespace-nowrap', index === 0 ? 'text-primary font-semibold border-primary' : 'text-[#1C2B33]/30 font-medium border-transparent')}>
              {menu}
            </div>
          ))}

          <div className='absolute right-0 top-0 size-4 bg-white -mt-0.5'>
            <ChevronRight />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[26px] md:gap-x-[52px] md:gap-y-[56px] 2xl:gap-x-[75px] 2xl:gap-y-[70px] mt-8 md:mt-6 2xl:mt-8">
          {foodItems.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-[#E5EBEE] overflow-hidden flex"
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
          })}
        </div>

      </div>
    </section>
  );
};

export default VideoMenuDemoPage;

