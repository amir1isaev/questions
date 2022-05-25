// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EWhereToSend } from '@/core/enums'
import { Ques } from '@/core/models'
import { randomId } from '@/core/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

const questions = [
	{
		id: randomId(),
		title:
			'Укажите любую вакансию, которая Вам интересна, или должность, в которой работаете.',
		value: '',
		order: 1,
	},
	{
		id: randomId(),
		title: 'Рассматриваете ли работу в офисе или только удаленную работу?',
		value: '',
		order: 2,
	},
	{
		id: randomId(),
		title:
			'Вас интересует полная занятость или частичная? Укажите от 20 до 40 часов в неделю.',
		value: '',
		order: 3,
	},
	{
		id: randomId(),
		title:
			'Какие у Вас зарплатные ожидания, если будете работать на полную занятость?',
		value: '',
		order: 4,
	},
	{
		id: randomId(),
		title: 'Введите Ваше ФИО.',
		value: '',
		order: 5,
	},
	{
		id: randomId(),
		title: 'Укажите свой номер телефона для связи.',
		value: '',
		order: 6,
	},
]

const quesItem: Ques = {
	id: 124,
	send: {
		type: EWhereToSend.EMAIL,
		name: 'amir1isaev@gmail.com',
	},
	expires: 24,
	created_at: new Date(),
	title: 'Расскажите о себе',
	questions,
	slug: `tell_us_about_yourself_124`,
	desc: 'Нам неважно, какие у Вас компетенции, мы смотрим в первую очередь на личные качества человека. Компетенции - это лишь набор инструментов для решения задач. Например, если Вы ветеринар, но обладаете сильными личными качествами, мы будем готовы взять Вас в команду. А чем Вы будете заниматься во благо команды - решить нетрудно.',
}

const arr = [quesItem]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const quesSlug = req.query.ques
	console.log('quesSlug', quesSlug)
	const ques = arr.filter((item) => item.slug === quesSlug)[0]

	if (ques) {
		res.status(200).json(ques)
	} else {
		res.status(404).json({})
	}
}
