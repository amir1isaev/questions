import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'

const MyThemeProvider: FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			{children}
		</ThemeProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default MyThemeProvider
