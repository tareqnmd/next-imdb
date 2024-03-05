import SingleMovieDetails from './SingleMovieDetails';
const getData = async (id: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}`
	);
	const movie = await res.json();
	return movie;
};
const SingleMovie = async ({ id }: { id: string }) => {
	const movie = await getData(id);
	return <SingleMovieDetails movie={movie} />;
};

export default SingleMovie;
