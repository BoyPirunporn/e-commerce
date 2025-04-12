'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signIn as signAuth } from 'next-auth/react';
import { useStoreAlert } from '@/zustandStore/store-alert';
import ButtonCustom from '@/components/buttonCustom';
import { useState } from 'react';
import { report } from '@/lib/utils';
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
    const [loading, setLoading] = useState(false);
    const searchParam = useSearchParams();
    const route = useRouter();

    const alert = useStoreAlert();
    const form = useForm<SignInScheme>({
        resolver: zodResolver(signIn),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: SignInScheme) => {
        setLoading(true)
        try {
            const response = await signAuth("spring-credential", {
                email: data.email,
                password: data.password,
                redirect: false
            });

            if (response?.ok) {
                if (searchParam.get("redirect")) {
                    route.push(searchParam.get("redirect") as string)
                } else {
                    route.push("/")
                }
            }
            if (response?.error) {
                alert.onOpen(response?.error)
            }
        } catch (error) {
            report.error(error)
            alert.onOpen("Something went wrong")
        } finally {
            setLoading(false)
        }
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
                    <ButtonCustom className='h-15 text-lg' loading={loading} >Login</ButtonCustom>
                </form>
            </Form>
        </div>
    );
};

export default SignInForm;