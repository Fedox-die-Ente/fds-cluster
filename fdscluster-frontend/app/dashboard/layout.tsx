"use client";

import { BarChart3, Bell, ChevronRight, Cloud, File, FileText, LayoutGrid } from "lucide-react";

export default function DashboardLayout() {
	return (
		<div className="flex h-screen bg-light-two dark:bg-dark-two">
			{/* Sidebar */}
			<aside className="w-64 bg-light-one dark:bg-dark-one bg-opacity-90 shadow-md z-10">
				<div className="p-4 flex items-center space-x-2">
					<div className="w-8 h-8 bg-blue-500 rounded-full"></div>
					<span className="font-semibold text-gray-700">Dandelion Pro</span>
				</div>
				<nav className="mt-8">
					<SidebarItem icon={<LayoutGrid size={20} />} title="Dashboard" />
					<SidebarItem icon={<FileText size={20} />} title="Layout" active />
					<SidebarItem icon={<FileText size={20} />} title="Form Button" />
					<SidebarItem icon={<FileText size={20} />} title="UI Elements" />
					<SidebarItem icon={<BarChart3 size={20} />} title="Charts" />
					<SidebarItem icon={<File size={20} />} title="Pages" />
				</nav>
			</aside>

			{/* Main content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Top navigation */}
				<header className="flex items-center justify-between p-4 bg-blue-500 z-10">
					<div className="flex items-center space-x-2 text-gray-600">
						<span>App</span>
						<ChevronRight size={16} />
						<span>Layout</span>
						<ChevronRight size={16} />
						<span className="text-blue-500">Grid Layout</span>
					</div>
					<div className="flex items-center space-x-4">
						<button className="text-gray-600 focus:outline-none">
							<Bell size={24} />
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

				<main className="flex-1 overflow-x-hidden overflow-y-auto relative">
					<div className="bg-blue-500 h-96 relative">
						<h1 className="text-3xl font-bold text-white absolute top-8 left-8">
							Grid Layout
						</h1>
						<svg
							className="absolute bottom-0 left-0 w-full h-auto"
							viewBox="0 0 1440 320"
							preserveAspectRatio="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="fill-light-two dark:fill-dark-two"
								fillOpacity="1"
								d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
							></path>
						</svg>
					</div>
					<div className="container mx-auto px-8 -mt-60 relative z-10">
						<div className="bg-light-one dark:bg-dark-one rounded-lg shadow-xl p-6">
							<div className="flex items-center">
								<div className="p-3 rounded-full bg-blue-100 dark:bg-primary/30">
									<Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />
								</div>
								<div className="ml-4">
									<h4 className="text-xl font-semibold text-gray-700">
										Lorem Ipsum Dolor
									</h4>
									<p className="mt-2 text-gray-600">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus ante ipsum, suscipit sit amet bibendum eget,
										faucibus eget urna. Fusce ac elit tristique nisl vulputate
										pellentesque ut vitae lectus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

// @ts-ignore
function SidebarItem({ icon, title, active = false }) {
	return (
		<a
			href="#"
			className={`flex items-center space-x-2 px-6 py-3 hover:bg-gray-100 ${active ? "bg-blue-100 text-blue-600" : "text-gray-600"}`}
		>
			{icon}
			<span>{title}</span>
		</a>
	);
}
