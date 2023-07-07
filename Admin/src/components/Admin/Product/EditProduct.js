import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductContext from "../../../context/product/ProductContext"
import Adminlayout from '../Adminlayout/Adminlayout'
import FileUpload from "./FileUpload";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


function EditProduct() {
  const navigate = useNavigate();
  const { prod_id } = useParams();
  const context = useContext(ProductContext);
  const { getProductsdetail, updateProduct, getCategory } = context;
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [cat_id, setCatid] = useState([])
  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        const prod = await getProductsdetail(prod_id);
        setProduct(prod)
        const cat = await getCategory();
        setCategory(cat)
        setCatid(prod.cat_id)

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])
  const handleClick = async () => {

    const data = await updateProduct(cat_id, product)
    if (data.Success !== undefined) {
      const alert = await swal("Update product", data.Success, "success");
      if (alert) { navigate("/product") }
      else { navigate("/product") }
    }
    if (data.Failed) { swal("Update product", data.Failed, "warning"); }
  }

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Adminlayout>
        <div className='br'></div>
        <h4><strong>Update Product</strong></h4>
        <hr />

        <div className="row">
          <div className="col-md-12 mb-3">
            <select name="cate_id" className="form-select" value={cat_id} onChange={(e) => setCatid(e.target.value)}>

              {category?.map(category => {
                return (
                  <option value={category._id} >{category.name}</option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" name="name" value={product.name} onChange={onChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="">slug</label>
            <input type="text" className="form-control" name="slug" value={product.slug} onChange={onChange} required />
          </div>
          <div className="col-md-12 md-3 ">
            <label htmlFor="">Description</label><br />
            <textarea name="description" rows="3" className="form-control" value={product.description} onChange={onChange} required ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="">Original Price</label>
            <input type="text" className="form-control" name="original_price" value={product.original_price} onChange={onChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="">Selling Price</label>
            <input type="text" className="form-control" name="selling_price" value={product.selling_price} onChange={onChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="">Quantity</label>
            <input type="text" className="form-control" name="quantity" value={product.quantity} onChange={onChange} required />
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="">Meta Title</label>
            <input type="text" className="form-control" name="meta_title" value={product.meta_title} onChange={onChange} required />
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="">Meta Description</label>
            <textarea name="meta_description" cols="162" rows="3" className="form-control" value={product.meta_description} onChange={onChange} required ></textarea>
          </div>
          <div className="col-md-12">
            <label>Upload Image </label>
            {product.images && (
              <FileUpload product={product} setProduct={setProduct} update_page={true} />
            )}
          </div>
          <div className="col-md-12 mt-5">
            <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
          </div>

        </div>

        {/* </div>
          </div> */}
      </Adminlayout>
    </>
  )
}

export default EditProduct
