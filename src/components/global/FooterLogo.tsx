"use client"

import { motion } from "motion/react";
import BrandLogoLg from "../svg/BrandLogoLg";

const FooterLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BrandLogoLg className="w-full" />
    </motion.div>
  );
};

export default FooterLogo;