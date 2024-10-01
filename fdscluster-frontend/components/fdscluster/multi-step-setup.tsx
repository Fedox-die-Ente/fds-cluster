"use client"

import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {CheckIcon, XIcon} from 'lucide-react'

interface Step {
	title: string
	content: React.ReactNode
	onSubmit: () => Promise<boolean>
}

interface MultiStepSetupProps {
	steps: Step[]
	errorMessage: string | null
}

export default function MultiStepSetup({steps, errorMessage}: MultiStepSetupProps) {
	const [currentStep, setCurrentStep] = useState(0)
	const [stepStatuses, setStepStatuses] = useState<Array<'pending' | 'success' | 'error'>>(
		new Array(steps.length).fill('pending')
	)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const nextStep = async () => {
		if (currentStep < steps.length - 1) {
			setIsSubmitting(true)
			const result = await steps[currentStep].onSubmit()
			setIsSubmitting(false)

			if (result) {
				setStepStatuses(prev => {
					const newStatuses = [...prev]
					newStatuses[currentStep] = 'success'
					return newStatuses
				})
				setCurrentStep(currentStep + 1)
			} else {
				setStepStatuses(prev => {
					const newStatuses = [...prev]
					newStatuses[currentStep] = 'error'
					return newStatuses
				})
			}
		}

		if (currentStep === steps.length - 1) {
			setIsSubmitting(true)
			const result = await steps[currentStep].onSubmit()
			setIsSubmitting(false)

			if (result) {
				setStepStatuses(prev => {
					const newStatuses = [...prev]
					newStatuses[currentStep] = 'success'
					return newStatuses
				})
			} else {
				setStepStatuses(prev => {
					const newStatuses = [...prev]
					newStatuses[currentStep] = 'error'
					return newStatuses
				})
			}
		}

	}

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		}
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<div className="mb-8">
				<div className="flex justify-between items-center">
					{steps.map((step, index) => (
						<React.Fragment key={index}>
							<div className="flex flex-col items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center ${
										stepStatuses[index] === 'success'
											? 'bg-green-500 text-white'
											: stepStatuses[index] === 'error'
												? 'bg-red-500 text-white'
												: index <= currentStep
													? 'bg-primary-light dark:bg-primary-dark text-primary-foreground dark:text-white'
													: 'bg-muted text-muted-foreground'
									}`}
								>
									{stepStatuses[index] === 'success' ? (
										<CheckIcon className="w-6 h-6"/>
									) : stepStatuses[index] === 'error' ? (
										<XIcon className="w-6 h-6"/>
									) : (
										index + 1
									)}
								</div>
								<span className="mt-2 text-sm">{step.title}</span>
							</div>
							{index < steps.length - 1 && (
								<div className="flex-1 h-px bg-muted mx-2"/>
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>{steps[currentStep].title}</CardTitle>
				</CardHeader>
				<CardContent>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentStep}
							initial={{opacity: 0, x: 20}}
							animate={{opacity: 1, x: 0}}
							exit={{opacity: 0, x: -20}}
							transition={{duration: 0.3}}
						>
							{steps[currentStep].content}
						</motion.div>
						<p className="text-center text-red-500 mt-4">{errorMessage}</p>
					</AnimatePresence>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button className={'bg-transparent border border-primary-light dark:text-white'} onClick={prevStep}
							disabled={currentStep === 0}
							variant="outline">
						Previous
					</Button>
					<Button
						className={'bg-primary-light dark:bg-primary-dark hover:bg-primary-light/75 dark:bg-primary-dark/50 dark:text-white'}
						onClick={nextStep}
						disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : currentStep === steps.length - 1 ? 'Finish' : 'Next'}
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}