const Badge = ({ name }: { name: string }) => {
	return (
		<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
			{name}
		</span>
	);
};

export default Badge;
