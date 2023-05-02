import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/userContext';
import ClosetChicApi from '../../service/closetChic.api';
import { Container, Table } from './styles';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await ClosetChicApi.getOrders(token);
                setOrders(response.orders);
            } catch (error) {
                console.error(error);
            }
        }
        fetchOrders();
    }, [token]);

    return (
        <>
            <Header />
            <Container>
                <main>
                    <h2>Meus Pedidos</h2>
                    <Table>
                        <thead>
                            <th>Pedido</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th colSpan={2}>Ações</th>
                        </thead>
                        <tbody>
                            {orders?.map((order) => (
                                <tr>
                                    <td>#{order._id}</td>
                                    <td>{dayjs(order.paidAt).locale("pt-br").format("LLLL")}</td>
                                    <td>Completa</td>
                                    <td>{order.totalPrice.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })} para {order.orderItems.length} item(s)</td>
                                    <td colSpan={2} className="button-td">
                                        <button>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </main>
            </Container>
        </>
    );
};

export default OrdersPage;