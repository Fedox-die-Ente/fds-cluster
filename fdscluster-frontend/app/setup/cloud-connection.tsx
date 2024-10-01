import React, {useState} from 'react';
import {Label} from "@/components/ui/label";

interface CloudConnectionProps {
	onTokenChange: (token: React.SetStateAction<string>) => void;
}

export default function CloudConnection({onTokenChange}: CloudConnectionProps) {
	const [token, setToken] = useState('');

	const handleTokenChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setToken(event.target.value);
		onTokenChange(event.target.value);
	};

	return (
		<div className={'w-full'}>
			<div className="grid w-full items-center gap-1.5">
				<Label htmlFor="mongodb-database">Configuration Token</Label>
				<input
					type="text"
					id="secret-token"
					placeholder="xxxxxxxxxxxxx"
					value={token}
					onChange={handleTokenChange}
					className="w-full px-3 py-2 border rounded-md text-sm"
				/>
			</div>
		</div>
	);
}
