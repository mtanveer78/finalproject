
import React, { useContext, useState } from "react";
import ProductContext from "../../../context/product/ProductContext"
import { useNavigate } from 'react-router-dom'
import Adminlayout from "../Adminlayout/Adminlayout";
import FileUpload from "./FileUpload";


function Addcategory() {
  const context = useContext(ProductContext);
  const { Addcategory } = context;
  const [category, setCategory] = useState({ name: "", slug: "", description: "", meta_description: "", meta_title: "", images: [] })
  let history = useNavigate();

  const handleClick = () => {
    // e.preventDefault();

    if (Object.values(category).every(value => value !== "") && category.images.length > 0) {
      const formData = new FormData()
      for (let i = 0; i < category.images.length; i++) {
        formData.append('images', category.images[i].file)
      }
      formData.append('name', category.name)
      formData.append('slug', category.slug)
      formData.append('description', category.description)
      formData.append('meta_description', category.meta_description)
      formData.append('meta_title', category.meta_title)

      Addcategory(formData);
      history("/category");

    }
    else {
      alert("Please fill all fields")
    }
  }


  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })

  }

  return (
    <>
      <Adminlayout>
        <div className='br'></div>
        <h4><strong>Add Category</strong></h4>
        <hr />
        <form>
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
              <label htmlFor="">Upload image</label>
              <FileUpload category={category} setCategory={setCategory} update_page={false} />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn" onClick={handleClick}>Submit</button>
            </div>

          </div>
        </form>
        {/* </div>
        </div> */}
      </Adminlayout>
    </>
  )
}
export default Addcategory
