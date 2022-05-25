import { Question } from '@/core/models'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

const Ques: FC<IProps> = (p) => {
	const { ques, scrollHandler, isPrevValue, changeQuestionValue, isTheMore } = p
	const quesRef = useRef<HTMLDivElement>(null)
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [isShow, setIsShow] = useState<boolean>(false)

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = '0px'
			const scrollHeight = textareaRef.current.scrollHeight
			textareaRef.current.style.height = scrollHeight + 'px'
		}
	}, [ques.value])

	useEffect(() => {
		if (ques.value) {
			setIsFocus(true)
			setIsShow(true)
			return
		}
		if (isPrevValue) setIsShow(true)

		if (isTheMore) {
			setIsShow(true)
			return
		}

		if (!isPrevValue) setIsShow(false)
	}, [isPrevValue, isTheMore, ques.value])

	const focus = () => {
		if (isFocus) return
		setIsFocus(true)
		textareaRef.current?.focus()
	}

	const blur = () => {
		setIsFocus(false)
		textareaRef.current?.blur()
	}

	const blurHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const target = e.target.value
		if (!target) blur()
	}
	const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value
		changeQuestionValue(ques.id, value)
	}

	const handler = () => {
		focus()
		setTimeout(() => {
			const offsetTop = quesRef?.current?.offsetTop ?? 0
			scrollHandler(offsetTop)
		}, 50)
	}

	return (
		<div ref={quesRef} onClick={handler} className={['duration-200 py-3', isShow ? (isFocus ? 'opacity-100' : 'opacity-30') : ' overflow-hidden opacity-0'].join(' ')}>
			<h5 className={['font-regular cursor-pointer text-lg font-medium duration-200'].join(' ')}>{ques.title}</h5>
			<textarea onBlur={blurHandler} onFocus={focus} onChange={changeHandler} value={ques.value} ref={textareaRef} className={['mt-1.5 w-full resize-none outline-none'].join(' ')}></textarea>
		</div>
	)
}

interface IProps {
	ques: Question
	isPrevValue: boolean
	isTheMore: boolean
	scrollHandler: (offsetTop: number) => void
	changeQuestionValue: (id: number, value: string) => void
}
export default Ques
