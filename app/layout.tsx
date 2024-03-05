import MovieFilter from '@/components/filter/MovieFilter';
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
					<div className="container mx-auto my-6">
						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-1">
								<MovieFilter />
							</div>
							<main className="col-span-5">{children}</main>
						</div>
					</div>
				</AppProvider>
			</body>
		</html>
	);
}
