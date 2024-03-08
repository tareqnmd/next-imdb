'use client';
import { useEffect, useState } from 'react';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';

const Pagination = ({ total }: { total: number }) => {
	const [pages, setPages] = useState<any>([]);
	const [activePage, setActivePage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPerPage(Number(value));
	};

	useEffect(() => {
		if (total && perPage) {
			setPages([...Array(Math.ceil(total / perPage) + 1).keys()].slice(1));
			setActivePage(1);
		}
	}, [total, perPage]);
	return (
		<div className="flex items-center justify-end gap-2 my-4">
			<span className="font-bold">
				{perPage * (activePage - 1) + 1}–{activePage * perPage} of {total}
			</span>
			<input
				className="w-[50px] border rounded pl-2"
				value={perPage}
				min="10"
				onChange={changeHandler}
				type="number"
			/>
			<div className="flex items-center gap-2">
				<button
					onClick={() => setActivePage((prev: number) => prev - 1)}
					disabled={activePage === 1}
					className={activePage === 1 ? 'text-gray-400' : ''}
				>
					<GiPreviousButton />
				</button>
				{pages.map((item: number) => (
					<button
						onClick={() => setActivePage(item)}
						className={`border rounded w-[24px] ${
							activePage === item ? 'bg-gray-600 text-white' : ''
						}`}
						key={item}
					>
						{item}
					</button>
				))}
				<button
					onClick={() => setActivePage((prev: number) => prev + 1)}
					disabled={activePage === pages[pages.length - 1]}
					className={
						activePage === pages[pages.length - 1] ? 'text-gray-400' : ''
					}
				>
					<GiNextButton />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
