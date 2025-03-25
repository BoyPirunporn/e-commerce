import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'


const ButtonCustom = ({
    children,
    loading = false,
    ...props
}: React.ComponentProps<typeof Button> & {
    loading?: boolean;
}) => {
    return (
        <Button
            disabled={loading}
            {...props}
        >
            <svg
                className={cn("animate-spin h-10 w-10 text-primary/2", loading ? "block" : "hidden")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >

                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                />
            </svg>
            {children}
        </Button>
    )
}

export default ButtonCustom