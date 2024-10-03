import React from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
	return (
		<div className="container mx-auto p-6 space-y-8">
			<h1 className="text-3xl font-bold font-openSans mb-6">UI Elements</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
				<section className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Buttons</h2>
					<div className="grid grid-cols-2 gap-4">
						<Button variant="default_raised" className="w-full">
							PRIMARY
						</Button>
						<Button variant="secondary_raised" className="w-full">
							SECONDARY
						</Button>
						<Button variant="ghost_raised" className="w-full">
							GHOST
						</Button>
						<Button variant="default_outline" className="w-full">
							PRIMARY
						</Button>
						<Button variant="secondary_outline" className="w-full">
							SECONDARY
						</Button>
						<Button variant="ghost_outline" className="w-full">
							GHOST
						</Button>
						<Button
							icon={<HomeIcon className="mr-2 h-4 w-4" />}
							variant="default_raised"
							className="w-full col-span-2"
						>
							ICON BUTTON
						</Button>
					</div>
				</section>

				<section className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Textbox</h2>
					<div className="space-y-4">
						<Input label="Textbox" />
						<Input label="Focus" />
						<Input label="Filled" value="hello world" />
						<Input error={true} label="Error" value="hello world" />
					</div>
				</section>

				<section className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Select</h2>
					<div className="space-y-4">
						<Select>
							<SelectTrigger>Primary</SelectTrigger>
							<SelectGroup>
								<SelectValue>Option 1</SelectValue>
								<SelectValue>Option 2</SelectValue>
								<SelectValue>Option 3</SelectValue>
							</SelectGroup>
						</Select>
					</div>
				</section>

				<section className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Additional Elements</h2>
					<div className="space-y-4">
						{/* Placeholder for additional UI elements */}
						<p className="text-gray-500">Additional UI elements to be added here.</p>
					</div>
				</section>
			</div>
		</div>
	);
}
