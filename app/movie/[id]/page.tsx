import SingleMovie from '@/components/movie-details/SingleMovie';

export default async function MoviePage({
	params,
}: {
	params: { id: string };
}) {
	return <SingleMovie id={params.id} />;
}
