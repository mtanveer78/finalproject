import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../../context/product/ProductContext";
import { useNavigate } from 'react-router-dom'
import Adminlayout from "./Adminlayout";
// import { Link } from "react-router-dom";


function Addproduct() {

  const context = useContext(ProductContext);
  const { category, getCategory, Insertproduct } = context;
  const [product, setProduct] = useState({ name: "", slug: "", original_price: "", selling_price: "", quantity: "", description: "", meta_description: "", meta_title: "", image: "" })
  const [image, setImage] = useState();
  const [catid, setcatid] = useState(null);
  let history = useNavigate();

  const handleClick = () => {
    // e.preventDefault();

    if (product.value && image.value) {
      console.log(catid, product.name, product.slug, product.original_price, product.selling_price, product.quantity, product.description, product.meta_description, image)
      Insertproduct(catid, product.name, product.slug, product.original_price, product.selling_price, product.quantity, product.description, product.meta_description, image);
      // setProduct({ name: "", slug: "",original_price:"",selling_price:"",quantity:"",description: "", meta_description: "", meta_title: "", image: "" })
      history("/product");
    }
  }
  function handleChange(e) {
    // console.log(e.target.files[0].name);
    setImage("assets/images/products/" + e.target.files[0].name);
    // console.log(image)
    console.log(catid)
  }

  const onChange = (e) => {
    // console.log(e.target.value )
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    /* eslint-disable-next-line */
    getCategory()
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>
        <div className="card">
          <div className="card-header">
            <h1>Add Product</h1>
          </div>
          <div className="card-body">
            <form action={handleClick} method="get" name="frm-billing">

              <div className="row">
                <div className="col-md-12 mb-3">
                  <select name="cate_id" className="form-select" onChange={(e) => setcatid(e.target.value)}>
                    {/* <option >Select a Category</option> */}
                    {category?.map(category => {
                      return (
                        <option value={category._id} >{category.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" name="name" onChange={onChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">slug</label>
                  <input type="text" className="form-control" name="slug" onChange={onChange} required />
                </div>
                <div className="col-md-12 md-3 ">
                  <label htmlFor="">Description</label><br />
                  <textarea name="description" rows="3" className="form-control" onChange={onChange} required ></textarea>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="">Original Price</label>
                  <input type="text" className="form-control" name="original_price" onChange={onChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">Selling Price</label>
                  <input type="text" className="form-control" name="selling_price" onChange={onChange} required />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="">Quantity</label>
                  <input type="text" className="form-control" name="quantity" onChange={onChange} required />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="">Meta Title</label>
                  <input type="text" className="form-control" name="meta_title" onChange={onChange} required />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="">Meta Description</label>
                  <textarea name="meta_description" cols="162" rows="3" className="form-control" onChange={onChange} required ></textarea>
                </div>
                <div className="col-md-12">
                  <input type="file" name="image" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </Adminlayout>
    </>
  )
}

export default Addproduct
