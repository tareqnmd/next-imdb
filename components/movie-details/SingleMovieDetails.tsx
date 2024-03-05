import Image from 'next/image';

const SingleMovieDetails = async ({ movie }: any) => {
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
					<p className="text-lg">{movie.overview}</p>
					<p className="flex items-center gap-2">
						<span className="font-semibold">Date Released:</span>
						<span>{movie.release_date || movie.first_air_date}</span>
					</p>
					<p className="flex items-center gap-2">
						<span className="font-semibold">Rating:</span>
						<span>{movie.vote_count}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleMovieDetails;
