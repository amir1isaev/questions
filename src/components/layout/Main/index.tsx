import { FC, ReactNode } from 'react'

const Main: FC<IProps> = ({ children }) => {
	return (
		<main className='flex-1'>
			<div className='max-w-3xl mx-auto px-5'>{children}</div>
		</main>
	)
}

interface IProps {
	children: ReactNode
}
export default Main
