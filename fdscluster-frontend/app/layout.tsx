import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import ThemeSwitcher from "@/components/fdscluster/theme-switcher";
import {ThemeProvider} from "next-themes";

const redHatDisplay = localFont({
	src: "./fonts/RedHatDisplay-Regular.ttf",
	variable: "--font-red-hat-display",
	weight: "300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
	title: "FDSCluster",
	description: "The FedustriaCluster is a modern minecraft cloud solution.",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${redHatDisplay.variable}`}
		>
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<div className="fixed bottom-4 right-4">
				<ThemeSwitcher/>
			</div>
		</ThemeProvider>

		</body>
		</html>
	);
}
