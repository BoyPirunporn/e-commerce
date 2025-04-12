'use client';
import ButtonCustom from '@/components/buttonCustom';
import { cn, report } from '@/lib/utils';
import { useShippingStore } from '@/zustandStore/shipping-store';
import { AnimatePresence, motion } from 'framer-motion';
import PaymentStep from './PaymentStep';
import ShippingStep from './ShippingStep';
import { useForm } from 'react-hook-form';
import { shippingFormZod, ShippingFormZod } from '../schema/shipping-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useEffect } from 'react';


const ShippingClient = () => {
    const renderSteps = (step: number) => {
        switch (step) {
            case 1:
                return <ShippingStep />;
            case 2:
                return <PaymentStep />;

        }
    };
    const { steps, currentStep, nextStep, previousStep, direction, submitForm, formData } = useShippingStore();
    const form = useForm<ShippingFormZod>({
        resolver: zodResolver(shippingFormZod),
        defaultValues: {
            shippingAddress: {
                recipientName: "",
                phoneNumber: "",
                addressLine1: "",
                province: "",
                district: "",
                subDistrict: "",
                postalCode: ""
            },
            payment: {
                paymentMethod: "CASH"
            }
        }
    });

    report.info({currentStep})
    useEffect(() => {
        
        if (Object.keys(formData).length) {
            form.reset(formData);
        }
    }, [formData]);
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className='py-[100px] container'>
                <AnimatePresence mode='wait' custom={direction}>
                    <div className="flex flex-col  gap-5">
                        <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
                            {steps.map((item, index) => (
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
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-1/3 w-full  left-34 sm:left-47 md:left-66 lg:left-86 -translate-x-1/2">
                                            <div className={
                                                cn(
                                                    "border-t border-gray-300 w-[calc(100%-55px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]",
                                                )
                                            } />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* ✅ ใช้ AnimatePresence + motion.div พร้อม direction */}

                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: direction * 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex justify-center items-center w-full min-h-[500px]" // ✅ ทำให้ component อยู่กลางจอ
                        >
                            {renderSteps(currentStep)}
                        </motion.div>
                        <div className="flex justify-between">
                            <ButtonCustom type='button' disabled={currentStep === 1} onClick={previousStep}>BACK</ButtonCustom>
                            <ButtonCustom disabled={currentStep === steps.length}>NEXT</ButtonCustom>
                        </div>
                    </div>
                </AnimatePresence >
            </form >
        </Form>
    );
};

export default ShippingClient;;