'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const SignIn = () => {
    const [stateAuth, setStateAuth] = useState<'sign-in' | 'sign-up'>("sign-in");

    const handleSignUpFlip = () => { };
    return (
        <div className='px-10 py-[140px] flex justify-center bg-text/20'>
            <div className=" relative w-full max-w-[580px] min-h-[600px] bg-white rounded-lg ">
                <AnimatePresence mode='wait'>
                    {stateAuth === "sign-in" ? (
                        <motion.div
                            key={"sign-in"}
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='absolute w-full h-full  rounded-xl flex flex-col items-center justify-center'
                        >
                            <SignInForm handleFlip={() => setStateAuth('sign-up')} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={"sign-up"}
                            initial={{ rotateY: -90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: 90, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='absolute w-full h-full  shadown-lg rounded-xl flex flex-col items-center justify-center'
                        >
                            <SignUpForm handleFlip={() => setStateAuth('sign-in')} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SignIn;
