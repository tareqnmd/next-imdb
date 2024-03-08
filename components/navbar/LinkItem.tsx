'use client';

import Link from 'next/link';

export default function LinkItem({ link }: any) {
	return (
		<div>
			<Link
				className="text-sm text-black dark:text-white"
				href={`/?genre=${link.link}`}
			>
				{link.title}
			</Link>
		</div>
	);
}
