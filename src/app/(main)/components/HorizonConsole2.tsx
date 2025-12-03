
import Image from 'next/image';

const HorizonConsole2 = () => {
  return (
    <div className='relative w-full h-full pt-[40px] md:pt-[58px] 2xl:pt-[78px]'>
      <div className='w-full xs:w-[90%] flex-center relative mx-auto overflow-hidden'>
        <Image
          src="/assets/images/horizon-console.webp"
          alt="Horizon Console Main"
          width={1307}
          height={554}
          quality={100}
          priority
          className="object-cover min-w-[120%] xs:min-w-full xs:w-full h-full"
        />
      </div>
    </div>
  );
};

export default HorizonConsole2;