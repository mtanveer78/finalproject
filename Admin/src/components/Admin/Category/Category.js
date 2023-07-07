import React, { useContext, useEffect } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import { DeleteForeverIcon,SquareEditOutlineIcon} from '@icons/material'
import Adminlayout from '../Adminlayout/Adminlayout';
import swal from 'sweetalert';


function Category() {
  const context = useContext(ProductContext);
  const { category, getCategory, deleteCategory } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    getCategory()
    /* eslint-disable-next-line */
  }, [])

  const handleClick = async (cat_id) => {
    const data = await deleteCategory(cat_id);
    if (data.Success !== undefined) {
      swal("Delete category", data.Success, "success");
    }
    if (data.Failed) { swal("Delete category", data.Failed, "warning"); }
  }
  return (
    <>
      <Adminlayout>
        <div className='br'></div>
      <h4 className="heading"> <strong>Category</strong></h4><hr/>
        <div className="row">
          {category?.map(category => {
            return (
              <div className="col-md-3" key={category._id} >
                <div className="product-grid">
                  <div className="product-image">
                    <Link to={`/updatecategory/${category._id}`} className="image">
                      <img className="pic-1" src={`http://localhost:5000/images/${category.images[0]}`} alt="" />
                      <img className="pic-2" src={`http://localhost:5000/images/${category.images[0]}`} alt="" />
                    </Link>
                    <Link onClick={() => handleClick(category._id)} > <span className="fas w3-large fa-trash icon" aria-hidden="true"><DeleteForeverIcon/></span> </Link>
                    <Link to={`/updatecategory/${category._id}`} > <span className="fas fa-edit icon" aria-hidden="true"><SquareEditOutlineIcon/></span> </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Adminlayout>
    </>
  )
}

export default Category
