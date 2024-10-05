import React from "react";
import DashboardHeader from "@/components/fdscluster/dashboard-header";
import { CustomTable } from "@/components/fdscluster/custom-table";

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
		<div className={""}>
			<DashboardHeader siteTitle={"Site Title"} title={"Title"} description={"Description"}>
				{/* Content */}
				<div className="flex-1">
					<CustomTable className={"h-full "} data={data} columns={columns} />
				</div>
			</DashboardHeader>
		</div>
	);
}
