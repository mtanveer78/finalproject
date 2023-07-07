import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import { DeleteForeverIcon, SquareEditOutlineIcon } from '@icons/material'
import Adminlayout from '../Adminlayout/Adminlayout';
// import Popup from './Popup';
import swal from 'sweetalert';


function Product() {

  const [isOpen, setIsOpen] = useState(false);
  const [flash, setFlash] = useState({ prod_id: '', name:'', sale_date: ''});
  const context = useContext(ProductContext);
  const {products, getProducts, deleteProduct, AddtoFlashsale } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    const fatchdata = async() => {
     await getProducts();
     
    }
    fatchdata()
    /* eslint-disable-next-line */
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const OnClick = (prod_id, name) => {
    setFlash({ prod_id: prod_id, name:name, sale_date: '' })
    setIsOpen(!isOpen);
  }
  const handleSubmit = async() => {
    if(flash.sale_date === ''){
      swal("Add flash sale", "Please select date", "warning");
      return;
    }
    else{
      const data = await AddtoFlashsale(flash.prod_id, flash.sale_date);
      if (data.Failed) { swal("Add flash sale", data.Failed, "warning"); }
      else if (data.error) { swal("Add flash sale", data.error, "warning"); }
      else{
      swal("Add flash sale", "Product added to flash sale", "success");
      togglePopup();}
    }
  }
  const Setvalue = (e) => {
    setFlash({ ...flash, [e.target.name]: e.target.value })
  }



  const handleClick = async (prod_id) => {
    
    const data = await deleteProduct(prod_id);
    console.log(data);
    if (data.Success !== undefined) {
      swal("Delete product", data.Success, "success");
    }
    if (data.Failed) { swal("Delete product", data.Failed, "warning"); }
  }
  return (
    <>
      <Adminlayout>


        {isOpen && <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>x</span>
            <h3>{flash.name}</h3><hr />
            <label>Date for Flash sale</label><br/>
            <div className="sale">
            <input type="text" disabled name="sale_date" className="sale-date" value={flash.sale_date} />
            <input type="date" name="sale_date" className="calender" onChange={Setvalue} />
            </div>
            <button className="Add-flash-btn" onClick={handleSubmit}>Add</button>
          </div>
        </div>}




        <div className='br'></div>
        <h4 > <strong>Product</strong></h4><hr />
        <div className="row">
          {products?.map(product => {
            return (
              <div className="col-md-3" key={product._id} >
                <div className="product-grid">
                  <div className="product-image">
                    <Link to={`/viewproductdetail/${product._id}`} className="image">
                      <img className="pic-1" src={`http://localhost:5000/images/${product.images[0]}`} alt="" />
                      <img className="pic-2" src={`http://localhost:5000/images/${product.images[0]}`} alt="" />
                    </Link>
                    <Link onClick={() => handleClick(product._id)} > <span className="fa w3-large fa-trash icon" aria-hidden="true"><DeleteForeverIcon /></span> </Link>
                    <Link to={`/updateproduct/${product._id}`} > <span className="fas fa-edit icon" aria-hidden="true"><SquareEditOutlineIcon /></span> </Link>
                    <Link type="button" value="Click to Open Popup" onClick={() => OnClick(product._id,product.name)} > <span className="" aria-hidden="true"><img className="flash-sale" src="assets/images/flash-sale.png" alt="" /></span> </Link>
                    <span className="product-discount-label">{`-${100-parseInt(product.selling_price/product.original_price*100)}%`}</span>
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

export default Product
