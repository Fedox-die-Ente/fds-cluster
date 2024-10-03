"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { motion } from "framer-motion"; // Import framer motion
import { cn } from "@/lib/utils";

interface Option {
	value: string;
	label: string;
}

interface CustomSelectProps {
	open?: boolean;
	options: Option[];
	label?: string;
	error?: boolean;
	onChange?: (value: string) => void;
	value?: string;
	placeholder?: string;
}

export default function CustomSelect({
	open,
	options,
	label,
	error,
	onChange,
	value,
	placeholder
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);
	const [isFocused, setIsFocused] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open !== undefined) setIsOpen(open);
	}, [open]);

	useEffect(() => {
		if (value) {
			const option = options.find(opt => opt.value === value);
			if (option) setSelectedOption(option);
		}
	}, [value, options]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (option: Option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) onChange(option.value);
	};

	const dropdownVariants = {
		open: {
			opacity: 1,
			scaleY: 1,
			transition: {
				duration: 0.3,
				ease: "easeInOut"
			}
		},
		closed: {
			opacity: 0,
			scaleY: 0,
			transition: {
				duration: 0.2,
				ease: "easeInOut"
			}
		}
	};

	return (
		<div className="relative" ref={selectRef}>
			{label && (
				<label
					className={cn(
						"absolute left-3 transition-all duration-200 text-muted-foreground pointer-events-none font-openSans font-semibold",
						selectedOption
							? `text-sm ${error ? "text-bigred" : "text-primary"} top-1`
							: "top-4"
					)}
				>
					{label}
				</label>
			)}
			<div
				className={cn(
					`${error ? "border-2 border-bigred dark:border-bigred" : "border-2 dark:border-dark-border dark:border-opacity-10"} ${
						isFocused ? "border-primary" : ""
					} flex h-14 w-full items-center justify-between rounded-md bg-light-input dark:bg-dark-input px-3 py-2 text-sm ring-offset-background font-openSans font-semibold focus:outline-none focus:ring-0 cursor-pointer`,
					isOpen && "border-primary"
				)}
				onClick={() => setIsOpen(!isOpen)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				tabIndex={0}
			>
				<span className={cn("flex-grow text-left", selectedOption ? "mt-3" : "mt-0")}>
					{selectedOption ? selectedOption.label : placeholder || ""}
				</span>
				<ChevronDown className="h-4 w-4 opacity-50 ml-2 flex-shrink-0" />
			</div>

			<motion.div
				className="absolute z-50 w-full mt-1 bg-popover border-2 border-primary rounded-md shadow-md origin-top dark:bg-dark-input"
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				variants={dropdownVariants}
				style={{ transformOrigin: "top" }}
			>
				<div className="p-1 max-h-60 overflow-auto">
					{options.map(option => (
						<div
							key={option.value}
							className={cn(
								"relative flex w-full cursor-pointer font-openSans font-semibold text-muted-foreground select-none items-center rounded-3xl py-1.5 pl-8 pr-2 text-sm outline-none mb-1",
								"hover:bg-primary hover:bg-opacity-50 focus:bg-primary focus:bg-opacity-50 focus:text-black focus:text-opacity-50 hover:text-white hover:text-opacity-50",
								selectedOption?.value === option.value &&
									"bg-primary/50 text-[#4A90E2] dark:text-white"
							)}
							onClick={() => handleSelect(option)}
						>
							<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
								{selectedOption?.value === option.value && (
									<Check className="h-4 w-4 text-primary" />
								)}
							</span>
							{option.label}
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
