import {
    use,
    useDeferredValue,
    useOptimistic,
    useState,
    useId,
    useTransition
} from "react";
import { useRevalidator } from "react-router-dom";

import { getUsersResource } from "@services/users.resource";
import { updateUser } from "@services/users.api";

import styles from "./UsersTable.module.css";

const UsersTable = () => {
    const users = use(getUsersResource());

    const revalidator = useRevalidator();
    const [isPending, startTransition] = useTransition();

    const [search, setSearch] = useState("");
    const deferredSearch = useDeferredValue(search);

    const [optimisticUsers, updateOptimistic] = useOptimistic(
        users,
        (state, { id, changes }) =>
            state.map(u => (u.id === id ? { ...u, ...changes } : u))
    );

    const [undoStack, setUndoStack] = useState(null);
    const errorId = useId();

    const filteredUsers = optimisticUsers.filter(u =>
        u.name.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    const handleEdit = async (id, field, value) => {
        const prev = users.find(u => u.id === id);

        updateOptimistic({
            id,
            changes: { [field]: value }
        });

        setUndoStack({ id, prev });

        try {
            await updateUser(id, { [field]: value });

            startTransition(() => {
                revalidator.revalidate();
            });
        } catch (e) {
            updateOptimistic({
                id,
                changes: prev
            });
        }
    };

    const undo = () => {
        if (!undoStack) return;

        updateOptimistic({
            id: undoStack.id,
            changes: undoStack.prev
        });

        setUndoStack(null);
    };

    return (
        <section
            className={styles.wrapper}
            aria-busy={isPending}
            aria-describedby={errorId}
        >
            <h3>Users</h3>

            <input
                placeholder="Search user..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map(u => (
                        <tr key={u.id}>
                            <td>
                                <input
                                    defaultValue={u.name}
                                    onBlur={e =>
                                        handleEdit(u.id, "name", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    defaultValue={u.email}
                                    onBlur={e =>
                                        handleEdit(
                                            u.id,
                                            "email",
                                            e.target.value
                                        )
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {undoStack && (
                <div className={styles.undo}>
                    <span id={errorId}>Change applied optimistically</span>
                    <button onClick={undo}>Undo</button>
                </div>
            )}
        </section>
    );
};

export default UsersTable;
