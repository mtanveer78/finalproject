import React, { useContext, useEffect, useState } from 'react'
import Userlayout from '../Userlayout/Userlayout';
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductContext from "../../../context/product/ProductContext"
import FileUpload from "./FileUpload"
import swal from 'sweetalert';
import axios from "axios";


function StarRating({ count, value,
  inactiveColor = '#ddd',
  size = 24,
  activeColor = '#f00', onChange }) {

  // short trick 
  const stars = Array.from({ length: count }, () => '🟊')

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}>{s}</span>
        )
      })}

    </div>
  )
}


function Review() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const { item_id, order_id } = useParams()
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  const { getOrderitem, Addreview, fetchReview } = context;
  const [rating, setRating] = useState(3);
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState({ review: "", images: [] })


  useEffect(() => {
    /* eslint-disable-next-line */
    const fatchdata = async () => {
      const order = await getOrderitem(item_id, order_id);
      const checkreview = await fetchReview(item_id);
      if (order[0]?.status === "delivered") {
        setOrder(order)
      }
      else {
        navigate("/order")
      }


    }
    fatchdata()
    /* eslint-disable-next-line */
  }, []);

  const onChange = (e) => {

    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const handleChange = (value) => {
    setRating(value);
  }
  const handleClick = async () => {
    // Get Review sentiment
    // API Call 
    try {

      const response = await axios.post('http://127.0.0.1:4000/predict', {
        review: product.review,
      });

      const reviewType = await response.data;
      const formData = new FormData()
      for (let i = 0; i < product.images.length; i++) {
        formData.append('images', product.images[i].file)
      }
      formData.append('prod_id', order[0]?.orderitem.prod_id)
      formData.append('user_rate', rating)
      formData.append('user_review', product.review)
      formData.append('sentiment', reviewType)
      console.log(formData)
      const data = await Addreview(formData);
      console.log(data.success);
      if (data.success) {
        swal("Review Added", data.success, "success");
        navigate("/order")
      }
      else if (data.failed) {
        swal("Error", data.failed, "warning");
      }
      else {
        swal("Error", "Something went wrong", "warning");
      }


    } catch (error) {
      console.log('Error:', error);
    }




  }

  return (
    <>
      <Userlayout>

        <div className="container">
          <div className="review-header">Write Review</div>

          {order.length > 0 ?
            <div className="review-wrapper pt-1 pl-1">

              <h4 className="">Deliverd on {order[0]?.date}</h4>
              <h5 className="" >Rate and Review purchased product.</h5>
              <div className="detail-wrapper">
                <img className="prod-image" src={order[0]?.orderitem.prod_image.startsWith("https://") ? order[0]?.orderitem.prod_image : `http://localhost:5000/images/${order[0]?.orderitem.prod_image}`} alt="" />
                <span className="prod-name ml-2">{order[0]?.orderitem.prod_name}</span>

                <Link className="product-rate">
                  <StarRating
                    count={5}
                    size={40}
                    value={rating}
                    activeColor={'rgb(244, 169, 30)'}
                    inactiveColor={'#ddd'}
                    onChange={handleChange} />
                </Link>
              </div>
              <div className="review-form">
                Please share your product experience: Was the product as described? What is the quality like? What did you like or dislike about the product?
                <textarea name="review" cols="162" rows="3" className="review-textarea" placeholder="Write your review here..." onChange={onChange} required ></textarea>
                <br />
                <label htmlFor="" className="mt-3">Upload image</label>
                <FileUpload product={product} setProduct={setProduct} />
              </div>
              <div className="review-btn mt-5">
                <button className="btn btn-primary mb-3" onClick={() => handleClick()}>Submit</button>
              </div>
            </div> :
            <div className="no-order pt-1 pl-1">
              <h2 className="">No Order Found to Review</h2>
            </div>}
        </div>
      </Userlayout>
    </>
  )
}

export default Review
