"use client";

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Text } from '../ui/text';

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topLabel?: string | React.ReactNode;
  centered?: boolean;
  className?: string;
  extraContent?: React.ReactNode;
};

const SectionHeader = ({ title, description, topLabel, centered = true, className, extraContent }: Props) => {

  return (
    <div className={cn('text-primary-text text-left pb-[52px] md:pb-[60px] 2xl:pb-20', centered && 'text-center', className)}>
      {
        topLabel && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          // viewport={{ once: true, amount: 0.8 }}
          >
            <Text variant="top-label" className='pb-4'>
              <span className="text-black-gradient">
                {topLabel}
              </span>
            </Text>
          </motion.div>
        )
      }
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true, amount: 0.8 }}
        className='text-inherit'
      >
        <Text variant="section-heading" className='text-inherit'>
          {title}
        </Text>
      </motion.div>
      {
        description && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // viewport={{ once: true, amount: 0.8 }}
            className='text-inherit'
          >
            <Text variant="section-subheading" className='pt-8 text-inherit'>
              {description}
            </Text>
          </motion.div>
        )
      }

      {!!extraContent &&
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        // viewport={{ once: true, amount: 0.8 }}
        >
          {extraContent}
        </motion.div>
      }
    </div>
  );
};

export default SectionHeader;