import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import AppProvider from '@/components/provider/AppProvider';
import { Inter } from 'next/font/google';
import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'IMDb clone',
	description: 'This is a movie database clone',
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
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
