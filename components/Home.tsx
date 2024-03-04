import Results from './Results';
const API_KEY = process.env.MOVIE_API_KEY;

const getData = async (searchParams: any) => {
	const { genre } = searchParams;
	const api_genre =
		genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`;
	const res = await fetch(
		`https://api.themoviedb.org/3${api_genre}?api_key=${API_KEY}&language=en-US&page=1`,
		{ cache: 'no-store' }
	);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return await res.json();
};

const Home = async ({ searchParams }: any) => {
	const { results } = await getData(searchParams);
	return <Results results={results} />;
};

export default Home;
