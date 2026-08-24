export default function InputField({
	label,
	name,
	type = "text",
	placeholder,
	value,
	onChange,
	required = false,
}) {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>

			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	)
}
