import Button from '@/components/ui/Button'
import WhereToSend from '@/components/WhereToSend'
import { getQues } from '@/core/api'
import { Ques } from '@/core/models'
import { copy, getSlug } from '@/core/utils'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Finish: NextPage = () => {
	return (
		<div className='py-10 px-7'>
			<div className='max-w-sm mx-auto flex flex-col items-center '>
				<h2 className='text-2xl font-bold text-center'>Готово</h2>
				<h3 className='mt-2 text-center mb-5'>Если тестовое задание выдал наш сотрудник, то оповестите его о выполнении. Ваш ID: 393505</h3>
				<Link href='/'>
					<Button>На главную</Button>
				</Link>
			</div>
		</div>
	)
}

export default Finish
