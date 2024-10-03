"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className
}: {
	items: {
		quote: string;
		name: string;
		title: string;
		avatar: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => (
					<li
						className="w-[350px] max-w-full relative rounded-lg border-2 border-gray-200 bg-gray-100 dark:bg-dark-two dark:border-dark-border flex-shrink-0 p-6 flex flex-col justify-between"
						key={idx}
					>
						<blockquote className="flex flex-col h-full">
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<p className="relative z-20 text-sm leading-[1.6] text-gray-800 dark:text-gray-200 font-normal flex-grow">
								{item.quote}
							</p>
							<div className="relative z-20 mt-6 flex flex-row items-center">
								<div className="mr-3">
									<img
										src={item.avatar}
										alt={`Avatar of ${item.name}`}
										className="w-10 h-10 rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col">
									<span className="text-sm font-semibold leading-[1.6] text-gray-900 dark:text-white">
										{item.name}
									</span>
									<span className="text-xs leading-[1.6] text-gray-500 dark:text-gray-400 font-normal">
										{item.title}
									</span>
								</div>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
