import { FC, useEffect, useRef, useState } from 'react'

const CreateInput: FC<IProps> = (p) => {
	const { placeholder, className, value, setValue } = p
	const valueRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (valueRef && valueRef.current) {
			valueRef.current.style.height = '0px'
			const scrollHeight = valueRef.current.scrollHeight
			valueRef.current.style.height = scrollHeight + 'px'
		}
	}, [value])

	return (
		<textarea ref={valueRef} value={value} onChange={(e) => setValue(e.target.value)} className={[className, 'w-full resize-none outline-none bg-transparent'].join(' ')} placeholder={placeholder} />
	)
}

interface IProps {
	className?: string
	setValue: (value: string) => void
	placeholder: string
	value: string
}
export default CreateInput
