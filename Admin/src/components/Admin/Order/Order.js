import React, { useContext, useEffect } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';
import moment from 'moment';

function Order(props) {
  const context = useContext(ProductContext);
  const { orders, getOrders } = context;
  let order = [];
  if (props.page === "processing") {
    order = orders.filter(obj => {
      return obj.status === 'processing';
    });
  }
  else if (props.page === "shipped") {
    order = orders.filter(obj => {
      return obj.status === 'shipped';
    });
  }
  else if (props.page === "delivered") {
    order = orders.filter(obj => {
      return obj.status === 'delivered';
    });
  }

  useEffect(() => {
    /* eslint-disable-next-line */
    getOrders()
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>

      <div className='br'></div>
        <h4> 
          {props.page === "delivered" ?<strong>Order History</strong>:""}
          {props.page === "shipped" ?<strong>Shipped Order</strong>:""}
          {props.page === "processing" ?<strong>New Order</strong>:""}
        
          {props.page === "delivered" ? "" : (<strong>Order History</strong>, <Link to="/orderhistory" className="btn btn-primary  float-right ml-1">Order History</Link>)}
          {props.page === "shipped" ? "" : (<strong>Shipped Order</strong>, <Link to="/shippedorder" className="btn btn-primary float-right ml-1">Shipped Order</Link>)}
          {props.page === "processing" ? "" : (<strong>New Order</strong>, <Link to="/order" className="btn btn-primary float-right">New Order</Link>)}
        </h4>
        <hr/>
        {/* </div>
          <div className="card-body"> */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Tracking Number</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {order?.map(order => {
              return (
                <tr key={order._id}>
                
                  <td id="simple-text">{moment(order.date).utc().format('DD-MM-YY')}</td>
                  <td id="simple-text">{order.tracking_no}</td>
                  <td id="simple-text">{order.total_price}</td>
                  <td id="simple-text">{order.status}</td>
                  <td>
                    <Link to={`/vieworder/${order._id}`} className="btn btn-warning">view</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* </div>
        </div> */}

      </Adminlayout>
    </>
  )
}

export default Order
