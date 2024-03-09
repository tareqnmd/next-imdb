'use client';
import Image from 'next/image';

const MovieImage = ({ image, title, extraClasses = '' }: any) => {
	return (
		<Image
			src={
				image ? `https://image.tmdb.org/t/p/original/${image}` : '/default.jpg'
			}
			width="0"
			height="0"
			loading="lazy"
			sizes="100vw"
			className={`overflow-hidden w-full transition-opacity opacity-0 duration-[0.5s] ${extraClasses}`}
			onLoadingComplete={(img) => img.classList.remove('opacity-0')}
			alt={title}
		></Image>
	);
};

export default MovieImage;
