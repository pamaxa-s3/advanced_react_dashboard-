import { useEffect, useState } from "react";
import { getUsers } from "@helpers";
import { UserItem } from "@components";
import "@styles/spinner.css";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        getUsers()
            .then(data => mounted && setUsers(data))
            .catch(err => mounted && setError(err.message));

        return () => {
            mounted = false;
        };
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!users) {
        return (
            <div>
                <h2>Users</h2>
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
};

export default Users;
