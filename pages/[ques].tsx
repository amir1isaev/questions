import QuesItem from '@/components/ques'
import Button from '@/components/ui/Button'
import { getQues } from '@/core/api'
import { Ques, Question } from '@/core/models'
import { getSlug } from '@/core/utils'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FC, useRef, useState, useEffect } from 'react'

const Ques: FC<IProps> = ({ ques }) => {
	const scrollRef = useRef<HTMLDivElement>(null)
	const contendRef = useRef<HTMLDivElement>(null)
	const router = useRouter()
	const [questions, setQuestions] = useState<Question[]>(ques.questions)
	const isEnd = !!questions?.filter((item) => item.value === '').length

	const scrollHandler = (offsetTop: number) => {
		scrollRef.current?.scrollTo(0, offsetTop)
	}

	const changeQuestionValue = (id: number, value: string) => {
		const newQuestions = questions.map((item) => {
			if (item.id === id) {
				item.value = value
			}
			return item
		})
		setQuestions(newQuestions)
	}

	const sendQuestions = () => {
		router.push('/finish')
	}

	useEffect(() => {}, [questions])

	useEffect(() => {}, [])

	return (
		<div ref={scrollRef} className='py-6 h-screen  overflow-auto'>
			<div ref={contendRef} style={{ paddingBottom: '100vh' }}>
				<div>
					<h2 className='text-2xl font-bold'>{ques.title}</h2>
					<h3 className='mt-2'>{ques.desc}</h3>
				</div>
				<div className='mt-3'>
					<div className='flex flex-col gap-2'>
						{questions.map((item, index) => (
							<QuesItem
								changeQuestionValue={changeQuestionValue}
								isTheMore={!!questions.slice(index + 1, questions.length).filter((item) => item.value).length}
								isPrevValue={index === 0 ? true : !!questions[index - 1]?.value ?? false}
								scrollHandler={scrollHandler}
								key={item.id}
								ques={item}
							/>
						))}
					</div>

					<div onClick={sendQuestions} className={[isEnd ? 'opacity-0' : 'opacity-100'].join(' ')}>
						<Button loading={false} disabled={isEnd}>
							Отправить
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryQues: string = getSlug(ctx.query.ques) ?? ''
	const ques: Ques | null = await getQues(queryQues)

	if (!ques) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {
			ques,
		},
	}
}

interface IProps {
	ques: Ques
}

export default Ques
