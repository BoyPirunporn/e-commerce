'use client';
import { Form } from '@/components/ui/form';
import { cn, EachElement } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import React from 'react'
import ShoppingCartStep from './ShoppingCartStep';
import ShippingStep from './ShippingStep';
import PaymentStep from './PaymentStep';
import ButtonCustom from '@/components/buttonCustom';

type Props = {}

const ShippingClient = (props: Props) => {
    const STEPS = ["Shopping Cart", "Shipping", "Payment", "Review Order"]
    const [currentStep, setCurrentStep] = React.useState(2)

    function getVariantForStep(stepNumber: number) {
        if (currentStep === stepNumber) {
            return "active"
        } else if (currentStep > stepNumber) {
            return "completed"
        } else {
            return "default"
        }
    }
    return (
        <div className='py-[100px] container'>
            <div className="flex flex-row  gap-5">
                <EachElement
                    of={STEPS}
                    render={(item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center w-full step relative gap-3'>
                                <div className={
                                    cn(
                                        "text-center w-10 h-10 rounded-full p-3 text-sm bg-gray-300 text-white",
                                        (index + 1) <= currentStep && "bg-primary/80"
                                    )
                                } >{index + 1}</div>
                                <p className='text-sm'>{item}</p>
                            </div>
                        )
                    }}
                />

            </div>
            <AnimatePresence mode='wait'>
                {currentStep === 1 && <ShoppingCartStep />}
                {currentStep === 2 && <ShippingStep />}
                {currentStep === 3 && <PaymentStep />}
            </AnimatePresence>

            <div className="flex justify-between">
                <ButtonCustom onClick={() => setCurrentStep(p => p - 1)}>BACK</ButtonCustom>
                <ButtonCustom onClick={() => setCurrentStep(p => p >= STEPS.length ? p : p + 1)}>NEXT</ButtonCustom>
            </div>
        </div>
    )
}

export default ShippingClient