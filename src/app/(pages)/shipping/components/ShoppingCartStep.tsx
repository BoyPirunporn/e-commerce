import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ShoppingCartStep = (props: Props) => {
    return (
        <motion.div
        key={"shoppingCart"}
            initial={{
                opacity: 0,
                x: 150
            }}
            animate={{
                opacity:1,
                x:0
            }}
            transition={{
                duration:.5,
                ease:"easeInOut"
            }}
            exit={{
                opacity:0,
                x:150,
                transition:{
                    duration:.3,
                    ease:"easeOut"
                }
            }}
        >ShoppingCartStep</motion.div>
    )
}

export default ShoppingCartStep