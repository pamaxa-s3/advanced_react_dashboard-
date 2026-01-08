import { useOptimistic, useState } from "react";

const initialUsers = [
    { id: 1, name: "Anna", active: true },
    { id: 2, name: "John", active: false }
];

const UsersTable = () => {
    const [users, setUsers] = useState(initialUsers);

    const [optimisticUsers, toggleOptimistic] = useOptimistic(
        users,
        (currentUsers, userId) =>
            currentUsers.map(user =>
                user.id === userId ? { ...user, active: !user.active } : user
            )
    );

    const toggleStatus = async id => {
        toggleOptimistic(id);

        try {
            await fakeApiToggle(id);
            setUsers(prev =>
                prev.map(user =>
                    user.id === id ? { ...user, active: !user.active } : user
                )
            );
        } catch {
            alert("Помилка сервера");
        }
    };

    return (
        <table>
            <tbody>
                {optimisticUsers.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>
                            <button onClick={() => toggleStatus(user.id)}>
                                {user.active ? "Active" : "Inactive"}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
