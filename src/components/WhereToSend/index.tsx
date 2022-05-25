import { EWhereToSend } from '@/core/enums'
import { useRouter } from 'next/router'
import { FC, FormEventHandler, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import MySegment from '../ui/Segment'

const WhereToSend: FC<IProps> = () => {
	const [type, setType] = useState<string>(EWhereToSend.TELEGRAM)
	const [name, setName] = useState<string>('')
	const [expires, setExpires] = useState<number>(24)
	const router = useRouter()

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		if (!name) return

		router.push({ pathname: '/create', query: { type, name } })
	}

	return (
		<form onSubmit={onSubmit}>
			<div className='mt-5 max-w-xs'>
				<h4 className='text-lg font-semibold mb-2'>Выбирите куда отправить резe</h4>
				<MySegment
					value={type}
					setValue={setType}
					items={[
						{ id: 1, label: 'Telegram', type: EWhereToSend.TELEGRAM },
						{ id: 2, label: 'На почту', type: EWhereToSend.EMAIL },
					]}
				/>
				<div className='mt-2 w-full'>
					<Input
						value={name}
						setValue={setName}
						type={type === EWhereToSend.TELEGRAM ? 'text' : 'email'}
						name='where'
						placeholder={type === EWhereToSend.TELEGRAM ? 'Enter you telegram nickname' : 'Enter you email'}
					/>
				</div>
			</div>

			<Button className='mt-6 w-32' loading={false} disabled={!name}>
				Далее
			</Button>
		</form>
	)
}

interface IProps {}
export default WhereToSend
