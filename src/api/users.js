export const fetchUsers = async () => {
	await new Promise(res => setTimeout(res, 800));

	return Array.from({ length: 80 }, (_, i) => ({
		id: i + 1,
		name: `User ${i + 1}`,
		email: `user${i + 1}@mail.com`,
		active: Math.random() > 0.3,
		createdAt: Date.now() - Math.floor(Math.random() * 1e10)
	}));
};

export const createUser = async (formData) => {
	await new Promise(res => setTimeout(res, 1000));

	if (formData.email.includes('admin')) {
		return {
			error: 'Email already exists'
		};
	}

	return {
		success: true,
		user: {
			id: Date.now(),
			name: formData.name,
			email: formData.email,
			active: true,
			createdAt: Date.now()
		}
	};
};
