'use client';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

type Props = {}

const ShoppingCartStep = () => {

    const form = useForm();
    return (
        <div className="flex flex-col">
            {/* <Form>

            </Form> */}
        </div>
        // <motion.div
        // key={"shoppingCart"}
        //     initial={{
        //         opacity: 0,
        //         x: 150
        //     }}
        //     animate={{
        //         opacity:1,
        //         x:0
        //     }}
        //     transition={{
        //         duration:.5,
        //         ease:"easeIn"
        //     }}
        //     exit={{
        //         opacity:0,
        //         x:150,
        //         transition:{
        //             duration:.3,
        //             ease:"easeOut"
        //         }
        //     }}
        // >ShoppingCartStep</motion.div>
    )
}

export default ShoppingCartStep