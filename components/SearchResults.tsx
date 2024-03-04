import Results from './Results';
const API_KEY = process.env.MOVIE_API_KEY;

const getData = async (params: any) => {
	const { searchTerm } = params;
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
	);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return await res.json();
};

const SearchResults = async ({ params }: any) => {
	const { results } = await getData(params);
	return <Results results={results} />;
};

export default SearchResults;
