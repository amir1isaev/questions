import Created from '@/components/Created'
import CreateInput from '@/components/CreateInput'
import CreateItem from '@/components/CreateItem'
import Button from '@/components/ui/Button'
import { Question } from '@/core/models'
import { randomId, sortOrder } from '@/core/utils'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Create: NextPage<IProps> = (p) => {
	const { isSended } = p
	const [title, setTitle] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const router = useRouter()
	const [questions, setQuestions] = useState<Question[]>([{ id: randomId(), title: '', value: '', order: 1 }])
	const isCreate = !!title && !!desc && !!questions.find((ques) => ques.title)
	const [currentQues, setCurrentQues] = useState<Question | null>(null)
	const isMax = questions.length >= 10

	const changeHandler = (id: number, value: string) => {
		const newQuestions = questions.map((item) => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setQuestions(newQuestions)
	}

	const addQuestion = () => {
		const lastItem = questions[questions.length - 1]
		setQuestions([
			...questions,
			{
				id: randomId(),
				title: '',
				value: '',
				order: lastItem.order + 1,
			},
		])
	}

	const create = async () => {
		router.push({ pathname: '/created', query: { ques: 'tell_us_about_yourself_124' } })
	}

	return (
		<div className='py-10 px-7'>
			<div className='flex flex-col gap-1'>
				<CreateInput setValue={setTitle} value={title} className='text-2xl font-bold' placeholder='Title' />
				<CreateInput value={desc} setValue={setDesc} placeholder='Desscription' />
			</div>
			<div className='mt-4 relative'>
				<div className='flex flex-col'>
					{questions.sort(sortOrder).map((item) => (
						<CreateItem setCurrentQues={setCurrentQues} currentQues={currentQues} setQuestions={setQuestions} key={item.id} questions={questions} changeHandler={changeHandler} item={item} />
					))}
				</div>
				{!isMax && (
					<div onClick={addQuestion} style={{ left: '-48px' }} className='create-icon absolute b-0 h-9 w-12 flex items-center justify-center cursor-pointer'>
						<svg className='w-5' viewBox='0 0 97 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								className='fill-gray-400'
								fillRule='evenodd'
								clipRule='evenodd'
								d='M52.6011 3.98648C52.3504 1.82774 50.5157 0.1521 48.2897 0.1521C45.8925 0.1521 43.9491 2.09544 43.9491 4.49268V43.5579H4.88391L4.37771 43.5871C2.21897 43.8378 0.543335 45.6725 0.543335 47.8985C0.543335 50.2957 2.48668 52.2391 4.88391 52.2391H43.9491V91.3043L43.9783 91.8105C44.2291 93.9692 46.0637 95.6449 48.2897 95.6449C50.6869 95.6449 52.6303 93.7015 52.6303 91.3043V52.2391H91.6955L92.2017 52.2099C94.3604 51.9591 96.0361 50.1245 96.0361 47.8985C96.0361 45.5012 94.0927 43.5579 91.6955 43.5579H52.6303V4.49268L52.6011 3.98648Z'
							/>
						</svg>
					</div>
				)}
				<Button onClick={create} className='mt-10 w-32' loading={false} disabled={!isCreate}>
					Создать
				</Button>
			</div>
		</div>
	)
}
interface IProps {
	isSended: boolean
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { type, name } = ctx.query
	if (!type || !name) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}
export default Create
