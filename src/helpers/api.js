let cache = null;

const delay = ms => new Promise(res => setTimeout(res, ms));

export const getUsers = async () => {
    
    if (cache) {
        return cache;
    }

await delay(2000);

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Response("Failed to fetch users", {
            status: res.status
        });
    }

    cache = await res.json();
    return cache;
};

export const removeUser = async id => {
    cache = cache.filter(user => user.id !== Number(id));
};
