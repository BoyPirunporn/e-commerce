import { clsx, type ClassValue } from "clsx";
import { Children } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const formatPrice = (price: number, currency: "USD" | "THB" = "USD") => {
  const format = switchCurrency(currency);
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency,
  }).format(price);
};


const switchCurrency = (currency: "USD" | "THB") => {
  switch (currency) {
    case "USD":
      return "en-US";
    case "THB":
      return "th-TH";
  }
};

export const EachElement = <T>({ of, render }: { of: T[]; render: (item: T, index: number) => React.JSX.Element; }) => Children.toArray(of.map(render));


export const report = {
  error: (message: any,context?: string) => console.error(`Error in ${context || 'unknown context'}:`, message),
  info: (message: any,context?: string) => console.info(`Info in ${context || 'unknown context'}:`, message),
  warning: (message: any,context?: string) => console.warn(`Warning in ${context || 'unknown context'}:`, message),
};

