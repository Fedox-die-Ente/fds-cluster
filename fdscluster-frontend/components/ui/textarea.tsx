"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, error, value, defaultValue, ...props }, ref) => {
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
				<textarea
					className={cn(
						`${error ? "border-2 border-bigred focus:border-bigred dark:border-bigred dark:focus:border-bigred" : "border-2 border-input dark:border-dark-border focus:border-primary"}
            flex min-h-[80px] w-full font-semibold font-openSans rounded-md bg-background px-3 pt-6 pb-2 text-sm
            ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
            focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-input`,
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
							`absolute left-3 transition-all duration-200 text-muted-foreground pointer-events-none font-openSans font-semibold`,
							isFocused || hasValue
								? `text-sm ${error ? "text-bigred" : "text-primary"} top-2`
								: "text-sm top-4"
						)}
					>
						{label}
					</label>
				)}
			</div>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
