import SingleMovie from '@/components/SingleMovie';

export default async function MoviePage({
	params,
}: {
	params: { id: string };
}) {
	return <SingleMovie id={params.id} />;
}
