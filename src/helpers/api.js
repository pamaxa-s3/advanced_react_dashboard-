export const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	if (!res.ok) {
		throw new Response('Failed to fetch users', { status: res.status });
	}

	return res.json();
};

const delay = ms => new Promise(res => setTimeout(res, ms));

export const getUsersSlow = async () => {
	await delay(2000);

	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	if (!res.ok) {
		throw new Response('Failed to fetch users', { status: res.status });
	}

	return res.json();
};