export default function TextareaField({
	label,
	name,
	placeholder,
	value,
	onChange,
}) {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>

			<textarea
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				rows='5'
			/>
		</div>
	)
}
