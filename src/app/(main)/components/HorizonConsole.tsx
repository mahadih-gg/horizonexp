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
            alt="Horizon Console Left"
            width={2592}
            height={1386}
            quality={100}
            priority
            className="object-cover"
            sizes="(max-width: 1920px) 100vw, 1920px"
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
            alt="Horizon Console Main"
            width={3045}
            height={1663}
            quality={100}
            priority
            className="w-full object-cover rounded-[10px] md:rounded-3xl 2xl:rounded-[28px]"
            sizes="(max-width: 1920px) 100vw, 1920px"
            style={{
              boxShadow: "0px 0px 20px 0px #0000000A"
            }}
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
            alt="Horizon Console Right"
            width={2592}
            height={1386}
            quality={100}
            priority
            className="object-cover"
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HorizonConsole;