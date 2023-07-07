import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import { DeleteForeverIcon, SquareEditOutlineIcon } from '@icons/material'
import Adminlayout from '../Adminlayout/Adminlayout';
// import Popup from './Popup';
import swal from 'sweetalert';

function Flashsale() {
  const context = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [flash, setFlash] = useState({ id: '', name: '', sale_date: '' });
  // const [flashprod, setFlashprod] = useState([]);
  let { flashsale, getFlashproduct, updateFlashsale, deleteFlashsale } = context;
  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        await getFlashproduct();
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const OnClick = (id, sale_date, name) => {
    setFlash({ id: id, name: name, sale_date: sale_date })
    setIsOpen(!isOpen);
  }
  const handelSubmit = async () => {
    if (flash.sale_date === '') {
      swal("Add flash sale", "Please select date", "warning");
      return;
    }
    else {
      const data = await updateFlashsale(flash.id, flash.sale_date);
      if (data.Failed) { swal("Update flash sale", data.Failed, "warning"); }
      else if (data.error) { swal("Update flash sale", data.error, "warning"); }
      else if (data.Success) {
        swal("Update flash sale", data.Success, "success");
        togglePopup();
      }
      else { swal("Update flash sale", "Some internal error", "warning"); }

    }
  }
  const Setvalue = (e) => {
    setFlash({ ...flash, [e.target.name]: e.target.value })
  }

  const handleClick = async (id) => {
    const data = await deleteFlashsale(id);
    if (data.Success) {
      swal("Delete product", data.Success, "success");
    }
    else if (data.Failed) { swal("Delete product", data.Failed, "warning"); }
    else { swal("Delete product", "Some internal error", "warning"); }
  }
  return (
    <>
      <Adminlayout>

        {isOpen && <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={togglePopup}>x</span>
            <h3>{flash.name}</h3><hr />
            <label>Date for Flash sale</label><br />
            <div className="sale">
              <input type="text" disabled name="sale_date" className="sale-date" value={flash.sale_date} />
              <input type="date" name="sale_date" className="calender" onChange={Setvalue} />
            </div>
            <button className="Add-flash-btn" onClick={handelSubmit}>Add</button>
          </div>
        </div>}

        <div className='br'></div>
        <h4 > <strong>Flash Sale Product</strong></h4><hr />
        <div className="row">
          {flashsale?.map(product => {
            return (
              <div className="col-md-3" key={product.prod_id} >
                <div className="product-grid">
                  <div className="product-image">
                    <Link to={`/viewproductdetail/${product.product_info[0]._id}`} className="image">
                      <img className="pic-1" src={`http://localhost:5000/images/${product.product_info[0].images[0]}`} alt="" />
                      <img className="pic-2" src={`http://localhost:5000/images/${product.product_info[0].images[0]}`} alt="" />
                    </Link>
                    <Link onClick={() => handleClick(product._id)} > <span className="fa w3-large fa-trash icon" aria-hidden="true"><DeleteForeverIcon /></span> </Link>
                    <Link type="button" value="Click to Open Popup" onClick={() => OnClick(product._id, product.sale_date, product.product_info[0].name)}>
                      <span className="fas fa-edit icon" aria-hidden="true"><SquareEditOutlineIcon /></span>
                    </Link>
                    <label className="sale-date-label">{product.sale_date} </label>
                    <span className="product-discount-label">{`-${100-parseInt(product.product_info[0].selling_price/product.product_info[0].original_price*100)}%`}</span>
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

export default Flashsale
