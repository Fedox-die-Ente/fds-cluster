"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart2, HelpCircle, Home, Menu, Settings, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
	icon: React.ElementType;
	label: string;
	isActive: boolean;
	onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
	<motion.li
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		className={cn(
			"flex items-center space-x-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200",
			isActive
				? "bg-white bg-opacity-5 text-primary-light font-medium"
				: "text-white hover:bg-white hover:bg-opacity-10"
		)}
		onClick={onClick}
	>
		<Icon className="w-5 h-5" />
		<span>{label}</span>
	</motion.li>
);

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const [activeItem, setActiveItem] = useState("Dashboard");
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const sidebarItems = [
		{ icon: Home, label: "Dashboard" },
		{ icon: Users, label: "Users" },
		{ icon: BarChart2, label: "Analytics" },
		{ icon: Settings, label: "Settings" },
		{ icon: HelpCircle, label: "Help" }
	];

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 overflow-hidden relative">
			{/* Glassmorphism background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
					animate={{
						x: [0, 100, 0],
						y: [0, 100, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: "reverse"
					}}
				/>
				<motion.div
					className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
					animate={{
						x: [100, 0, 100],
						y: [100, 0, 100],
						scale: [1, 1.1, 1]
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						repeatType: "reverse"
					}}
				/>
				<motion.div
					className="absolute w-[700px] h-[700px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
					animate={{
						x: [-100, 100, -100],
						y: [-100, 100, -100],
						scale: [1, 1.3, 1]
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						repeatType: "reverse"
					}}
				/>
			</div>

			{/* Sidebar */}
			<AnimatePresence>
				{isSidebarOpen && (
					<motion.div
						className="w-64 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-r border-white border-opacity-10"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="p-6">
							<motion.h1
								className="text-2xl font-bold text-white mb-8"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
							>
								FedustriaCluster
							</motion.h1>
							<nav>
								<ul className="space-y-2">
									{sidebarItems.map(item => (
										<SidebarItem
											key={item.label}
											icon={item.icon}
											label={item.label}
											isActive={activeItem === item.label}
											onClick={() => setActiveItem(item.label)}
										/>
									))}
								</ul>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				<header className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-10 p-4">
					<div className="flex items-center justify-between">
						<button
							onClick={toggleSidebar}
							className="text-white hover:text-primary transition-colors duration-200"
							aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
						>
							{isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
						<h2 className="text-xl font-semibold text-white">{activeItem}</h2>
						<div className="w-8" />
						{/* Placeholder for balance */}
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 p-8 overflow-auto">
					<motion.div
						className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white border-opacity-20"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<div className="p-8">{children}</div>
					</motion.div>
				</main>
			</div>
		</div>
	);
}
