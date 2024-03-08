import Link from 'next/link';
import DarkModeSwitch from '../DarkModeSwitch';
import LinkItem from './LinkItem';
const links = [
	{ title: 'Trending', link: 'trending' },
	{ title: 'Top Rated', link: 'top-rated' },
];

export default function Navbar() {
	return (
		<div className="bg-white dark:bg-gray-900 shadow dark:shadow-gray-600">
			<div className="container mx-auto flex items-center gap-2 p-2">
				<Link
					className="mr-auto text-xl font-bold"
					href="/"
				>
					Next Movie
				</Link>
				<DarkModeSwitch />
				{links?.map((link) => (
					<LinkItem
						key={link.link}
						link={link}
					/>
				))}
			</div>
		</div>
	);
}
