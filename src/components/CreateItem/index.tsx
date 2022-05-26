import { Question } from '@/core/models'
import { DragEvent, FC, useState } from 'react'
import CreateInput from '../CreateInput'

const CreateItem: FC<IProps> = (p) => {
	const { item, changeHandler, setQuestions, deleteQuestion, setCurrentQues, currentQues, questions } = p

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

			<div onClick={() => deleteQuestion(item.id)} style={{ right: '-48px' }} className='group absolute cursor-pointer top-0  h-9 w-12 flex items-center justify-center'>
				<svg className='w-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z'
						className='fill-gray-400 group-hover:fill-red-800'
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
	deleteQuestion: (id: number) => void
	questions: Question[]
	setCurrentQues: (currentQues: Question | null) => void
	currentQues: Question | null
}
export default CreateItem
