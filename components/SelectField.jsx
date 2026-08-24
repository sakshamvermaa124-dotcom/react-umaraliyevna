export default function SelectField({
	label,
	name,
	value,
	onChange,
	options,
	required = false,
}) {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>

			<select
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
			>
				<option value=''>Select an option</option>

				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
