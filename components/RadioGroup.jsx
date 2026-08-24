export default function RadioGroup({ label, name, options, value, onChange }) {
	return (
		<div className='field'>
			<label>{label}</label>

			<div className='radio-group'>
				{options.map((option) => (
					<label className='radio-option' key={option}>
						<input
							type='radio'
							name={name}
							value={option}
							checked={value === option}
							onChange={onChange}
						/>

						<span>{option}</span>
					</label>
				))}
			</div>
		</div>
	)
}
