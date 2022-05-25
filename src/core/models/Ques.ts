import { EWhereToSend } from '../enums'
import Question from './Questions'

interface Ques {
	id: number
	title: string
	desc: string
	slug: string
	expires: number
	send: {
		type: EWhereToSend
		name: string
	}
	questions: Question[]
	created_at: Date
}

export default Ques
