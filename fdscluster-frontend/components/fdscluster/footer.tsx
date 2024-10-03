import { Cloud } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-800 dark:bg-dark-one text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Cloud className="h-8 w-8 text-blue-400" />
						<span className="ml-2 text-xl font-bold">FedustriaCluster</span>
					</div>
					<div className="flex space-x-6">
						<a href="/imprint" className="hover:text-blue-400">
							Imprint
						</a>
						<a href="#" className="hover:text-blue-400">
							Privacy
						</a>
						<a
							href="https://github.com/Fedox-die-Ente/fds-cluster/issues"
							target={"_blank"}
							className="hover:text-blue-400"
						>
							Report a bug
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
