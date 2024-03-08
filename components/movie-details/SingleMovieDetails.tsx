import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import Badge from '../common/Badge';

const SingleMovieDetails = async ({ movie }: any) => {
	console.log('movie', movie);
	return (
		<div className="w-full">
			<div className="grid gap-4">
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					width="0"
					height="0"
					sizes="100vw"
					className="overflow-hidden w-full"
					alt=""
				></Image>
				<div className="grid gap-2">
					<h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
					<div className="flex items-center gap-2 mb-2">
						{movie.genres.map((item: any) => (
							<Badge
								key={item.id}
								name={item.name}
							/>
						))}
					</div>
					<div className="flex items-center gap-2 border rounded px-2 py-1 w-max">
						<FaVideo />
						<span>{movie.runtime} Min</span>
					</div>
					<p className="text-lg">{movie.overview}</p>
					<div className="flex items-center gap-2">
						<span className="font-semibold">Date Released:</span>
						<span>{movie.release_date || movie.first_air_date}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleMovieDetails;
