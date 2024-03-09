'use client';
import Image from 'next/image';

const MovieImage = ({ image, title, extraClasses = '' }: any) => {
	return (
		<Image
			loader={() => '/default.jpg'}
			src={
				image ? `https://image.tmdb.org/t/p/original/${image}` : '/default.jpg'
			}
			width="0"
			height="0"
			sizes="100vw"
			className={`overflow-hidden w-full ${extraClasses}`}
			alt={title}
		></Image>
	);
};

export default MovieImage;
