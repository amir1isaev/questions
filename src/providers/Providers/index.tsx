import { FC, ReactNode } from 'react'
import ThemeProvider from './ThemeProvider'

const Provider: FC<IProps> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

interface IProps {
	children: ReactNode
}
export default Provider
