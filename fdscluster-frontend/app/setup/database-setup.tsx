"use client"

import React, {useState} from 'react'
import {ArrowLeft, Database, Server} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input";

const databases = [
	{
		id: 'mongodb',
		name: 'MongoDB',
		description: 'A document-based NoSQL database designed for scalability and flexibility.',
		icon: Server,
	},
	{
		id: 'mysql',
		name: 'MySQL',
		description: 'A popular open-source relational database management system.',
		icon: Database,
	},
]

export default function DatabaseSetup() {
	const [selectedDatabase, setSelectedDatabase] = useState('')

	const handleDatabaseChange = (value: string) => {
		setSelectedDatabase(value)
	}

	return (
		<div>
			<RadioGroup
				value={selectedDatabase}
				onValueChange={handleDatabaseChange}
				className="grid gap-4 md:grid-cols-2"
			>
				{databases.map((db) => (
					<Label
						key={db.id}
						htmlFor={db.id}
						className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover dark:bg-gray-700/50 p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary-light dark:[&:has([data-state=checked])]:border-primary-light"
					>
						<RadioGroupItem value={db.id} id={db.id} className="sr-only"/>
						<db.icon className="mb-3 h-6 w-6"/>
						<div className="space-y-1 text-center">
							<h3 className="font-semibold">{db.name}</h3>
							<p className="text-sm text-muted-foreground">{db.description}</p>
						</div>
					</Label>
				))}
			</RadioGroup>

			{selectedDatabase && (
				<div className="mt-6 space-y-4">
					<h2 className="text-lg font-semibold">Connection Details</h2>
					{selectedDatabase === 'mongodb' && <MongoDBConnection/>}
					{selectedDatabase === 'mysql' && <MySQLConnection/>}
					<Button
						variant="outline"
						onClick={() => setSelectedDatabase('')}
						className="w-full mt-4"
					>
						<ArrowLeft className="w-4 h-4 mr-2"/>
						Change Database Selection
					</Button>
				</div>
			)}
		</div>
	)
}

const MongoDBConnection = () => {
	return (
		<div className="space-y-4">
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mongodb-uri">MongoDB URI</Label>
				<Input
					type="text"
					id="mongodb-uri"
					placeholder="mongodb://username:password@host:port/database"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mongodb-database">Database Name</Label>
				<input
					type="text"
					id="mongodb-database"
					placeholder="my_database"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
		</div>
	)
}

const MySQLConnection = () => {
	return (
		<div className="space-y-4">
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mysql-host">Host</Label>
				<input
					type="text"
					id="mysql-host"
					placeholder="localhost"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mysql-port">Port</Label>
				<input
					type="text"
					id="mysql-port"
					placeholder="3306"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mysql-username">Username</Label>
				<input
					type="text"
					id="mysql-username"
					placeholder="root"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mysql-password">Password</Label>
				<input
					type="password"
					id="mysql-password"
					placeholder="••••••••"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mysql-database">Database Name</Label>
				<input
					type="text"
					id="mysql-database"
					placeholder="my_database"
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
		</div>
	)
}