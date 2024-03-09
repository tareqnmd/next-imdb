'use client';
import Link from 'next/link';
import { FaThumbsUp } from 'react-icons/fa';
import MovieImage from './common/MovieImage';

export default function MovieCard({ movie }: any) {
	return (
		<Link
			className="cursor-pointer shadow-sm hover:shadow-lg rounded-lg border transition-shadow duration-200 overflow-hidden"
			href={`/movie/${movie.id}`}
		>
			<MovieImage
				image={movie.backdrop_path || movie.poster_path}
				title={movie.title || movie.name}
				extraClasses={'object-cover max-h-[160px]'}
			/>
			<div className="p-2 grid gap-2">
				<h2 className="text-lg font-bold truncate">
					{movie.title || movie.name}
				</h2>
				<p className="line-clamp-2 text-md">{movie.overview}</p>
				<div className="flex items-center justify-between font-bold">
					<span>{movie.release_date || movie.first_air_date}</span>
					<div className="flex items-center">
						<FaThumbsUp className="h-5 mr-1 ml-3" />
						<span>{movie.vote_count}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
