import { Segment } from '@/core/interfaces'
import { FC, useState } from 'react'
import Item from './item'

const MySegment: FC<IProps> = (p) => {
	const { items, value, setValue } = p
	const [left, setLeft] = useState<number>(0)

	const handler = (type: string, index: number) => {
		setValue(type)
		const left = index === 1 ? 0 : 100 / index

		setLeft(left)
	}
	return (
		<div className='bg-gray-100 rounded-lg p-1'>
			<div className='flex h-10  relative'>
				{items.map((item, index) => (
					<Item
						isSelect={value === item.type}
						onClick={() => handler(item.type, index + 1)}
						key={item.id}
						item={item}
					/>
				))}
				<div
					style={{ left: `${left}%` }}
					className=' duration-200 h-full top-0 rounded-lg absolute w-3/6 bg-black'
				></div>
			</div>
		</div>
	)
}

interface IProps {
	items: Segment[]
	value: string
	setValue: (value: string) => void
}
export default MySegment
