import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/userContext';
import ClosetChicApi from '../../service/closetChic.api';
import { Container, Table } from './styles';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await ClosetChicApi.getOrders(token);
                setOrders(response.orders);
                console.log(response.orders);
            } catch (error) {
                console.error(error);
            }
        }
        fetchOrders();
    }, []);
    return (
        <Container>
            <Header />
            <main>
                <h2>Orders</h2>
                <Table>
                    <thead>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        {orders?.map((order) => (
                            <tr>
                                <td>{order.paidAt}</td>
                                <td>Completada</td>
                                <td>{order.totalPrice} para {order.orderItems.length}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </main>
        </Container>
    );
};

export default OrdersPage;