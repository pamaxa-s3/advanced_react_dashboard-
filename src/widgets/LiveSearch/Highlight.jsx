const Highlight = ({ text, query }) => {
	if (!query) return text;

	const parts = text.split(new RegExp(`(${query})`, 'gi'));

	return parts.map((part, i) =>
		part.toLowerCase() === query.toLowerCase()
			? <mark key={i}>{part}</mark>
			: part
	);
};

export default Highlight;
