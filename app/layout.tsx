import Navbar from '@/components/navbar/Navbar';
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
					<main className="container mx-auto py-6 px-2">{children}</main>
				</AppProvider>
			</body>
		</html>
	);
}
