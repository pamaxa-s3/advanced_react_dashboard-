let optimisticUsers = [];

export const addOptimisticUser = (user) => {
  optimisticUsers = [user, ...optimisticUsers];
};

export const removeOptimisticUser = (id) => {
  optimisticUsers = optimisticUsers.filter(
    (u) => u.id !== id
  );
};

export const getOptimisticUsers = () => optimisticUsers;