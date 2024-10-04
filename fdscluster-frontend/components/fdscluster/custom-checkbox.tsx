"use client";
import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CustomCheckboxProps {
	defaultValue?: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
	defaultValue,
	onChange,
	disabled,
	label
}) => {
	const [checked, setChecked] = useState(defaultValue || false);

	const handleToggle = () => {
		console.log("Toggle clicked!");
		if (disabled) return;
		setChecked(!checked);
		if (onChange) {
			onChange(!checked);
		}
	};

	return (
		<div className="flex items-center cursor-pointer" onClick={handleToggle}>
			<div className="relative">
				<div
					className={cn(
						"peer h-5 w-5 shrink-0 rounded-sm border-2 border-input dark:border-dark-border dark:border-opacity-10 transition-all duration-200",
						{
							"bg-primary": checked,
							"bg-white dark:bg-dark-input": !checked,
							"opacity-50 cursor-not-allowed": disabled
						}
					)}
				>
					<Check
						className={cn(
							"absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-200",
							{ "opacity-100": checked, "opacity-0": !checked }
						)}
					/>
				</div>
			</div>
			{label && (
				<label className="ml-2 text-sm font-semibold font-openSans text-muted-foreground flex items-center select-none">
					{label}
				</label>
			)}
		</div>
	);
};

CustomCheckbox.displayName = "CustomCheckbox";

export { CustomCheckbox };
