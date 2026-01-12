import {redirect} from 'react-router-dom'
import { createUser} from '@services/users.api'
import { createSale } from '@services/sales.api';

import {
  addOptimisticUser,
  removeOptimisticUser
} from '@store/users.optimistic';

export const addSaleAction = async (_, formData) => {
  try {
    const data = Object.fromEntries(formData);

    await createSale({
      client: data.client,
      product: data.product,
      quantity: Number(data.quantity),
      price: Number(data.price)
    });

    return { success: true };
  } catch (err) {
    if (err.validationErrors) {
      return { errors: err.validationErrors };
    }

    return { error: 'Something went wrong' };
  }
};

export const addUserAction = async (_, formData) => {
  const data = Object.fromEntries(formData);

  const optimisticUser = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    role: data.role,
    optimistic: true
  };

  addOptimisticUser(optimisticUser);

  try {
    const user = await createUser(data);
    return { success: true, user };
  } catch (err) {
    removeOptimisticUser(optimisticUser.id);

    if (err.validationErrors) {
      return { errors: err.validationErrors };
    }

    return { error: 'Failed to create user' };
  }
};