import { serverURI } from '../config'

export const quesAPIRoutes = {
	show: (ques: string) => `${serverURI}/ques/${ques}`,
}
