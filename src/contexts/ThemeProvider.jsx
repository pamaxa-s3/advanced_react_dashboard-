import { ThemeContext } from '@contexts';

const themePromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve({
			theme: 'dark',
			toggleTheme: () => console.log('toggle theme'),
		});
	}, 800);
});

export const ThemeProvider = ({ children }) => {
	return (
		<ThemeContext.Provider value={themePromise}>
			{children}
		</ThemeContext.Provider>
	);
};
