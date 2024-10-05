import React from "react";
import { Cloud } from "lucide-react";

interface DashboardHeaderProps {
	children?: React.ReactNode;
	siteTitle: string;
	title: string;
	description: string;
}

export default function DashboardHeader({
	children,
	siteTitle,
	title,
	description
}: DashboardHeaderProps) {
	return (
		<main className="flex-1 overflow-x-hidden overflow-y-auto relative">
			<div className="h-96 relative">
				<h1 className="text-3xl font-bold text-white absolute top-8 left-8">{siteTitle}</h1>
			</div>
			<div className="container mx-auto px-8 -mt-72 relative z-10">
				<div className="bg-light-one dark:bg-dark-one rounded-lg shadow-xl p-6 space-y-5">
					<div className="flex items-center">
						<div className="p-3 rounded-md bg-blue-100 dark:bg-primary/30 drama-3 drama-blue-100 dark:drama-primary">
							<Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400 drama-3 drama-blue-600 dark:drama-blue-400" />
						</div>
						<div className="ml-4">
							<h4 className="text-xl font-semibold text-gray-700 dark:text-primary">
								{title}
							</h4>
							<p className="mt-2 text-gray-600 dark:text-light-one">{description}</p>
						</div>
					</div>

					<div
						className={
							"flex w-full h-full bg-light-two dark:bg-dark-two rounded-md p-4"
						}
					>
						{children}
					</div>
				</div>
			</div>
		</main>
	);
}
