
import React, { useContext, useState } from "react";
import ProductContext from "../../context/product/ProductContext"
import Adminlayout from "./Adminlayout";
// import { Link } from "react-router-dom";


function Addcategory() {
  const context = useContext(ProductContext);
  const { Addcategory } = context;
  const [category, setCategory] = useState({ name: "", slug: "", description: "", meta_description: "", meta_title: "", image: "" })
  const [image, setImage] = useState();
  const handleClick = () => {
    // e.preventDefault();

    if (category.value && image.value) {
      // console.log(category.name, category.slug, category.description, category.meta_description, image)
      Addcategory(category.name, category.slug, category.description, category.meta_description, image);
      setCategory({ name: "", slug: "", description: "", meta_description: "", meta_title: "", image: "" })
      // console.log(image)
    }
  }
  const handleChange = (e) => {
    // console.log(e.target.files[0].name);
    setImage("assets/images/products/" + e.target.files[0].name);
    // console.log(image)
  }

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })

  }

  return (
    <>
      <Adminlayout>
        <div className="card">
          <div className="card-header">

            <h1>Add Category</h1>
          </div>
          <div className="card-body">
            <form action={handleClick} method="get" name="frm-billing">

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="" >Name</label>
                  <input type="text" className="form-control" name="name" onChange={onChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">slug</label>
                  <input type="text" className="form-control" name="slug" onChange={onChange} required />
                </div>
                <div className="col-md-12 row-md-2 md-3 ">
                  <label htmlFor="">Description</label><br />

                  <textarea name="description" cols="162" rows="3" className="form-control" onChange={onChange} required ></textarea>
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
                  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </Adminlayout>
    </>
  )
}
export default Addcategory
