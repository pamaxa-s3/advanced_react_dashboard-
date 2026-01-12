import { useOptimistic, useState, useTransition } from "react";
import { useRevalidator } from "react-router-dom";

import { updateOrderStatus } from "@services/orders.api";

import styles from "./OrdersTable.module.css";

const OrdersTable = ({ initialData }) => {
    const revalidator = useRevalidator();
    const [isPending, startTransition] = useTransition();

    const [optimisticOrders, updateOptimistic] = useOptimistic(
        initialData,
        (state, { id, status }) =>
            state.map(order => (order.id === id ? { ...order, status } : order))
    );

    const [error, setError] = useState(null);

    const handleStatusChange = async (id, status) => {
        setError(null);

        updateOptimistic({ id, status });

        try {
            await updateOrderStatus(id, status);

            startTransition(() => {
                revalidator.revalidate();
            });
        } catch (e) {
            setError(e.message);

            // rollback
            updateOptimistic({
                id,
                status: initialData.find(o => o.id === id)?.status
            });
        }
    };

    return (
        <section className={styles.wrapper}>
            <h3>Recent Orders</h3>

            {error && <p className={styles.error}>{error}</p>}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {optimisticOrders.map(order => (
                        <tr
                            key={order.id}
                            className={isPending ? styles.pending : ""}
                        >
                            <td>{order.id}</td>
                            <td>{order.client}</td>
                            <td>
                                <select
                                    value={order.status}
                                    onChange={e =>
                                        handleStatusChange(
                                            order.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="new">New</option>
                                    <option value="processing">
                                        Processing
                                    </option>
                                    <option value="completed">Completed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default OrdersTable;
