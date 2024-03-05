import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import AppProvider from '@/components/provider/AppProvider';
import '@/styles/global.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next Movie',
	description: 'This is a movie database',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppProvider>
					<Navbar />
					<SearchBox />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
