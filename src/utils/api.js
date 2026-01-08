export const updateOrderStatus = (id, status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve({ id, status });
            } else {
                reject(new Error("Server error"));
            }
        }, 1000);
    });
};
