'use client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

type Props = {
    handleFlip: () => void;
};

const signIn = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(6, "Password must be at least 6 characters.")
});

type SignInScheme = z.infer<typeof signIn>;

const SignInForm = ({
    handleFlip
}: Props) => {
    const form = useForm<SignInScheme>({
        resolver: zodResolver(signIn),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: SignInScheme) => {

    };
    return (
        <div className='w-full h-full px-10 py-4'>
            <h1 className="text-3xl xl:text-5xl text-text font-bold mb-10 text-center">Sign In</h1>
            <Form {...form}>
                <form className='flex flex-col gap-10' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-text'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} className='h-[50px]' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} type='password' className='h-[50px]' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-row">
                        <p>Don't have an account? <span className='underline font-bold text-primary cursor-pointer' onClick={handleFlip}>Sign Up</span></p>
                    </div>
                    <Button className='h-15 text-lg'>Login</Button>
                </form>
            </Form>
        </div>
    );
};

export default SignInForm;