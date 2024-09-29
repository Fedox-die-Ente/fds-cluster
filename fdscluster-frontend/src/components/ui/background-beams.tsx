'use client'

import { useEffect, useRef } from "react"

export const BackgroundBeams = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const mousePosition = useRef({ x: 0, y: 0 })
	const containerSize = useRef({ w: 0, h: 0 })
	const lastTime = useRef(0)

	useEffect(() => {
		const calculateSizes = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				containerSize.current = { w: rect.width, h: rect.height }
			}
		}

		calculateSizes()
		window.addEventListener("resize", calculateSizes)

		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				mousePosition.current = {
					x: e.clientX - containerRef.current.offsetLeft,
					y: e.clientY - containerRef.current.offsetTop
				}
			}
		}

		window.addEventListener("mousemove", handleMouseMove)

		const animateBeams = () => {
			if (!containerRef.current) return
			const beams = containerRef.current.querySelectorAll<HTMLDivElement>(".beam")
			const currentTime = Date.now()
			beams.forEach((beam) => {
				const { x, y } = mousePosition.current
				const { w, h } = containerSize.current
				const bcr = beam.getBoundingClientRect()
				const bx = bcr.left + bcr.width / 2 - containerRef.current!.offsetLeft
				const by = bcr.top + bcr.height / 2 - containerRef.current!.offsetTop
				const dx = x - bx
				const dy = y - by
				const dist = Math.sqrt(dx * dx + dy * dy)
				const maxDist = Math.max(w, h)
				const intensity = (maxDist - dist) / maxDist
				beam.style.opacity = Math.max(0.2, intensity).toString()
				beam.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`
				beam.style.setProperty("--intensity", intensity.toString())
			})
			lastTime.current = currentTime
			requestAnimationFrame(animateBeams)
		}

		animateBeams()

		return () => {
			window.removeEventListener("resize", calculateSizes)
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
		>
			{[...Array(20)].map((_, i) => (
				<div
					key={i}
					className="beam absolute top-1/2 left-1/2 h-[40vh] w-[1px] bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-30"
					style={{
						transform: `rotate(${(i * 360) / 20}deg)`,
					}}
				/>
			))}
		</div>
	)
}