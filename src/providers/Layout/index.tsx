import { FC, ReactNode } from 'react'
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'
import Provider from '../Providers'

const Layout: FC<IProps> = ({ children }) => {
	return (
		<Provider>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
