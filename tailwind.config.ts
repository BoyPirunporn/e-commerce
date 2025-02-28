import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem", // ค่าเริ่มต้น (16px)
				xs: "1.5rem",
				sm: "2rem",      // 32px เมื่อหน้าจอเล็ก
				md: "3rem",      // 48px เมื่อหน้าจอกลาง
				lg: "4rem",      // 64px เมื่อหน้าจอใหญ่
				xl: "5rem",      // 80px เมื่อจอใหญ่มาก
			},
		},
		screens: {
			xs: "374px",
			sm: "540px",
			md: "720px",
			lg: "960px",
			xl: "1140px",
			'2xl': '1320px',
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.3s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
