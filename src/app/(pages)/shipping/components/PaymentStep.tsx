import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const PaymentStep = (props: Props) => {
  return (
    <motion.div
      // key={"payment"}
      // initial={{
      //   opacity: 0,
      //   x: 150
      // }}
      // animate={{
      //   opacity: 1,
      //   x: 0
      // }}
      // transition={{
      //   duration: .5,
      //   ease: "easeIn"
      // }}
      // exit={{
      //   opacity: 0,
      //   x: 150,
      //   transition: {
      //     duration: .3,
      //     ease: "easeOut"
      //   }
      // }}
    >PaymentStep</motion.div>
  );
};

export default PaymentStep;