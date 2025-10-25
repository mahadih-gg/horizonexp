"use client"

import { motion } from 'motion/react';
import Image from 'next/image';

const HorizonConsole = () => {
  return (
    <div className='relative w-full h-full pt-[84px] md:pt-[58px] 2xl:pt-[78px]'>
      <div className='w-[90%] md:w-[70%] relative mx-auto'>
        <motion.div
          initial={{ opacity: 1, left: 0 }}
          whileInView={{ opacity: 1, left: "-10%" }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true, amount: 0.8 }}
          className='w-[80%] absolute top-1/2 -translate-y-1/2! -left-[10%]'
        >
          <Image
            src="/assets/images/horizon-console-left.webp"
            alt="Horizon Console"
            width={864}
            height={462}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full relative top-0 left-0 z-10 flex-center'
        >
          <Image
            src="/assets/images/horizon-console-main.webp"
            alt="Horizon Console"
            width={1015}
            height={554}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, right: 0 }}
          whileInView={{ opacity: 1, right: "-10%" }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true, amount: 0.8 }}
          className='w-[80%] absolute top-1/2 -translate-y-1/2! -right-[10%]'
        >
          <Image
            src="/assets/images/horizon-console-right.webp"
            alt="Horizon Console"
            width={864}
            height={462}
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HorizonConsole;