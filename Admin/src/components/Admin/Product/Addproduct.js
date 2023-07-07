import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../../../context/product/ProductContext";
import { useNavigate } from 'react-router-dom'
import Adminlayout from "../Adminlayout/Adminlayout";
import FileUpload from "./FileUpload";
// import { Link } from "react-router-dom";


function Addproduct() {

  const context = useContext(ProductContext);
  const { getCategory, Insertproduct } = context;
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState({ catid: "", name: "", slug: "", original_price: "", selling_price: "", quantity: "", description: "", meta_description: "", meta_title: "", images: [] })
  let history = useNavigate();

  const handleClick = () => {
    // e.preventDefault();

    if (Object.values(product).every(value => value !== "") && product.images.length > 0) {
      const formData = new FormData()
      for (let i = 0; i < product.images.length; i++) {
        formData.append('images', product.images[i].file)
      }
      formData.append('catid', product.catid)
      formData.append('name', product.name)
      formData.append('slug', product.slug)
      formData.append('original_price', product.original_price)
      formData.append('selling_price', product.selling_price)
      formData.append('quantity', product.quantity)
      formData.append('description', product.description)
      formData.append('meta_description', product.meta_description)
      formData.append('meta_title', product.meta_title)

      Insertproduct(formData);
      history("/product");
    }
    else {
      alert("Please fill all fields")
    }
  }
  // function handleChange(e) {
  //   // console.log(e.target.files[0].name);
  //   setImage("assets/images/products/" + e.target.files[0].name);
  //   // console.log(image)
  //   console.log(catid)
  // }

  const onChange = (e) => {
    // console.log(e.target.value )
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        const cat = await getCategory()
        setCategory(cat)
        if (cat.length >= 1) { setProduct({ ...product, catid: cat[0]._id }) }
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
        <h4><strong>Add Product</strong></h4>
        <hr />
        <div className="row">
          <div className="col-md-12 mb-3">
            <select name="catid" className="form-select" onChange={onChange}>
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
            <label htmlFor="">Upload image</label>
            <FileUpload product={product} setProduct={setProduct} />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn mt-5" onClick={handleClick} >Submit</button>
          </div>

        </div>

        {/* </div>
        </div> */}
      </Adminlayout>
    </>
  )
}

export default Addproduct
