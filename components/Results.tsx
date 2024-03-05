import MovieCard from './MovieCard';
import MovieFilter from './filter/MovieFilter';

const Results = ({ results }: any) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-10 gap-4">
			<div className="col-span-1 lg:col-span-2 xl:col-span-2">
				<MovieFilter />
			</div>
			<main className="col-span-1 lg:col-span-6 xl:col-span-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
					{results?.map((result: any) => (
						<MovieCard
							key={result.id}
							result={result}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Results;
