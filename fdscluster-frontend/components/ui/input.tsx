"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, value, error, defaultValue, ...props }, ref) => {
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
						`${error ? "border-2 border-red-500 focus:border-red-500" : "border-2 border-input focus:border-primary"} flex h-14 w-full font-semibold font-openSans rounded-md  bg-background dark:bg-gray-700 px-3 pt-6 pb-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent file:text-foreground text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50`,
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
								`text-sm ${error ? "text-red-500" : "text-primary"} -translate-y-3`
						)}
					>
						{label}
					</label>
				)}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
