import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { useParams, Link } from "react-router-dom";
import Userlayout from '../Userlayout/Userlayout';
// import { useNavigate } from 'react-router-dom';
import "./StepProgressBar.css";
import Latest from "../Mainpage/Latest";
import swal from 'sweetalert';
import orderReturn from '../assets/images/order-return-icon.png';
import notReceiveIcon from '../assets/images/not-receive-icon.png';


function ViewOrder() {
  // const navigate = useNavigate();
  const { order_id } = useParams()
  const context = useContext(ProductContext);
  const [order, setOrder] = useState([]);
  const { getViewOrder, } = context;
  const [isOpen, setIsOpen] = useState(false);
  const [returnvalue, setReturnvalue] = useState('');
  const [productid, setProductid] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');



  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      const order = await getViewOrder(order_id)
      const craeteformattedDate = new Date(order[0]?.createdAt).toISOString().split("T")[0];
      setCreatedAt(craeteformattedDate)
      const updateformattedDate = new Date(order[0]?.updatedAt).toISOString().split("T")[0];
      setUpdatedAt(updateformattedDate)
      setOrder(order);
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const OnClick = (prod_id) => {
    setProductid(prod_id)
    setReturnvalue('')
    setIsOpen(!isOpen);
  }
  const selectValue = (value) => {
    setReturnvalue(value);
  };

  const handleSubmit = async () => {
    console.log(returnvalue, productid)
    swal('Your query submit', 'Done', 'success');
    togglePopup();
  };

  return (
    <>
      <Userlayout>
        {order[0]?.status === "delivered" ?
          <>
            {isOpen && (
              <div className="popup-box">
                <div className="box">
                  <span className="close-icon" onClick={togglePopup}>
                    x
                  </span>
                  <h3><strong>How can we help</strong></h3>
                  <hr />
                  <div className={`return-product ${returnvalue === 'return' ? 'div-selected' : ''}`} onClick={() => selectValue('return')}>
                    <span><img className="icon" src={orderReturn} alt="Return order Icon" /></span>
                    <label className="mb-2 return-detail" ><strong>I want to return the product</strong></label>
                    <br />
                    <label className="return-detail" >Select this if you have received your product but not satisfied with the purchase.</label>
                  </div>
                  <hr />
                  <div className={`not-receive ${returnvalue === 'not-receive' ? 'div-selected' : ''}`} onClick={() => selectValue('not-receive')}>
                    <span><img className="icon" src={notReceiveIcon} alt="Not Receive Icon" /></span>
                    <label className="mb-2 return-detail" ><strong>I didn't receive the product</strong></label>
                    <br />
                    <label className="return-detail" >Select this if you have not received the product.</label>
                  </div>
                  <button className="mt-2 Add-query-btn" onClick={handleSubmit}>
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </>
          : ""}
        <div className="container">
          <div className="order-header">Order Details</div>
          <div className="order-info" >
            <h4 className="float-right manage"><span className="light-color">Total:</span> Rs. {order[0]?.total_price}</h4>
            <h4 className="track-id" >Order #{order[0]?.tracking_no}</h4>
            <h5 className="order-date">Placed on {createdAt}</h5>
          </div>
          <div className="order-info" >
            <h4 className="pt-1 pl-1">{order[0]?.status} on {updatedAt}</h4>

            <div className="progresses">
              <div className="steps checked" >
                <span><i className="fa fa-check"></i></span>
              </div>
              Processing
              <span className={`line ${order[0]?.status === "shipped" || order[0]?.status === "delivered" ? "checked" : ""}`}></span>
              <div className={`steps ${order[0]?.status === "shipped" || order[0]?.status === "delivered" ? "checked" : ""}`}>
                <span><i className={`${order[0]?.status === "shipped" || order[0]?.status === "delivered" ? "fa fa-check" : ""}`}></i>
                  {order[0]?.status === "shipped" || order[0]?.status === "delivered" ? "" : 2}
                </span>
              </div>
              Shipped
              <span className={`line ${order[0]?.status === "delivered" ? "checked" : ""}`}></span>
              <div className={`steps ${order[0]?.status === "delivered" ? "checked" : ""}`}>
                <span className={`${order[0]?.status === "delivered" ? "fa fa-check" : ""}`}>
                  {order[0]?.status === "delivered" ? "" : 3}
                </span>
              </div>
              Delivered
            </div>

            {order[0]?.orderitems?.map((orderitem, index) => (
              <div className="item-info" key={index}>
                <hr />
                <div className="col-md-2 ">
                  <img className="prod-image" src={orderitem.prod_image.startsWith("https://") ? orderitem.prod_image : `http://localhost:5000/images/${orderitem.prod_image}`} alt="" />
                </div>
                <div className="col-md-5 prod-name">
                  <h4>{orderitem.prod_name}</h4>
                </div>
                <div className="col-md-2">
                  <h4><span className="light-color">Qty:</span> {orderitem.prod_qty}</h4>
                </div>
                {order[0]?.status === "delivered" ? <div className="col-md-3">
                  <Link onClick={() => OnClick(orderitem.prod_id)}><h4>Return</h4></Link>
                  <Link to={`/user/review/${orderitem._id}/${order[0]._id}`}><h4>Review</h4></Link>
                </div> : <div className="col-md-3"></div>}

              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="shipping-address">
                <h4 className="address-header">Shipping Address</h4>
                <div>
                  <span className="detail">{order[0]?.name}</span><br />
                  <span className="tag-in-line">WORK</span><span className="detail">{`${order[0]?.country}, ${order[0]?.state}, ${order[0]?.city}, ${order[0]?.address}`}</span><br />
                  <span className="mb-2 detail">{order[0]?.contact}</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 summary-container">
              <div className="summary-wrapper">
                <h4 className="summary-header">Total Summary</h4>
                <div className="summary-section">
                  <span className="detail">Subtotal:</span>
                  <span className="detail float-right">{order[0]?.total_price}</span>
                </div>
                <div className="summary-section">
                  <span className="detail">Delivery:</span>
                  <span className="detail float-right">200</span>
                </div>
                <hr />
                <div className="summary-section">
                  <span className="detail">Total:</span>
                  <span className="detail float-right">{order[0]?.total_price + 200}</span>
                </div>
              </div>
              <div className="payment-mode">
                <span className="detail">Paid by {order[0]?.payment_mode}</span>
              </div>
            </div>

          </div>
          <Latest />
        </div>
      </Userlayout>
    </>
  )
}

export default ViewOrder
