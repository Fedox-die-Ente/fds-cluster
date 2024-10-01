import React from 'react'
import {Label} from "@/components/ui/label";

export default function AdminAccount() {
	return (
		<div className={'w-full flex flex-col gap-5'}>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="admin-email">Admin Email</Label>
				<input
					type="email"
					id="admin-email"
					placeholder="john@doe.com"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="admin-username">Admin Username</Label>
				<input
					type="text"
					id="admin-username"
					placeholder="johndoe"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="admin-password">Admin Password</Label>
				<input
					type="password"
					id="admin-password"
					placeholder="**********"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="admin-confirmpassword">Confirm Admin Password</Label>
				<input
					type="password"
					id="admin-confirmpassword"
					placeholder="**********"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
		</div>
	)
}
