'use client';
import { ThemeProvider } from 'next-themes';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			defaultTheme="system"
			attribute="class"
		>
			<div className="text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen select-none transition-colors duration-100">
				{children}
			</div>
		</ThemeProvider>
	);
};

export default AppProvider;
