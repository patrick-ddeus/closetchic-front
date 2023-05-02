import React, { useState } from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    return (
        <div>
            <Header />
            <main>
                <h2>Orders</h2>
            </main>
        </div>
    );
};

export default OrdersPage;