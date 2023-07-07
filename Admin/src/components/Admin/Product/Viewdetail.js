import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductContext from "../../../context/product/ProductContext"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Adminlayout from "../Adminlayout/Adminlayout";

function Viewdetail() {
  const { prod_id } = useParams()
  const context = useContext(ProductContext);
  const { getProductsdetail } = context;
  const [product, setProduct] = useState()
  const [images, setImages] = useState([])

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        const prod = await getProductsdetail(prod_id)
        setProduct(prod)
        const newImages = prod.images.map((image) => ({
          original: `http://localhost:5000/images/${image}`,
          // thumbnail: `http://localhost:5000/images/${image}`,
        }));
        setImages((prevImages) => {
          // Filter out any images that already exist in the state
          const filteredImages = newImages.filter(
            (image) => !prevImages.some((prevImage) => prevImage.original === image.original)
          );
          // Concatenate the filtered images with the existing state
          return [...prevImages, ...filteredImages];
        });

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])

  return (
    <>
      <Adminlayout>
        <div className='br'></div>
        <h4 > <strong>Product Detail</strong></h4><hr />
        
        <div className="row">
          <div className="col-md-4 image-coursel">
            <ImageGallery items={images} showPlayButton={false} />
          </div>
          <div className="detail">
            
            <label className=" label-tag">Name:</label>
            <label className="label-value">{product?.name}</label>
            <label className=" label-tag">Orignal Price:</label>
            <label className="label-value">{product?.original_price}</label>
            
            <label className=" label-tag">Category:</label>
            <label className="label-value">{product?.cat_id}</label>
            <label className=" label-tag">Selling Price:</label>
            <label className="label-value">{product?.selling_price}</label>

            <label className=" label-tag">Description:</label>
            <label className="label-value">{product?.description}</label>
            <label className=" label-tag">Quantity:</label>
            <label className="label-value">{product?.quantity}</label>
          </div>
          <div className="detail-description">
            Detail Description
            <div className="description-value">{product?.meta_description}</div>
          </div>
        </div>
       
      </Adminlayout>
    </>
  )
}

export default Viewdetail
