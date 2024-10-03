import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default_raised:
					"bg-primary rounded-3xl font-openSans font-semibold text-white text-sm px-5 hover:bg-primary/90",
				secondary_raised:
					"bg-secondary rounded-3xl font-openSans font-semibold text-white text-sm px-5 hover:bg-secondary/90",
				ghost_raised:
					"bg-accent font-semibold font-openSans text-black text-opacity-50 rounded-3xl hover:text-accent-foreground/90 ",
				default_outline:
					"bg-transparent border border-primary rounded-3xl font-openSans font-semibold text-primary text-sm px-5 hover:bg-primary/10",
				secondary_outline:
					"bg-transparent border border-secondary rounded-3xl font-openSans font-semibold text-secondary text-sm px-5 hover:bg-secondary/10",
				ghost_outline:
					"bg-transparent border border-accent font-semibold font-openSans text-black text-opacity-50 rounded-3xl hover:text-accent-foreground/80"
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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	icon?: React.ReactNode;
	asChild?: boolean;
	className?: string;
};
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, icon, asChild = false, children, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				className={cn(
					"inline-flex items-center justify-center gap-2",
					buttonVariants({ variant, size }),
					className
				)}
				ref={ref}
				{...props}
			>
				{icon && <span className="icon">{icon}</span>}
				{children}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
