'use client'

import {motion} from 'framer-motion'
import {ChevronDown, Cloud, Code, Cpu, Database, LayoutDashboard, Server, Wifi, Zap} from 'lucide-react'
import DownloadSection from "../components/fdscluster/download-section.tsx";
import Footer from "../components/fdscluster/footer.tsx";

const technologies = [
	{name: 'Java', icon: Code, description: 'Robust backend development for high performance Minecraft plugins'},
	{name: 'MongoDB', icon: Database, description: 'Flexible NoSQL database for efficient data storage'},
	{name: 'React', icon: LayoutDashboard, description: 'Modern frontend framework for an intuitive dashboard'},
	{name: 'WebSockets', icon: Wifi, description: 'Real-time communication protocol for instant server updates'},
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
		avatar: '/avatar1.jpg',
		review: 'This cloud system has revolutionized our Minecraft server management!'
	},
	{
		name: 'Jane Smith',
		role: 'Developer',
		avatar: '/avatar2.jpg',
		review: 'The API is incredibly powerful and easy to use.'
	},
	{
		name: 'Mike Johnson',
		role: 'Gamer',
		avatar: '/avatar3.jpg',
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
		answer: 'Our cloud system uses advanced technologies and optimized infrastructure to ensure low latency and high performance for your Minecraft servers.'
	},
	{
		question: 'Is it easy to set up?',
		answer: 'Yes! Our user-friendly dashboard and powerful API make it simple to get started and manage your Minecraft servers.'
	},
]

const teamMembers = [
	{name: 'Fedox', role: 'Founder', avatar: '/staff/fedox.png'},
	{name: 'Austria7', role: 'Lead Developer', avatar: '/staff/austria7.png'},
]

export default function LandingPage() {

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
			<nav className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="flex-shrink-0 flex items-center">
								<Cloud className="h-8 w-8 text-blue-500"/>
								<span className="ml-2 text-xl font-bold text-gray-800">FDS-Cluster</span>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
								<a href="#features"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Features
								</a>
								<a href="#testimonials"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Testimonials
								</a>
								<a href="#team"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Our Team
								</a>
								<a href="#download"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Download
								</a>
								<a href="#faq"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									FAQ
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
				<motion.h1
					className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					FedustriaCluster
				</motion.h1>
				<motion.p
					className="text-xl text-gray-600 mb-8"
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
					   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
						Get Started
						<ChevronDown className="ml-2 h-4 w-4"/>
					</a>
				</motion.div>
			</header>

			<section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<FeatureCard icon={<Cloud className="h-8 w-8 text-blue-500"/>} title="Powerful API"
								 description="Create and manage servers with our user-friendly and robust API"/>
					<FeatureCard icon={<Cpu className="h-8 w-8 text-blue-500"/>} title="Advanced Dashboard"
								 description="Monitor and control your servers with our intuitive dashboard"/>
					<FeatureCard icon={<Zap className="h-8 w-8 text-blue-500"/>} title="High Performance"
								 description="Experience low latency and high uptime for your Minecraft servers"/>
				</div>
			</section>

			<section id="technologies" className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technologies We Use</h2>
					<div className="flex justify-center items-center space-x-8">
						{technologies.map((tech, index) => (
							<motion.div
								key={tech.name}
								className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<div className="flex flex-col items-center text-center">
									<div className="bg-blue-100 p-3 rounded-full mb-4">
										<tech.icon className="h-8 w-8 text-blue-600"/>
									</div>
									<h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
									<p className="text-gray-600 text-sm">{tech.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
				<div className="relative overflow-hidden">
					<motion.div
						className="flex space-x-6"
						animate={{x: [0, -1000]}}
						transition={{repeat: Infinity, duration: 20, ease: "linear"}}
					>
						{testimonials.concat(testimonials).map((testimonial, index) => (
							<div key={index} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md">
								<div className="flex items-center mb-4">
									<img src={testimonial.avatar} alt={testimonial.name}
										 className="h-12 w-12 rounded-full mr-4"/>
									<div>
										<h3 className="font-bold">{testimonial.name}</h3>
										<p className="text-sm text-gray-600">{testimonial.role}</p>
									</div>
								</div>
								<p className="text-gray-700">{testimonial.review}</p>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			<section id="team" className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								className="bg-gray-50 rounded-lg p-6 text-center"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<img src={member.avatar} alt={member.name}
									 className="w-32 h-32 rounded-full mx-auto mb-4"/>
								<h3 className="text-lg font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.role}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<DownloadSection/>

			<section id="faq" className="bg-white py-16">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
					<div className="space-y-8">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className="bg-gray-50 rounded-lg p-6"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
								<p className="text-gray-700">{faq.answer}</p>
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
			className="bg-white p-6 rounded-lg shadow-md"
			whileHover={{scale: 1.05}}
			transition={{type: "spring", stiffness: 300}}
		>
			<div className="flex items-center mb-4">
				{icon}
				<h3 className="ml-4 text-xl font-semibold">{title}</h3>
			</div>
			<p className="text-gray-600">{description}</p>
		</motion.div>
	)
}