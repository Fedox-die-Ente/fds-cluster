"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
	icon?: LucideIcon;
	iconDirection?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			label,
			value,
			error,
			defaultValue,
			icon: Icon,
			iconDirection = "left",
			...props
		},
		ref
	) => {
		const [isFocused, setIsFocused] = React.useState(false);
		const [hasValue, setHasValue] = React.useState(
			value !== undefined
				? String(value).length > 0
				: defaultValue !== undefined
					? String(defaultValue).length > 0
					: false
		);

		React.useEffect(() => {
			if (value !== undefined) {
				setHasValue(String(value).length > 0);
			}
		}, [value]);

		return (
			<div className="relative">
				<input
					type={type}
					className={cn(
						`${error ? "border-2 border-bigred focus:border-bigred dark:focus:border-bigred" : "border-2 border-input dark:border-dark-border dark:focus:border-primary dark:border-opacity-30 focus:border-primary"}
            flex h-14 w-full font-semibold font-openSans rounded-md bg-background px-3 pt-6 pb-2 text-sm
            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
            placeholder:text-transparent file:text-foreground text-muted-foreground focus-visible:outline-none
            focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-input`,
						Icon && iconDirection === "left" && "pl-10",
						Icon && iconDirection === "right" && "pr-10",
						className
					)}
					ref={ref}
					value={value}
					defaultValue={defaultValue}
					onFocus={() => setIsFocused(true)}
					onBlur={e => {
						setIsFocused(false);
						setHasValue(e.target.value !== "");
					}}
					onChange={e => setHasValue(e.target.value !== "")}
					{...props}
				/>
				{label && (
					<label
						className={cn(
							`absolute left-3 top-4 transition-all duration-200 text-muted-foreground pointer-events-none font-openSans font-semibold`,
							(isFocused || hasValue) &&
								`text-sm ${error ? "text-bigred" : "text-primary"} -translate-y-3`,
							Icon && iconDirection === "left" && "left-10"
						)}
					>
						{label}
					</label>
				)}
				{Icon && (
					<Icon
						className={cn(
							"absolute top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6",
							iconDirection === "left" ? "left-2" : "right-3",
							(isFocused || hasValue) && (error ? "text-bigred" : "text-primary")
						)}
						size={18}
					/>
				)}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
