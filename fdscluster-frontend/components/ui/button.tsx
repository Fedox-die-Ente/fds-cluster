"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
	{
		variants: {
			variant: {
				default_raised:
					"bg-primary rounded-3xl font-semibold text-white text-sm px-5 hover:bg-primary/90",
				secondary_raised:
					"bg-secondary rounded-3xl font-openSans font-semibold text-white text-sm px-5 hover:bg-secondary/90",
				ghost_raised:
					"bg-accent font-semibold font-openSans text-black text-opacity-50 rounded-3xl hover:text-accent-foreground/90 dark:bg-dark-input dark:text-white",
				default_outline:
					"bg-transparent border border-primary rounded-3xl font-openSans font-semibold text-primary text-sm px-5 hover:bg-primary/10",
				secondary_outline:
					"bg-transparent border border-secondary rounded-3xl font-openSans font-semibold text-secondary text-sm px-5 hover:bg-secondary/10",
				ghost_outline:
					"bg-transparent border border-accent font-semibold font-openSans text-black text-opacity-50 rounded-3xl hover:text-accent-foreground/80 dark:border-white dark:text-white"
			},
			size: {
				default: "h-10 px-8 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10"
			}
		},
		defaultVariants: {
			variant: "default_raised",
			size: "default"
		}
	}
);

type ButtonVariant =
	| "default_raised"
	| "secondary_raised"
	| "ghost_raised"
	| "default_outline"
	| "secondary_outline"
	| "ghost_outline";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
		const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; size: number }>>(
			[]
		);

		const addRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
			const rippleContainer = event.currentTarget.getBoundingClientRect();
			const size =
				rippleContainer.width > rippleContainer.height
					? rippleContainer.width
					: rippleContainer.height;
			const x = event.clientX - rippleContainer.left - size / 2;
			const y = event.clientY - rippleContainer.top - size / 2;
			const newRipple = { x, y, size };

			setRipples([...ripples, newRipple]);
		};

		React.useEffect(() => {
			const timeouts: NodeJS.Timeout[] = [];

			ripples.forEach((_, index) => {
				const timeout = setTimeout(() => {
					setRipples(prevRipples => prevRipples.filter((_, i) => i !== index));
				}, 850);
				timeouts.push(timeout);
			});

			return () => {
				timeouts.forEach(clearTimeout);
			};
		}, [ripples]);

		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
				onMouseDown={addRipple}
			>
				<span className="relative inline-flex items-center justify-center gap-2 z-10">
					{icon && <span className="icon">{icon}</span>}
					{children}
				</span>
				<div className="absolute inset-0 overflow-hidden">
					{ripples.map((ripple, index) => (
						<span
							key={index}
							style={{
								position: "absolute",
								left: ripple.x,
								top: ripple.y,
								width: ripple.size,
								height: ripple.size,
								transform: "scale(0)",
								borderRadius: "50%",
								backgroundColor: "currentColor",
								opacity: "0.3",
								animation: `ripple 850ms linear`
							}}
						/>
					))}
				</div>
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
