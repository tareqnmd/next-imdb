import Image from 'next/image';
const getData = async (id: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}`
	);
	const movie = await res.json();
	return movie;
};
const SingleMovie = async ({ id }: { id: string }) => {
	const movie = await getData(id);
	return (
		<div className="w-full">
			<div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					className="rounded-lg"
					style={{ maxWidth: '100%', height: '100%' }}
					alt=""
				></Image>
				<div className="p-2">
					<h2 className="text-lg mb-3 font-bold">
						{movie.title || movie.name}
					</h2>
					<p className="text-lg mb-3">{movie.overview}</p>
					<p className="mb-3">
						<span className="font-semibold mr-1">Date Released:</span>
						{movie.release_date || movie.first_air_date}
					</p>
					<p className="mb-3">
						<span className="font-semibold mr-1">Rating:</span>
						{movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleMovie;
