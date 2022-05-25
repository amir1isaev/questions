import { Segment } from '@/core/interfaces'
import { FC } from 'react'

const Item: FC<IProps> = (p) => {
	const { item, isSelect, onClick } = p
	return (
		<div
			onClick={onClick}
			className={[
				isSelect ? 'text-white' : 'text-black',
				'duration-200 grow cursor-pointer h-full z-10 items-center justify-center flex',
			].join(' ')}
		>
			{item.label}
		</div>
	)
}

interface IProps {
	item: Segment
	isSelect: boolean
	onClick: () => void
}

export default Item
