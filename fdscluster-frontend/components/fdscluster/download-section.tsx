"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Code, Database, Download } from "lucide-react";

export default function DownloadSection() {
	const [isMaintenanceMode] = useState(false);

	return (
		<section
			id="download"
			className="relative py-24 bg-gradient-to-br from-primary via-blue-700 to-secondary overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.h2
					className="text-4xl font-bold text-center text-white mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Download FedustriaCluster
				</motion.h2>
				{isMaintenanceMode ? (
					<motion.div
						className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg shadow-xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="flex items-center">
							<AlertTriangle className="h-6 w-6 mr-2" />
							<p className="font-semibold">Maintenance Mode</p>
						</div>
						<p className="mt-2">
							We're currently performing maintenance on our download servers. Please
							check back later.
						</p>
					</motion.div>
				) : (
					<motion.div
						className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
							<div className="text-center md:text-left">
								<h3 className="text-2xl font-bold text-white mb-2">
									FedustriaCluster (FDS-Cluster)
								</h3>
								<p className="text-blue-200">
									Powerful Minecraft server management
								</p>
							</div>
							<div className="flex justify-center space-x-4">
								<FeatureIcon icon={Database} text="Scalable" />
								<FeatureIcon icon={Code} text="Customizable" />
							</div>
							<div className="text-center md:text-right">
								<motion.a
									href="#"
									className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition-all duration-300"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Download className="mr-2 h-5 w-5" />
									Download Now
								</motion.a>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</section>
	);
}

function FeatureIcon({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
	return (
		<div className="flex flex-col items-center">
			<div className="bg-white bg-opacity-20 p-3 rounded-full mb-2">
				<Icon className="h-6 w-6 text-white" />
			</div>
			<span className="text-sm text-blue-100">{text}</span>
		</div>
	);
}
