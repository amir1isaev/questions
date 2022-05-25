import axios, { Method } from 'axios'

const axiosResponse = (url: string, method: Method, data?: any) =>
	axios({ method: method, url: url, data })
		.then((res) => res)
		.catch((err) => err.message)

export default axiosResponse
