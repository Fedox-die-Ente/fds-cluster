'use client'

import {useState} from 'react'
import {motion} from 'framer-motion'
import {AlertTriangle, ChevronDown, Cloud, Cpu, Download, Zap} from 'lucide-react'

const technologies = [
	{name: 'Kubernetes', logo: '/kubernetes-logo.svg'},
	{name: 'Java', logo: '/java-logo.svg'},
	{name: 'MongoDB', logo: '/mongodb-logo.svg'},
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
	{name: 'Alice Johnson', role: 'Founder & CEO', avatar: '/team1.jpg'},
	{name: 'Bob Smith', role: 'Lead Developer', avatar: '/team2.jpg'},
	{name: 'Carol Williams', role: 'UX Designer', avatar: '/team3.jpg'},
	{name: 'David Brown', role: 'System Architect', avatar: '/team4.jpg'},
]

export default function LandingPage() {
	const [isMaintenanceMode] = useState(true)

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
							<motion.img
								key={tech.name}
								src={tech.logo}
								alt={tech.name}
								className="h-12"
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							/>
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

			<section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Download</h2>
				{isMaintenanceMode ? (
					<motion.div
						className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.5}}
					>
						<div className="flex items-center">
							<AlertTriangle className="h-6 w-6 mr-2"/>
							<p className="font-semibold">Maintenance Mode</p>
						</div>
						<p className="mt-2">We're currently performing maintenance on our download servers. Please check
							back later.</p>
					</motion.div>
				) : (
					<motion.div
						className="text-center"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.5}}
					>
						<a href="#"
						   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
							<Download className="mr-2 h-5 w-5"/>
							Download Now
						</a>
						<p className="mt-4 text-gray-600">Version 1.0.0 | 50MB</p>
					</motion.div>
				)}
			</section>

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

			<footer className="bg-gray-800 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<Cloud className="h-8 w-8 text-blue-400"/>
							<span className="ml-2 text-xl font-bold">FedustriaCluster</span>
						</div>
						<div className="flex space-x-6">
							<a href="#" className="hover:text-blue-400">Terms</a>
							<a href="#" className="hover:text-blue-400">Privacy</a>
							<a href="#" className="hover:text-blue-400">Contact</a>
						</div>
					</div>
				</div>
			</footer>
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