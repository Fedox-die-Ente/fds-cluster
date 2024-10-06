"use client";

import { Bell, MenuIcon } from "lucide-react";
import React from "react";
import Sidebar from "@/components/fdscluster/sidebar";

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen bg-light-two dark:bg-dark-two">
			<div className="absolute inset-0 z-0">
				<div className="bg-blue-500 h-[40vh] relative w-full">
					<svg
						className="absolute bottom-0 left-0 w-full h-auto"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className="fill-light-two dark:fill-dark-two"
							fillOpacity="1"
							d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>

			{/* Sidebar */}
			<Sidebar />

			{/* Main content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Top navigation */}
				<header className="flex items-center justify-between p-4 bg-blue-500 z-30">
					<div className="flex items-center space-x-2 text-gray-600">
						<div
							className={
								"absolute w-12 h-12 rounded-full bg-[#EDF7FD] dark:bg-primary flex items-center justify-center -ml-10 mt-4"
							}
						>
							<MenuIcon className={"text-primary dark:text-white"} />
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<button className="text-white focus:outline-none">
							<Bell size={24} />
							<div className="absolute -mt-3 ml-3 w-3 h-3 bg-red-500 rounded-full"></div>
						</button>
						<div className="relative">
							<button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
								<img
									className="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="User avatar"
								/>
							</button>
						</div>
					</div>
				</header>

				{children}
			</div>
		</div>
	);
}
