import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import ThemeSwitcher from "@/components/fdscluster/theme-switcher";
import Head from "@/components/fdscluster/head";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "FedustriaCluster - Modern Minecraft Cloud Solution",
	description: "The FedustriaCluster is a modern minecraft cloud solution.",
	authors: [
		{
			name: "Fedox",
			url: "https://fedox.ovh"
		},
		{
			name: "Austria7",
			url: "https://github.com/Austria7"
		}
	],
	keywords: ["minecraft", "cloud", "cluster", "fdx", "fedustria", "fedustriacluster"]
};

export const viewport: Viewport = {
	themeColor: "#2196F3",
	initialScale: 1,
	viewportFit: "cover"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head />
			<body className={`${openSans.variable} dark:bg-dark-one`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<div className="fixed bottom-4 right-4">
						<ThemeSwitcher />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
