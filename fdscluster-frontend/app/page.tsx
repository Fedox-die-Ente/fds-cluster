'use client'

import {motion} from 'framer-motion'
import {ChevronDown, Cloud, Code, Cpu, Database, LayoutDashboard, Server, Zap} from 'lucide-react'
import DownloadSection from "@/components/fdscluster/download-section"
import Footer from "@/components/fdscluster/footer"
import Image from "next/image"

const technologies = [
	{name: 'Java', icon: Code, description: 'Robust backend development for high performance Minecraft plugins'},
	{name: 'MongoDB', icon: Database, description: 'Flexible NoSQL database for efficient data storage'},
	{name: 'React', icon: LayoutDashboard, description: 'Modern frontend framework for an intuitive dashboard'},
	{
		name: 'Netty',
		icon: Server,
		description: 'Asynchronous event-driven network framework for scalable server communication'
	},
]

const testimonials = [
	{
		name: 'John Doe',
		role: 'Server Admin',
		avatar: '/staff/fedox.png',
		review: 'This cloud system has revolutionized our Minecraft server management!'
	},
	{
		name: 'Jane Smith',
		role: 'Developer',
		avatar: '/staff/fedox.png',
		review: 'The API is incredibly powerful and easy to use.'
	},
	{
		name: 'Mike Johnson',
		role: 'Gamer',
		avatar: '/staff/fedox.png',
		review: 'I\'ve never experienced such smooth gameplay on a Minecraft server.'
	},
]

const faqs = [
	{
		question: 'What is a Minecraft cloud system?',
		answer: 'A Minecraft cloud system is a platform that allows you to easily manage and scale Minecraft servers in the cloud.'
	},
	{
		question: 'How does it improve performance?',
		answer: 'It just does.'
	},
	{
		question: 'Is it easy to set up?',
		answer: 'Yes! Our user-friendly dashboard and powerful API make it simple to get started and manage your Minecraft servers.'
	},
]

const teamMembers = [
	{name: 'Fedox', role: 'Founder', avatar: '/staff/fedox.png'},
	{name: 'Austria7', role: 'Second Founder', avatar: '/staff/austria7.png'},
]

export default function LandingPage() {
	return (
		<div
			className={`min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-700`}>
			<nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<Cloud className="h-8 w-8 text-blue-500 dark:text-blue-400"/>
							<span className="ml-2 text-xl font-bold text-slate-800 dark:text-white">FDS-Cluster</span>
						</div>
						<div className="hidden sm:flex sm:space-x-8 items-center">
							{['Features', 'Testimonials', 'Our Team', 'Download', 'FAQ'].map((item) => (
								<a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
								   className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
									{item}
								</a>
							))}

						</div>
					</div>
				</div>
			</nav>

			<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
				<motion.h1
					className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					FedustriaCluster
				</motion.h1>
				<motion.p
					className="text-xl text-gray-600 dark:text-gray-300 mb-8"
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5, delay: 0.2}}
				>
					Powerful, scalable, and easy-to-use cloud solution for your Minecraft servers
				</motion.p>
				<motion.div
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5, delay: 0.4}}
				>
					<a href="#download"
					   className="bg-primary-light hover:bg-primary-dark/50 animate-bounce hover:animate-none dark:bg-primary-dark dark:hover:bg-primary-dark text-white font-bold py-2 px-4 inline-flex items-center">
						Get Started
						<ChevronDown className="ml-2 h-4 w-4"/>
					</a>
				</motion.div>
			</header>

			<section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<FeatureCard icon={<Cloud className="h-8 w-8 text-blue-500 dark:text-blue-400"/>}
								 title="Powerful API"
								 description="Create and manage servers with our user-friendly and robust API"/>
					<FeatureCard icon={<Cpu className="h-8 w-8 text-blue-500 dark:text-blue-400"/>}
								 title="Advanced Dashboard"
								 description="Monitor and control your servers with our intuitive dashboard"/>
					<FeatureCard icon={<Zap className="h-8 w-8 text-blue-500 dark:text-blue-400"/>}
								 title="High Performance"
								 description="Experience low latency and high uptime for your Minecraft servers"/>
				</div>
			</section>

			<section id="technologies" className="bg-white dark:bg-gray-800 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Technologies We
						Use</h2>
					<div className="flex justify-center items-center space-x-8">
						{technologies.map((tech, index) => (
							<motion.div
								key={tech.name}
								className="bg-white dark:bg-gray-900/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<div className="flex flex-col items-center text-center">
									<div className="bg-primary-light dark:bg-primary-dark p-3 rounded-full mb-4">
										<tech.icon className="h-8 w-8 text-white dark:text-blue-200"/>
									</div>
									<h3 className="text-xl font-semibold mb-2 dark:text-white">{tech.name}</h3>
									<p className="text-gray-600 dark:text-gray-300 text-sm">{tech.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Users
					Say</h2>
				<div className="relative overflow-hidden">
					<motion.div
						className="flex space-x-6"
						animate={{x: [0, -1000]}}
						transition={{repeat: Infinity, duration: 20, ease: "linear"}}
					>
						{testimonials.concat(testimonials).map((testimonial, index) => (
							<div key={index}
								 className="flex-shrink-0 w-80 bg-white dark:bg-gray-700/60 p-6 rounded-lg shadow-md">
								<div className="flex items-center mb-4">
									<Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48}
										   className="h-12 w-12 rounded-full mr-4"/>
									<div>
										<h3 className="font-bold dark:text-white">{testimonial.name}</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
									</div>
								</div>
								<p className="text-gray-700 dark:text-gray-300">{testimonial.review}</p>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			<section id="team" className="bg-white dark:bg-gray-800 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
					<div
						className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${teamMembers.length >= 3 ? '4' : '2'} 
                        justify-center items-center gap-8`}
					>
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								className="bg-gray-50 dark:bg-gray-700/5 dark:shadow-2xl rounded-lg p-6 text-center"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<Image
									src={member.avatar}
									alt={member.name}
									width={128}
									height={128}
									className="w-32 h-32 rounded-full mx-auto mb-4"
								/>
								<h3 className="text-lg font-semibold dark:text-white">{member.name}</h3>
								<p className="text-gray-600 dark:text-gray-300">{member.role}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>


			<DownloadSection/>

			<section id="faq" className="bg-white dark:bg-gray-800 py-16">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked
						Questions</h2>
					<div className="space-y-8">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className="bg-gray-50 dark:bg-gray-700/60 rounded-lg p-6"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<h3 className="text-lg font-semibold mb-2 dark:text-white">{faq.question}</h3>
								<p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer/>
		</div>
	)
}

interface FeatureCardProps {
	icon: JSX.Element
	title: string
	description: string
}

function FeatureCard({icon, title, description}: FeatureCardProps) {
	return (
		<motion.div
			className="bg-white dark:bg-gray-800/75 p-6 rounded-lg shadow-md"
			whileHover={{scale: 1.05}}
			transition={{type: "spring", stiffness: 300}}
		>
			<div className="flex items-center mb-4">
				{icon}
				<h3 className="ml-4 text-xl font-semibold dark:text-white">{title}</h3>
			</div>
			<p className="text-gray-600 dark:text-gray-300">{description}</p>
		</motion.div>
	)
}