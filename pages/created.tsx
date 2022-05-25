import WhereToSend from '@/components/WhereToSend'
import { getQues } from '@/core/api'
import { Ques } from '@/core/models'
import { copy, getSlug } from '@/core/utils'
import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'

const Created: NextPage<IProps> = ({ ques }) => {
	const [isCopy, setIsCopy] = useState<boolean>(false)
	const url = `http://localhost:3000/${ques.slug}`

	const copyHandler = () => {
		setIsCopy(true)
		copy(url)
	}
	return (
		<div className='py-10 px-7'>
			<div>
				<h2 className='text-2xl font-bold'>{ques.title}</h2>
				<h3 className='mt-2'>{ques.desc}</h3>
			</div>
			<div className='bg-gray-100 px-4 py-3 gap-3 rounded-lg mt-4 flex items-center'>
				<h4 className='truncate w-full'>{url}</h4>
				<div onClick={copyHandler} className='cursor-pointer'>
					{isCopy ? (
						<svg className='fill-green-500' width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<g>
									<rect width='24' height='24' opacity='0' />
									<path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z' />
								</g>
							</g>
						</svg>
					) : (
						<svg className='w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 460'>
							<path d='M425.934 0H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h30V32.864A2.868 2.868 0 0 1 171.662 30h254.272a2.868 2.868 0 0 1 2.864 2.864v254.272a2.868 2.868 0 0 1-2.864 2.865h-74.729v30h74.729c18.121 0 32.864-14.743 32.864-32.865V32.864C458.797 14.743 444.055 0 425.934 0z' />
							<path d='M288.339 139.998H34.068c-18.122 0-32.865 14.743-32.865 32.865v254.272C1.204 445.257 15.946 460 34.068 460H288.34c18.122 0 32.865-14.743 32.865-32.864V172.863c.001-18.122-14.744-32.865-32.866-32.865zM288.341 430H34.068a2.868 2.868 0 0 1-2.865-2.864V172.863a2.868 2.868 0 0 1 2.865-2.865H288.34a2.868 2.868 0 0 1 2.865 2.865v254.273h.001a2.868 2.868 0 0 1-2.865 2.864z' />
						</svg>
					)}
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

export default Created
