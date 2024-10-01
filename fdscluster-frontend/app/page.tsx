"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	ChevronDown,
	Cloud,
	Code,
	Cpu,
	Database,
	LayoutDashboard,
	Moon,
	Server,
	Sun,
	Zap
} from "lucide-react";
import DownloadSection from "@/components/fdscluster/download-section";
import Footer from "@/components/fdscluster/footer";
import Image from "next/image";

const technologies = [
	{
		name: "Java",
		icon: Code,
		description: "Robust backend development for high performance Minecraft plugins"
	},
	{
		name: "MongoDB",
		icon: Database,
		description: "Flexible NoSQL database for efficient data storage"
	},
	{
		name: "React",
		icon: LayoutDashboard,
		description: "Modern frontend framework for an intuitive dashboard"
	},
	{
		name: "Netty",
		icon: Server,
		description: "Asynchronous event-driven network framework for scalable server communication"
	}
];

const testimonials = [
	{
		name: "John Doe",
		role: "Server Admin",
		avatar: "/staff/fedox.png",
		review: "This cloud system has revolutionized our Minecraft server management!"
	},
	{
		name: "Jane Smith",
		role: "Developer",
		avatar: "/staff/fedox.png",
		review: "The API is incredibly powerful and easy to use."
	},
	{
		name: "Mike Johnson",
		role: "Gamer",
		avatar: "/staff/fedox.png",
		review: "I've never experienced such smooth gameplay on a Minecraft server."
	}
];

const faqs = [
	{
		question: "What is a Minecraft cloud system?",
		answer: "A Minecraft cloud system is a platform that allows you to easily manage and scale Minecraft servers in the cloud."
	},
	{
		question: "How does it improve performance?",
		answer: "It optimizes resource allocation, provides load balancing, and utilizes high-performance hardware to ensure smooth gameplay."
	},
	{
		question: "Is it easy to set up?",
		answer: "Yes! Our user-friendly dashboard and powerful API make it simple to get started and manage your Minecraft servers."
	}
];

const teamMembers = [
	{ name: "Fedox", role: "Founder", avatar: "/staff/fedox.png" },
	{ name: "Austria7", role: "Second Founder", avatar: "/staff/austria7.png" }
];

export default function ModernLandingPage() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode.toString());
	}, [darkMode]);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
			<div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300">
				<nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex items-center">
								<Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />
								<span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
									FDS-Cluster
								</span>
							</div>
							<div className="hidden sm:flex sm:space-x-8 items-center">
								{["Features", "Testimonials", "Our Team", "Download", "FAQ"].map(
									item => (
										<a
											key={item}
											href={`#${item.toLowerCase().replace(" ", "-")}`}
											className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
										>
											{item}
										</a>
									)
								)}
								<button
									onClick={toggleDarkMode}
									className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
								>
									{darkMode ? (
										<Sun className="h-5 w-5 text-yellow-500" />
									) : (
										<Moon className="h-5 w-5 text-gray-700" />
									)}
								</button>
							</div>
						</div>
					</div>
				</nav>

				<header className="relative overflow-hidden">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
						<div className="relative z-10">
							<motion.h1
								className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								FedustriaCluster
							</motion.h1>
							<motion.p
								className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Elevate your Minecraft experience with our powerful, scalable, and
								easy-to-use cloud solution.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<a
									href="#download"
									className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300 shadow-lg"
								>
									Get Started
									<ChevronDown className="ml-2 h-5 w-5" />
								</a>
							</motion.div>
						</div>
						<div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-full">
							<div className="w-full h-full bg-blue-200 dark:bg-blue-800 rounded-l-full opacity-20"></div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 w-full overflow-hidden">
						<svg
							className="relative block w-full h-24 text-white dark:text-gray-900"
							viewBox="0 0 1440 74"
							preserveAspectRatio="none"
						>
							<path
								d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 51.7525 1243.09 51.7525C1099.33 51.7525 980.113 31.3925 875.176 19.4525C770.239 7.51258 581.212 0.0433865 456.464 0.0433865Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
				</header>

				<section
					id="features"
					className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Powerful Features
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							<FeatureCard
								icon={
									<Cloud className="h-10 w-10 text-blue-600 dark:text-blue-400" />
								}
								title="Powerful API"
								description="Create and manage servers with our user-friendly and robust API"
							/>
							<FeatureCard
								icon={
									<Cpu className="h-10 w-10 text-blue-600 dark:text-blue-400" />
								}
								title="Advanced Dashboard"
								description="Monitor and control your servers with our intuitive dashboard"
							/>
							<FeatureCard
								icon={
									<Zap className="h-10 w-10 text-blue-600 dark:text-blue-400" />
								}
								title="High Performance"
								description="Experience low latency and high uptime for your Minecraft servers"
							/>
						</div>
					</div>
				</section>

				<section
					id="technologies"
					className="bg-gray-100 dark:bg-gray-800 py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Technologies We Use
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{technologies.map((tech, index) => (
								<motion.div
									key={tech.name}
									className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<div className="flex flex-col items-center text-center">
										<div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
											<tech.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
										</div>
										<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
											{tech.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-300">
											{tech.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section
					id="testimonials"
					className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							What Our Users Say
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<div className="flex items-center mb-4">
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											width={48}
											height={48}
											className="h-12 w-12 rounded-full mr-4"
										/>
										<div>
											<h3 className="font-bold text-gray-900 dark:text-white">
												{testimonial.name}
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												{testimonial.role}
											</p>
										</div>
									</div>
									<p className="text-gray-700 dark:text-gray-300">
										{testimonial.review}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section
					id="team"
					className="bg-gray-100 dark:bg-gray-800 py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Our Team
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center items-center max-w-3xl mx-auto">
							{teamMembers.map((member, index) => (
								<motion.div
									key={member.name}
									className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center shadow-lg"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Image
										src={member.avatar}
										alt={member.name}
										width={128}
										height={128}
										className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-200 dark:border-blue-800"
									/>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										{member.name}
									</h3>
									<p className="text-blue-600 dark:text-blue-400">
										{member.role}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<DownloadSection />

				<section
					id="faq"
					className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300"
				>
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Frequently Asked Questions
						</h2>
						<div className="space-y-8">
							{faqs.map((faq, index) => (
								<motion.div
									key={index}
									className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
										{faq.question}
									</h3>
									<p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</div>
	);
}

interface FeatureCardProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<motion.div
			className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<div className="flex flex-col items-center text-center">
				<div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-6">{icon}</div>
				<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
					{title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300">{description}</p>
			</div>
		</motion.div>
	);
}
