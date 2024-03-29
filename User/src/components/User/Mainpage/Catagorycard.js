import React, { forwardRef } from 'react';
import { Link } from "react-router-dom";
import "../assets/css/cards.css"

const Catagorycard = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} key={props.index} className={`col-xs-12 col-sm-6 col-md-2 mt-2 ${props.page === "bodypage" ? "category-card" : ""}`}>

        <div className={`${props.page === "bodypage" ? "" : "image-flip"}`} >
          <div className="mainflip flip-0">
            <div className="frontside">
              <Link to={`/category/${props.category._id}`}>
                <div className="card">
                  <div className="card-body text-center">
                    <p><img className=" img-fluid categoryimage" src={props.category.images[0].startsWith("https://") ? props.category.images[0] : `http://localhost:5000/images/${props.category.images[0]}`} alt="cardimage" /></p>
                    <h4 className="card-name">{props.category.name}</h4>

                  </div>
                </div>
              </Link>
            </div>
            {props.page === "bodypage" ? "" :
              <div className="backside">
                <Link to={`/category/${props.category._id}`}>
                  <div className="card">
                    <div className="card-body text-center mt-4">
                      <h4 className="card-title">{props.category.name}</h4>
                      <p className="card-text">{props.category.description}Lorem ipsum, dolor sit amet consectetur </p>

                    </div>
                  </div>
                </Link>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
})

export default Catagorycard
