const API = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const updateUser = async (id, data) => {
  await new Promise((r) => setTimeout(r, 800));

  if (Math.random() < 0.2) {
    throw new Error('Update failed');
  }

  return { id, ...data };
};

export const createUser = async (data) => {
  await new Promise((r) => setTimeout(r, 1000));

  const errors = {};

  if (!data.name) errors.name = 'Name is required';
  if (!data.email) errors.email = 'Email is required';
  if (!data.email?.includes('@'))
    errors.email = 'Invalid email';

  // емуляція async перевірки email
  if (data.email === 'test@test.com') {
    errors.email = 'Email already exists';
  }

  if (Object.keys(errors).length > 0) {
    throw { validationErrors: errors };
  }

  // jsonplaceholder-style response
  return {
    id: Date.now(),
    ...data,
    active: true
  };
};