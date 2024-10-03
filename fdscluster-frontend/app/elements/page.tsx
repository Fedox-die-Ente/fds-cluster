"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/fdscluster/custom-select";
import { Textarea } from "@/components/ui/textarea";
import { CustomTable } from "@/components/fdscluster/custom-table";
import { CustomCheckbox } from "@/components/fdscluster/custom-checkbox";
import { Switch } from "@/components/fdscluster/custom-switch";

export default function Page() {
	const columns = [
		{ header: "#", accessor: "id" as const },
		{ header: "First Name", accessor: "firstName" as const },
		{ header: "Last Name", accessor: "lastName" as const },
		{ header: "Username", accessor: "username" as const }
	];

	const data = [
		{
			id: 1,
			firstName: "Johny",
			lastName: "Doe",
			username: "john_doe123"
		},
		{
			id: 2,
			firstName: "Johny",
			lastName: "Doe",
			username: "john_doe123"
		},
		{
			id: 3,
			firstName: "Johny",
			lastName: "Doe",
			username: "john_doe123"
		},
		{
			id: 4,
			firstName: "Johny",
			lastName: "Doe",
			username: "john_doe123"
		},
		{
			id: 5,
			firstName: "Johny",
			lastName: "Doe",
			username: "john_doe123"
		}
	];

	return (
		<div className="container mx-auto p-6 space-y-8 dark:bg-dark-one">
			<h1 className="text-3xl font-bold font-openSans mb-6">UI Elements</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
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
							icon={<HomeIcon className="h-6 w-6" />}
							variant="default_raised"
							className="w-full col-span-2"
						>
							ICON BUTTON
						</Button>
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Textbox</h2>
					<div className="space-y-4">
						<Input label="Textbox" />
						<Input label="Focus" />
						<Input label="Filled" value="hello world" />
						<Input error={true} label="Error" value="hello world" />
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Select</h2>
					<div className="space-y-4">
						<CustomSelect
							options={[
								{ value: "option1", label: "Option 1" },
								{ value: "option2", label: "Option 2" },
								{ value: "option3", label: "Option 3" }
							]}
							label="Selectbox"
							onChange={value => console.log("Selected:", value)}
						/>
						<CustomSelect
							open={true}
							value={"option2"}
							options={[
								{ value: "option1", label: "Option 1" },
								{ value: "option2", label: "Option 2" },
								{ value: "option3", label: "Option 3" }
							]}
							label="Opened Selectbox"
							onChange={value => console.log("Selected:", value)}
						/>
						<CustomSelect
							error={true}
							value={"option2"}
							options={[
								{ value: "option1", label: "Option 1" },
								{ value: "option2", label: "Option 2" },
								{ value: "option3", label: "Option 3" }
							]}
							label="Error Selectbox"
							onChange={value => console.log("Selected:", value)}
						/>
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Icon Textboxes</h2>
					<div className="space-y-4">
						<Input icon={HomeIcon} iconDirection={"left"} label="Icon Left" />
						<Input icon={HomeIcon} iconDirection={"right"} label="Icon Right" />
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Textareas</h2>
					<div className="space-y-4">
						<Textarea label="Textarea" />
						<Textarea label="Filled Textarea" value={"hello world"} />
						<Textarea error={true} label="Error Textarea" value={"hello world"} />
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Tables</h2>
					<div className="space-y-4 w-full">
						<CustomTable data={data} columns={columns} />
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Checkboxes</h2>
					<div className="space-y-4 w-full">
						<CustomCheckbox label="Accept terms and conditions" />
						<CustomCheckbox defaultValue={true} label="Accept terms and conditions" />
					</div>
				</section>

				<section className="bg-white dark:bg-dark-two p-6 rounded-lg shadow-md">
					<h2 className="font-bold text-2xl font-openSans mb-4">Switches</h2>
					<div className="space-y-4 w-full">
						<Switch label="Enable notifications" id="notifications" />
						<Switch
							label="Enable notifications"
							id="notifications"
							defaultChecked={true}
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
