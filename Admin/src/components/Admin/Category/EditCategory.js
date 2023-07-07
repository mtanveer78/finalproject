import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductContext from "../../../context/product/ProductContext"
import Adminlayout from '../Adminlayout/Adminlayout'
import FileUpload from "./FileUpload";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function EditCategory() {
  const navigate = useNavigate();
  const { cat_id } = useParams();
  const context = useContext(ProductContext);
  const { getSpecificCategory, updateCategory } = context;
  const [category, setCategory] = useState([])

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        const data = await getSpecificCategory(cat_id);
        setCategory(data)


      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])
  const handleClick = async (e) => {
    console.log(category.value)
    e.preventDefault();
    const data = await updateCategory(category)
    if (data.Success !== undefined) {
      const alert = await swal("Update Category", data.Success, "success");
      if (alert) { navigate("/category") }
      else { navigate("/category") }
    }
    if (data.Failed) { swal("Update Category", data.Failed, "warning"); }
  }

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Adminlayout>
      <div className='br'></div>
 
          <h4><strong>Update Category</strong></h4>
        <hr />
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="" >Name</label>
                  <input type="text" className="form-control" name="name" value={category.name} onChange={onChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">slug</label>
                  <input type="text" className="form-control" name="slug" value={category.slug} onChange={onChange} required />
                </div>
                <div className="col-md-12 row-md-2 md-3 ">
                  <label htmlFor="">Description</label><br />

                  <textarea name="description" cols="162" rows="3" className="form-control" value={category.description} onChange={onChange} required ></textarea>
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="">Meta Title</label>
                  <input type="text" className="form-control" name="meta_title" value={category.meta_title} onChange={onChange} required />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="">Meta Description</label>
                  <textarea name="meta_description" cols="162" rows="3" className="form-control" value={category.meta_description} onChange={onChange} required ></textarea>
                </div>
                <div className="col-md-12">
                  <label>Upload Image </label>
                  {category.images && (
                    <FileUpload category={category} setCategory={setCategory} update_page={true} />
                  )}
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn mt-5" onClick={handleClick}>Submit</button>
                </div>

              </div>

            </form>
          {/* </div>
        </div> */}

      </Adminlayout>
    </>
  )
}

export default EditCategory
