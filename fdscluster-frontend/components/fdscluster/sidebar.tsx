"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, CloudIcon } from "lucide-react";
import {
	SidebarCategoryType,
	sidebarConfig,
	SidebarConfigItemType,
	SidebarItemType
} from "@/lib/sidebar-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, isNested = false }: { item: SidebarItemType; isNested?: boolean }) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const isActive = item.path ? pathname === item.path : false;
	const hasSubItems = item.items && item.items.length > 0;

	const toggleSubItems = (e: React.MouseEvent) => {
		if (hasSubItems) {
			e.preventDefault();
			setIsOpen(!isOpen);
		}
	};

	const content = (
		<>
			<div className="flex items-center space-x-2">
				{item.icon && <item.icon size={20} />}
				<span>{item.title}</span>
			</div>
			{hasSubItems && (
				<div className="text-gray-400">
					{isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
				</div>
			)}
		</>
	);

	return (
		<div>
			{item.path ? (
				<Link
					href={item.path}
					className={`flex items-center justify-between transition-all space-x-2 px-6 py-3 hover:bg-gray-100 dark:hover:bg-dark-two ${
						isActive
							? "bg-blue-100 text-blue-600 dark:bg-dark-two dark:text-primary"
							: "text-gray-600 dark:text-gray-300"
					} ${isNested ? "pl-12" : ""}`}
				>
					{content}
				</Link>
			) : (
				<div
					className={`flex items-center justify-between transition-all space-x-2 px-6 py-3 hover:bg-gray-100 dark:hover:bg-dark-two cursor-pointer ${
						isActive
							? "bg-blue-100 text-blue-600 dark:bg-dark-two dark:text-primary"
							: "text-gray-600 dark:text-gray-300"
					} ${isNested ? "pl-12" : ""}`}
					onClick={toggleSubItems}
				>
					{content}
				</div>
			)}
			{isOpen && hasSubItems && (
				<div className="ml-4">
					{item.items!.map((subItem, index) => (
						<SidebarItem key={index} item={subItem} isNested />
					))}
				</div>
			)}
		</div>
	);
};

const SidebarCategory = ({ category }: { category: SidebarCategoryType }) => {
	return (
		<div className="mt-4">
			<h3 className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
				{category.title}
			</h3>
			{category.items.map((item, index) => (
				<SidebarItem key={index} item={item} />
			))}
		</div>
	);
};

const SidebarContent = ({ item }: { item: SidebarConfigItemType }) => {
	if ("items" in item) {
		// @ts-ignore
		return <SidebarCategory category={item} />;
	} else {
		return <SidebarItem item={item} />;
	}
};

export default function Sidebar() {
	return (
		<aside className="w-64 bg-light-one dark:bg-dark-one shadow-md z-20 relative h-screen overflow-y-auto">
			<div className="p-4 flex flex-col items-center space-y-2">
				<CloudIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
				<h1 className="text-xl font-bold text-gray-700 dark:text-white">
					FedustriaCluster
				</h1>
			</div>
			<nav className="mt-8">
				{sidebarConfig.map((item: any, index: React.Key | null | undefined) => (
					<SidebarContent key={index} item={item} />
				))}
			</nav>
		</aside>
	);
}
