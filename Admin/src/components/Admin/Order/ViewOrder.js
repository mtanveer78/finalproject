import React, { useContext, useEffect,useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { useParams, Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';


function ViewOrder() {
  const { order_id } = useParams()
  const context = useContext(ProductContext);
  const { vieworder, orderitem, getViewOrder,updateOrder } = context;
  const [status, setStatus] = useState();


  useEffect(() => {
    /* eslint-disable-next-line */
    // create arrow funtion of fatech data
    const fatechdata = async () => {

    const data =await getViewOrder(order_id)
    setStatus(data.status)
    }
    fatechdata()
    /* eslint-disable-next-line */
  }, [])

  function changeStatus(e) {
    setStatus(e.target.value);
  }

  function changeOrderStatus() {
    updateOrder(order_id,status)
    
  }
  return (
    <>
      <Adminlayout>

      <div className='br'></div>
            <h4> <strong>Order View</strong>
              <Link to="/order" className="btn btn-primary float-right ml-1">Back</Link>
            </h4>
<hr/>
         
            <div className="row">
              <div className="col-md-6 order-details">
                <h4>Shipping Details</h4>
                <hr />
                <label htmlFor="">Name</label>
                <div className="border">{`${vieworder.name}`}</div>
                {/* <label htmlFor="">Last Name</label>
                                <div className="border">{{ $orders->lname}}</div> */}
                <label htmlFor="">Email</label>
                <div className="border">{`${vieworder.email}`}</div>
                <label htmlFor="">Contact No.</label>
                <div className="border">{`${vieworder.contact}`}</div>
                <label htmlFor="">Shipping Address</label>
                <div className="border">
                  {`${vieworder.address}`},<br />
                  {`${vieworder.city}`},<br />
                  {`${vieworder.state}`},
                  {`${vieworder.country}`}
                </div>
                <label htmlFor="">Zip Code</label>
                <div className="border">{`${vieworder.zip}`}</div>
              </div>
              <div className="col-md-6">
                <h4>Order Details</h4>
                <hr />
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderitem?.map(item => {
                      return (
                        <tr key={item._id}>
                          <td id="simple-text">abc</td>
                          <td id="simple-text">{item.prod_qty}</td>
                          <td id="simple-text">{item.price}</td>
                          <td>
                            <img src={`http://localhost:5000/images/${item.image}`} width="50px" alt="ProductImage" />
                            
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="px-2">Grand Total: <span className="float-end">{vieworder.total_price}</span></h4>

                <div className="mt-3">
                  <label htmlFor="">Order Status</label>


                  <select className="form-select m-3" name="order_status" value={status} onChange={changeStatus}>
                    <option  selected={vieworder.status === "processing"} value="processing">processing</option>
                    <option  selected={vieworder.status === "shipped"} value="shipped">Shipped</option>
                    <option  selected={vieworder.status === "delivered"} value="delivered">delivered</option>

                  </select>
                  <button type="submit" className="btn btn-warning " onClick={changeOrderStatus}>Update</button>

                </div>
              </div>
            </div>

          {/* </div>
        </div> */}
      </Adminlayout>
    </>
  )
}

export default ViewOrder
