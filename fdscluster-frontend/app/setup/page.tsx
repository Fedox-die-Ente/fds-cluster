'use client';
import {useEffect, useState} from 'react';
import MultiStepSetup from "@/components/fdscluster/multi-step-setup";
import {motion} from 'framer-motion';
import CloudConnection from "@/app/setup/cloud-connection";
import DatabaseSetup from "@/app/setup/database-setup";
import AdminAccount from "@/app/setup/admin-account";

export default function SetupPage() {
	const [mounted, setMounted] = useState(false);
	const [cloudToken, setCloudToken] = useState('');

	const [error, setError] = useState('');

	useEffect(() => {
		setMounted(true);
	}, []);

	const steps = [
		{
			title: 'Cloud Connection',
			content: <CloudConnection onTokenChange={setCloudToken}/>,
			onSubmit: async () => {
				await new Promise(resolve => setTimeout(resolve, 1000));

				if (cloudToken === 'test') {
					setError('Invalid token');
					return false;
				}

				setError('');
				return true;
			}
		},
		{
			title: 'Database Setup',
			content: <DatabaseSetup/>,
			onSubmit: async () => {
				await new Promise(resolve => setTimeout(resolve, 1000));
				return Math.random() > 0.3;
			}
		},
		{
			title: 'Admin Account',
			content: <AdminAccount/>,
			onSubmit: async () => {
				await new Promise(resolve => setTimeout(resolve, 1000));
				return false;
			}
		},
	];

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-500 to-primary-light overflow-hidden relative">
			{mounted && (
				<>
					<motion.div
						className="absolute w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
						animate={{
							x: [0, 100, 0],
							y: [0, 100, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
					<motion.div
						className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
						animate={{
							x: [100, 0, 100],
							y: [100, 0, 100],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</>
			)}

			<div className="z-10 w-full max-w-4xl p-4">
				<motion.h1
					className="text-4xl font-bold mb-8 text-center text-white"
					initial={{opacity: 0, y: -50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					FedustriaCluster - Setup
				</motion.h1>
				<motion.div
					className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.5, delay: 0.2}}
				>
					<div className="p-8">
						<MultiStepSetup steps={steps} errorMessage={error}/>
					</div>
				</motion.div>
			</div>

			<div
				className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-30"/>
			<div
				className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"/>
			<div
				className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"/>
		</div>
	);
}
