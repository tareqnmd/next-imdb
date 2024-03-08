import Image from 'next/image';
import Link from 'next/link';
import { FaThumbsUp } from 'react-icons/fa';

export default function MovieCard({ result }: any) {
	return (
		<Link
			className="cursor-pointer shadow-sm hover:shadow-lg rounded-lg border transition-shadow duration-200 overflow-hidden"
			href={`/movie/${result.id}`}
		>
			<Image
				src={`https://image.tmdb.org/t/p/original/${
					result.backdrop_path || result.poster_path
				}`}
				width="0"
				height="0"
				sizes="100vw"
				className="overflow-hidden w-full object-cover max-h-[160px]"
				alt=""
			></Image>
			<div className="p-2 grid gap-2">
				<h2 className="text-lg font-bold truncate">
					{result.title || result.name}
				</h2>
				<p className="line-clamp-2 text-md">{result.overview}</p>
				<div className="flex items-center justify-between font-bold">
					<span>{result.release_date || result.first_air_date}</span>
					<div className="flex items-center">
						<FaThumbsUp className="h-5 mr-1 ml-3" />
						<span>{result.vote_count}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
