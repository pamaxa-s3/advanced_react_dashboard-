import { useOptimistic, useState } from "react";
import { ordersData } from "@data";
import { updateOrderStatus } from "@utils";

const OrdersTable = () => {
    const [orders, setOrders] = useState(ordersData);

    const [optimisticOrders, updateOptimistic] = useOptimistic(
        orders,
        (state, { id, status }) =>
            state.map(order => (order.id === id ? { ...order, status } : order))
    );

    const handleStatusChange = async (id, status) => {
        updateOptimistic({ id, status });

        try {
            await updateOrderStatus(id, status);

            setOrders(prev =>
                prev.map(order =>
                    order.id === id ? { ...order, status } : order
                )
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <section>
            <h3>Orders</h3>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {optimisticOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.product}</td>
                            <td>{order.amount}</td>
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
                                    <option value="pending">Pending</option>
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
