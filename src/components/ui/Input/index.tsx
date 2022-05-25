import { FC } from 'react'

const Input: FC<IProps> = (p) => {
	const { placeholder, name, type, value, setValue } = p
	return (
		<input
			className='h-12 bg-gray-100 px-4 w-full rounded-lg'
			type={type}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			name={name}
			placeholder={placeholder}
		/>
	)
}

interface IProps {
	placeholder: string
	name: string
	type: string
	value: string
	setValue: (value: string) => void
}
export default Input
