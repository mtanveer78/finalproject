import React, { useContext, useEffect } from 'react'
import ProductContext from "../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Adminlayout from './Adminlayout';
import moment from 'moment';

function Order() {
  const context = useContext(ProductContext);
  const { orders, getOrders } = context;
  const shippedorder = orders.filter(obj => {
    return obj.status === 'shipped';
  });

  useEffect(() => {
    /* eslint-disable-next-line */
    getOrders()
    // console.log(neworder.find(item => item.status === "pending"))
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>

        <div className="card">
          <div className="card-header bg-primary">
            <h4 className="text-white">Shipped Order
              <Link to="/orderhistory" className="btn btn-warning btn-sm float-right mx-3">Order History</Link>
              <Link to="/order" className="btn btn-warning btn-sm float-right">New Order</Link>
            </h4>
          </div>
          <div className="card-body">
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

                {shippedorder?.map(order => {
                  return (
                    <tr>
                      <td>{moment(order.date).utc().format('DD-MM-YY')}</td>
                      <td>{order.tracking_no}</td>
                      <td>{order.total_price}</td>
                      <td>{order.status}</td>
                      <td>
                        <Link to={`/vieworder/${order._id}`} className="btn btn-primary">view</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </Adminlayout>
    </>
  )
}

export default Order
