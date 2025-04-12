'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useStoreAlert } from '@/zustandStore/store-alert';
import ButtonCustom from '@/components/buttonCustom';
import { register } from '@/service/auth.service';
import { report } from '@/lib/utils';


type Props = {
    handleFlip: () => void;
};
const signIn = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string()
}).refine((data) => {
    if (data.password !== data.confirmPassword) {
        return false;
    } else {
        return true;
    }
}, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

type SignInScheme = z.infer<typeof signIn>;

const SignUpForm = ({
    handleFlip
}: Props) => {
    const [loading, setLoading] = useState(false);
    const searchParam = useSearchParams();
    const route = useRouter();

    const alert = useStoreAlert();

    const form = useForm<SignInScheme>({
        resolver: zodResolver(signIn),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (data: SignInScheme) => {
        setLoading(true)
        try {
            await register(data.email, data.password);
            handleFlip()
        } catch (error) {
            report.error(error)
            alert.onOpen("Something went wrong")
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className='w-full h-full px-10 py-4'>
            <h1 className="text-3xl xl:text-5xl text-text font-bold mb-10 text-center">Sign Up</h1>
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Confirm Password" {...field} type='password' className='h-[50px]' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-row">
                        <p>Aready  an account? <span className='underline font-bold text-primary cursor-pointer' onClick={handleFlip}>Sign In</span></p>
                    </div>
                    <ButtonCustom loading={loading} className='h-15 text-lg'>Register</ButtonCustom>
                </form>
            </Form>
        </div>
    );
};

export default SignUpForm;