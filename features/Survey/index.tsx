"use client"

import { useState } from "react"

import InputField from "@/components/InputField"
import RadioGroup from "@/components/RadioGroup"
import SelectField from "@/components/SelectField"
import TextareaField from "@/components/TextareaField"

export default function Survey() {
	const [submitted, setSubmitted] = useState(false)

	const [formData, setFormData] = useState({
		name: "",
		age: "",
		profession: "",
		frontend: "",
		experience: "",
		opinion: "",
	})

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		console.log(formData)
		setSubmitted(true)
	}

	function handleReset() {
		setFormData({
			name: "",
			age: "",
			profession: "",
			frontend: "",
			experience: "",
			opinion: "",
		})

		setSubmitted(false)
	}

	if (submitted) {
		return (
			<main className='survey-page'>
				<section className='success-card'>
					<div className='success-icon'>✓</div>

					<h1>Thank You!</h1>

					<p>Your anonymous response has been successfully submitted.</p>

					<button onClick={handleReset}>Submit Another Response</button>
				</section>
			</main>
		)
	}

	return (
		<main className='survey-page'>
			<section className='survey-card'>
				<div className='survey-header'>
					<span className='badge'>ANONYMOUS SURVEY</span>

					<h1>Share Your Opinion</h1>

					<p>
						Your answers are completely anonymous. We would love to hear your
						thoughts.
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<InputField
						label='Your Name (Optional)'
						name='name'
						placeholder='Enter your name'
						value={formData.name}
						onChange={handleChange}
					/>

					<InputField
						label='Your Age'
						name='age'
						type='number'
						placeholder='Enter your age'
						value={formData.age}
						onChange={handleChange}
						required
					/>

					<SelectField
						label='Your Profession'
						name='profession'
						value={formData.profession}
						onChange={handleChange}
						options={[
							"Student",
							"Frontend Developer",
							"Backend Developer",
							"Designer",
							"Teacher",
							"Other",
						]}
						required
					/>

					<RadioGroup
						label='Are you interested in Frontend Development?'
						name='frontend'
						value={formData.frontend}
						onChange={handleChange}
						options={["Yes", "No", "Maybe"]}
					/>

					<RadioGroup
						label='How would you rate your experience?'
						name='experience'
						value={formData.experience}
						onChange={handleChange}
						options={["Beginner", "Intermediate", "Advanced"]}
					/>

					<TextareaField
						label='Your Opinion'
						name='opinion'
						placeholder='Tell us what you think...'
						value={formData.opinion}
						onChange={handleChange}
					/>

					<button className='submit-btn' type='submit'>
						Submit Survey
						<span>→</span>
					</button>
				</form>
			</section>
		</main>
	)
}
