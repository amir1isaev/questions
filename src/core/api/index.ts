import { apiRoutes } from '../routes'
import axiosResponse from './axiosResponse'
import { AxiosResponse } from 'axios'
import { Ques } from '../models'

export const getQues = async (ques: string) => {
	const url = apiRoutes.quesAPIRoutes.show(ques)

	try {
		const res: AxiosResponse<Ques, any> = await axiosResponse(
			url,
			'GET',
			{}
		)
		if (res.status === 200) {
			return res.data
		}
		return null
	} catch (error) {
		return null
	}
}
