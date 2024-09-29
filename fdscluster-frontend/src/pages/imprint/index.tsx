'use client'

import {motion} from 'framer-motion';
import {Cloud} from 'lucide-react';
import Footer from "../../components/fdscluster/footer.tsx";

export default function ImprintPage() {
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
								<a href="/"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Home
								</a>
								<a href="/imprint"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Imprint
								</a>
								<a href="/contact"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Contact
								</a>
								<a href="/terms"
								   className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
									Terms
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
					Imprint
				</motion.h1>
			</header>

			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-3xl font-bold text-gray-900 mb-8">Casual Information</h2>
				<motion.div
					className="bg-white p-6 rounded-lg shadow-md mb-8"
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					<h3 className="text-xl font-semibold mb-2">Company Name</h3>
					<p className="text-gray-600">Your Company Name</p>
					<p className="text-gray-600">Address: Your Address Here</p>
					<p className="text-gray-600">Phone: Your Phone Number</p>
					<p className="text-gray-600">Email: Your Email Address</p>
				</motion.div>

				<h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
				<motion.div
					className="bg-white p-6 rounded-lg shadow-md mb-8"
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					<h3 className="text-xl font-semibold mb-2">Contact Us</h3>
					<p className="text-gray-600">For inquiries, please reach out to us:</p>
					<p className="text-gray-600">Email: support@yourdomain.com</p>
				</motion.div>
			</section>

			<Footer/>
		</div>
	);
}
