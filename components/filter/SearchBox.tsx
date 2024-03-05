'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
	const [search, setSearch] = useState('');
	const router = useRouter();
	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/search/${search}`);
	};
	return (
		<form
			className="grid gap-2"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search keywords..."
				className="placeholder-gray-500 border rounded bg-white p-1"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className="border rounded bg-black text-white p-1 disabled:text-gray-400"
				disabled={search === ''}
			>
				Search
			</button>
		</form>
	);
};

export default SearchBox;
