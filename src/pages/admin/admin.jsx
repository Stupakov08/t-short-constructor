import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOrders } from '../../redux/orders/orders.actions'
import { getOrders, pickUpOrder, finishOrder } from '../../firebase/firebase.utils'
import CustomButton from '../../components/custom-button/custom-button.component'
import {
    Content, AdminArea,
    OrderList, OrderItem, OrderImage, OrderColumn, VerticalFlex, OrderHeaderItem
} from './admin.styled';
import Header from '../../components/header/header.component';
import { setPickUpOrder, setFinishOrder } from '../../redux/orders/orders.actions'

const Admin = ({ setOrders, orders, setPickUpOrder, setFinishOrder }) => {
    useEffect(() => {
        getOrders().then(res => {
            const orders = res.docs.map(snap => ({ id: snap.id, ...snap.data() }));
            setOrders(orders);
        });
    }, []);

    const pickUpHandle = (order) => () => {
        if (order.status === "pickedup") return;
        pickUpOrder(order.id);
        setPickUpOrder(order);
    }
    const finishOrderHandle = (order) => () => {
        if (order.status === "finished") return;
        finishOrder(order.id);
        setFinishOrder(order);
    }
    return (
        <>
            <Header></Header>
            <Content>
                <AdminArea>
                    <OrderHeaderItem>
                        <OrderImage>
                            Image
                        </OrderImage>
                        <OrderColumn>
                            Id
                        </OrderColumn>
                        <OrderColumn>
                            EMail
                        </OrderColumn>
                        <OrderColumn>
                            Name
                        </OrderColumn>
                        <OrderColumn>
                            Color
                        </OrderColumn>
                        <OrderColumn>
                            Print
                        </OrderColumn>
                        <OrderColumn>
                            Time
                        </OrderColumn>
                        <OrderColumn>

                        </OrderColumn>
                    </OrderHeaderItem>
                    <OrderList>
                        {
                            orders && orders.map(order => (
                                <OrderItem key={order.id} semiTransparent={order.status === "finished"}>
                                    <OrderImage url={order.screenshot}>
                                    </OrderImage>
                                    <OrderColumn>
                                        {order.id}
                                    </OrderColumn>
                                    <OrderColumn>
                                        {order.user.email}
                                    </OrderColumn>
                                    <OrderColumn>
                                        {order.user.displayName}
                                    </OrderColumn>
                                    <OrderColumn>
                                        {order.activeColor.url}
                                    </OrderColumn>
                                    <OrderColumn>
                                        {order.activePrint.url}
                                    </OrderColumn>
                                    <OrderColumn>
                                        {(() => {
                                            let date = new Date(order.time)
                                            return date.toUTCString();
                                        })()}
                                    </OrderColumn>
                                    <VerticalFlex>
                                        <CustomButton small onClick={pickUpHandle(order)} disabled={order.status === "pickedup" || order.status === "finished"}>
                                            Picked up
                                        </CustomButton>
                                        <CustomButton small onClick={finishOrderHandle(order)} disabled={order.status === "finished"}>
                                            Given away
                                    </CustomButton>
                                    </VerticalFlex>
                                </OrderItem>
                            ))
                        }
                    </OrderList>
                </AdminArea>
            </Content>
        </>
    )
}

const mapStateToProps = props => ({
    orders: props.orders.orders
});
const mapDispatchToProps = dispatch => ({
    setOrders: orders => { dispatch(setOrders(orders)) },
    setPickUpOrder: order => { dispatch(setPickUpOrder(order)) },
    setFinishOrder: order => { dispatch(setFinishOrder(order)) }
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);