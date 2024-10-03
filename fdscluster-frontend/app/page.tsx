"use client";

import { motion } from "framer-motion";
import {
	ChevronDown,
	Cloud,
	Code,
	Cpu,
	Database,
	LayoutDashboard,
	Server,
	Zap
} from "lucide-react";
import DownloadSection from "@/components/fdscluster/download-section";
import Footer from "@/components/fdscluster/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "@/components/fdscluster/scroll";

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
		quote: "This cloud system has revolutionized our Minecraft server management!",
		name: "John Doe",
		title: "Server Admin",
		avatar: "https://aeflight.com/wp-content/uploads/2024/03/Matthew-Faber.jpg"
	},
	{
		quote: "The API is incredibly powerful and easy to use.",
		name: "Jane Smith",
		title: "Developer",
		avatar: "https://lh4.googleusercontent.com/proxy/wHtlS6a-bjPq1V6VDAPMDmuDe5sLGrKfWFD9J23aUj2ZAdRQUen1ftzeEPTi3bkpsEiKWY5xOW41ArOxGGlSVeOwQZnB1ZSA1dU4"
	},
	{
		quote: "I've never experienced such smooth gameplay on a Minecraft server.",
		name: "Mike Johnson",
		title: "Gamer",
		avatar: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
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

export default function LandingPage() {
	const { theme } = useTheme();

	const testimonialsRef = useRef<HTMLDivElement>(null);
	const scrollSpeed = 9;

	useEffect(() => {
		const scrollTestimonials = () => {
			if (testimonialsRef.current) {
				const scrollAmount = testimonialsRef.current.scrollLeft + scrollSpeed;
				testimonialsRef.current.scrollLeft = scrollAmount;

				if (
					scrollAmount >=
					testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth
				) {
					testimonialsRef.current.scrollLeft = 0;
				}
			}
		};

		const interval = setInterval(scrollTestimonials, 20);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={`min-h-screen`}>
			<div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-primary/40 dark:to-primary/90 transition-colors duration-300">
				<nav className="bg-white/80 dark:bg-dark-two/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex items-center">
								<Cloud className="h-8 w-8 text-primary dark:text-primary" />
								<span className="ml-2 text-xl font-bold bg-clip-text text-primary">
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
								<Button variant={"default_outline"}>
									Get Started
									<ChevronDown className="ml-2 h-5 w-5" />
								</Button>
							</motion.div>
						</div>
						<div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-full">
							<div className="w-full h-full bg-blue-200 dark:bg-primary/50 rounded-l-full opacity-20"></div>
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
								className="fill-white dark:fill-[rgb(21,30,44)]"
							></path>
						</svg>
					</div>
				</header>

				<section
					id="features"
					className="bg-white dark:bg-dark-two py-24 transition-colors duration-300"
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
					id="testimonials"
					className="bg-white dark:bg-dark-one py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							What Our Users Say
						</h2>
						<div ref={testimonialsRef} className="flex overflow-hidden ">
							<InfiniteMovingCards
								items={testimonials}
								direction="left"
								speed="slow"
								pauseOnHover={true}
							/>
						</div>
					</div>
				</section>

				<section
					id="team"
					className="bg-gray-100 dark:bg-dark-two py-24 transition-colors duration-300"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Our Team
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center items-center max-w-3xl mx-auto">
							{teamMembers.map((member, index) => (
								<motion.div
									key={member.name}
									className="bg-white dark:bg-dark-one rounded-lg p-8 text-center shadow-lg"
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
					className="bg-white dark:bg-dark-one py-24 transition-colors duration-300"
				>
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
							Frequently Asked Questions
						</h2>
						<div className="space-y-8">
							{faqs.map((faq, index) => (
								<motion.div
									key={index}
									className="bg-gray-100 dark:bg-dark-two rounded-lg p-6 shadow-md"
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
			className="bg-gray-100 dark:bg-dark-one p-8 rounded-lg shadow-lg"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<div className="flex flex-col items-center text-center">
				<div className="bg-blue-100 dark:bg-primary/30 p-4 rounded-full mb-6">{icon}</div>
				<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
					{title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300">{description}</p>
			</div>
		</motion.div>
	);
}
