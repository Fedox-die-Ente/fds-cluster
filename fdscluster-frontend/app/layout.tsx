import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import ThemeSwitcher from "@/components/fdscluster/theme-switcher";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "FDSCluster",
	description: "The FedustriaCluster is a modern minecraft cloud solution."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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
