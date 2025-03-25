import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ShippingStep = (props: Props) => {
    return (
        <motion.div key={"shipping"}
            initial={{
                opacity: 0,
                x: 150
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: .5,
                ease: "easeInOut"
            }}
            exit={{
                opacity: 0,
                x: 150,
                transition:{
                    duration:.3,
                    ease:"easeOut"
                }
            }}
        >ShippingStep</motion.div>
    )
}

export default ShippingStep