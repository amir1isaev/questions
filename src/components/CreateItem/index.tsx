import { Question } from '@/core/models'
import { DragEvent, FC, useState } from 'react'
import CreateInput from '../CreateInput'

const CreateItem: FC<IProps> = (p) => {
	const { item, changeHandler, setQuestions, setCurrentQues, currentQues, questions } = p

	const [over, setOver] = useState<boolean>(false)

	const dragStartHandler = () => {
		setCurrentQues(item)
	}
	const dragLeaveHandler = () => {
		setOver(false)
	}

	const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setOver(true)
	}
	const dropHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const newQuestions = questions.map((ques) => {
			if (ques.id === item.id) {
				return { ...ques, order: currentQues?.order ?? 0 }
			}
			if (ques.id === currentQues?.id) {
				return { ...ques, order: item.order }
			}
			return ques
		})
		setQuestions(newQuestions)
		setOver(false)
	}

	return (
		<div
			onDragStart={() => dragStartHandler()}
			onDragLeave={() => dragLeaveHandler()}
			onDragOver={(e) => dragOverHandler(e)}
			onDrop={(e) => dropHandler(e)}
			key={item.id}
			draggable={true}
			className={['relative border-t-4  border-white', over ? 'border-blue-400' : 'border-white'].join(' ')}
		>
			<CreateInput setValue={(value) => changeHandler(item.id, value)} value={item.title} className='cursor-pointer text-lg font-medium' placeholder='Ques' />

			<div style={{ right: '-48px' }} className='create-icon absolute cursor-pointer top-0  h-9 w-12 flex items-center justify-center'>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						className='fill-gray-400'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M8 18C9.10457 18 10 18.8954 10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18ZM16 18C17.1046 18 18 18.8954 18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18ZM8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10ZM16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10ZM8 2C9.10457 2 10 2.89543 10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2ZM16 2C17.1046 2 18 2.89543 18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2Z'
					/>
				</svg>
			</div>
		</div>
	)
}

interface IProps {
	changeHandler: (id: number, value: string) => void
	item: Question
	setQuestions: (questions: Question[]) => void
	questions: Question[]
	setCurrentQues: (currentQues: Question | null) => void
	currentQues: Question | null
}
export default CreateItem
