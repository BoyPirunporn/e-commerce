'use client';
import { Form } from '@/components/ui/form';
import { cn, EachElement } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ShoppingCartStep from './ShoppingCartStep';
import ShippingStep from './ShippingStep';
import PaymentStep from './PaymentStep';
import ButtonCustom from '@/components/buttonCustom';

type Props = {};

const ShippingClient = (props: Props) => {
    const STEPS = ["Shipping Address", "Payment", "Review Order"];
    const [currentStep, setCurrentStep] = React.useState(1);

    const [direction, setDirection] = React.useState(1); // ✅ 1 = ไปข้างหน้า, -1 = ถอยหลัง

    const handleNext = () => {
        setDirection(1); // ✅ กำหนดให้ไปข้างหน้า
        setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        setDirection(-1); // ✅ กำหนดให้ถอยหลัง
        setCurrentStep(prev => prev - 1);
    };
    function getVariantForStep(stepNumber: number) {
        if (currentStep === stepNumber) {
            return "active";
        } else if (currentStep > stepNumber) {
            return "completed";
        } else {
            return "default";
        }
    }

    return (
        <div className='py-[100px] container'>
            <div className="flex flex-col  gap-5">
                <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
                    {STEPS.map((item, index) => (
                        <div key={index} className="relative flex-1 flex flex-col items-center  group">
                            {/* 🟢 Step Number */}
                            <div className={cn(
                                "flex items-center justify-center w-10 h-10 rounded-full text-sm text-white bg-gray-300",
                                (index + 1) <= currentStep && "bg-primary/80"
                            )}>
                                {index + 1}
                            </div>

                            {/* 🟡 Step Text */}
                            <p className="text-sm mt-2">{item}</p>

                            {/* 🔵 เส้นเชื่อมระหว่าง Step */}
                            {index < STEPS.length - 1 && (
                                <div className="absolute top-1/3 w-full  left-34 sm:left-47 md:left-66 lg:left-86 -translate-x-1/2">
                                    <div className="border-t border-gray-300 w-[calc(100%-55px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ✅ ใช้ AnimatePresence + motion.div พร้อม direction */}
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: direction*100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex justify-center items-center w-full min-h-[500px]" // ✅ ทำให้ component อยู่กลางจอ
                    >
                        {currentStep === 1 && <ShippingStep callback={(value) => {}}/>}
                        {currentStep === 2 && <PaymentStep />}
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between">
                    <ButtonCustom disabled={currentStep === 1} onClick={handleBack}>BACK</ButtonCustom>
                    <ButtonCustom disabled={currentStep === STEPS.length} onClick={handleNext}>NEXT</ButtonCustom>
                </div>
            </div>

        </div >
    );
};

export default ShippingClient;