import { FC, ReactNode } from 'react'
import Loader from '../Loader'

const Button: FC<IProps> = (p) => {
	const { children, disabled, loading, className, onClick } = p
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={[
				className,
				'active:scale-90 duration-200',
				'disabled:opacity-30  disabled:cursor-not-allowed',
				' flex items-center justify-center h-12 rounded-lg px-7 cursor-pointer bg-gray-100 text-black',
			].join(' ')}
		>
			{loading ? <Loader /> : children}
		</button>
	)
}

interface IProps {
	children: ReactNode
	loading?: boolean
	onClick?: () => void
	disabled?: boolean
	className?: string
}
export default Button
