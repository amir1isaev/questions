import WhereToSend from '@/components/WhereToSend'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className='py-10'>
			<div>
				<h2 className='text-2xl font-bold'>Расскажите о себе</h2>
				<h3 className='mt-2'>Нам неважно, какие у Вас компетенции, мы смотрим в первую очередь на личные качества человека. Компетенции - это лишь набор инструментов для решения задач. Например, если Вы ветеринар, но обладаете сильными личными качествами, мы будем готовы взять Вас в команду. А чем Вы будете заниматься во благо команды - решить нетрудно.</h3>
			</div>
			<WhereToSend />
		</div>
	)
}

export default Home
