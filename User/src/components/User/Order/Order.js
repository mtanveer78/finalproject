import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Userlayout from '../Userlayout/Userlayout';


function Order(props) {
  const context = useContext(ProductContext);
  // const [order, setOrder] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const { getViewUserOrder } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      const order = await getViewUserOrder()
      // setOrder(order)
      // const currentOrders = order.filter(obj => {
      //   return props.condition === "currentorder" ? obj.status === 'pending' || obj.status === 'shipped' : obj.status === 'completed'
      // });
      setCurrentOrders(order)

    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])
  return (
    <div>
      <Userlayout>
        <div className="container">
          <div className="order-header">My Order</div>

          {currentOrders?.map((order, index) => {
            return (
              <div className="order-info" key={index}>
                <Link to={`/order/vieworder/${order._id}`} className="float-right manage">Manage</Link>
                <Link to={`/order/vieworder/${order._id}`}><h4 className="track-id" >Order #{order.tracking_no}</h4></Link>
                <h5 className="order-date">Placed on {order.date}</h5>
                {order.orderitems?.map((orderitem, index) => (
                  <div className="item-info" key={index}>
                    <hr />
                    <div className="col-md-2 ">
                      <img className="prod-image" src={`http://localhost:5000/images/${orderitem.prod_image}`} alt="" />
                    </div>
                    <div className="col-md-4 prod-name">
                      <h4>{orderitem.prod_name}</h4>
                    </div>
                    <div className="col-md-1">
                      <h4><span className="light-color">Qty:</span> {orderitem.prod_qty}</h4>
                    </div>
                    <div className="col-md-2 prod-status">
                      <h4 className="order-staus">{order.status}</h4>
                    </div>
                    <div className="col-md-3 status-date">
                      <h4>Delivered on 04 Jun 2023</h4>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Userlayout>
    </div>
  )
}

export default Order
