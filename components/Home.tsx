import Results from './Results';
const API_KEY = process.env.MOVIE_API_KEY;

const getData = async (searchParams: any) => {
	const { genre, search } = searchParams;
	const api_genre =
		genre === 'top-rated'
			? `/movie/top_rated`
			: 'trending'
			? `/trending/all/week`
			: '';
	const res = search
		? await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`,
				{ cache: 'no-store' }
		  )
		: await fetch(
				`https://api.themoviedb.org/3${api_genre}?api_key=${API_KEY}`,
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
