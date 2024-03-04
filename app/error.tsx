'use client';

const ErrorArea = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<div className="text-center mt-10">
			<h1>Something went wrong. Please try again later.</h1>
			<button
				className="hover:text-amber-600"
				onClick={() => reset()}
			>
				Try Again
			</button>
		</div>
	);
};

export default ErrorArea;
