import MovieCard from './MovieCard';

export default function Results({ results = [] }: any) {
	return (
		<div className="grid grid-cols-4 gap-2">
			{results?.map((result: any) => (
				<MovieCard
					key={result.id}
					result={result}
				/>
			))}
		</div>
	);
}
