import React, { useContext, useEffect } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Latest from "../Mainpage/Latest";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Userlayout from '../Userlayout/Userlayout';
import { useCookies } from 'react-cookie';

const Wishlist = () => {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  const [cookies, setCookie] = useCookies(['token']);
  const { products, wishlist, fetchWishlist, DeleteWishlist, AddtoCartproduct, getUserdetail } = context;
  let product = []
  // const [quantity, setquantity] = useState(1)

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
        if (cookies.token) {
          const data = await getUserdetail()
          if (data.error !== undefined) { navigate("/login") }
          await fetchWishlist()
        }
        else { 
          console.log(cookies.token)
          navigate("/login"); 
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])

  const AddtoCart = async (prod_id) => {
    const qty = 1;
    const data = await AddtoCartproduct(prod_id, qty)
    if (data.Success !== undefined) {
      swal("Product Added", data.Success, "success");
    }
    else {
      swal("Error", data.Failed, "warning");
    }
  }


  const Deleteprod = (prod_id) => {
    
    DeleteWishlist(prod_id);
  }
  // if (wishlist.length === 0) return <span>loading..</span>
  return (
    <>
      <Userlayout>
        <main id="main" className="main-site">

          <div className="container">

            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link"><Link to="/" className="link">home</Link></li>
                <li className="item-link"><span>login</span></li>
              </ul>
            </div>
            <div className=" main-content-area">

              <div className="wrap-iten-in-cart">
                <h3 className="box-title">Products Name</h3>
                <ul className="products-cart">

                  {wishlist?.length > 0 ? (
                    wishlist?.map(wishlistitem => {
                      return (
                        product = products.find(item => item._id === wishlistitem.prod_id),
                        
                        <li className="pr-cart-item">
                          <div className="product-image">
                            <Link to={`/product/${product._id}`}><figure className="wishlist-image"><img  src={product.images[0].startsWith("https://") ? product.images[0] : `http://localhost:5000/images/${product.images[0]}`} alt="" /></figure></Link>
                          </div>
                          <div className="product-name ">
                            <Link className="link-to-product" to={`/product/${product._id}`}>{product.name} </Link><br />
                            <li class="fa fa-star star"></li>
                            <li class="fa fa-star star"></li>
                            <li class="fa fa-star star"></li>
                            <li class="fa fa-star star"></li>
                            <li class="fa fa-star star"></li>

                          </div>
                          
                          <div className="price-field product-price"><span className="cut-price">{product.original_price}</span><p className="price mt-1">Rs.{product.selling_price}</p></div>

                          <div className="price-field" > <b className={product.quantity > 0 ? "" : "text-danger"}>{product.quantity > 0 ? "In Stock" : "Out of stock"}</b></div>

                          <div className="wrap-butons">
                            <button disabled={product.quantity <= 0} onClick={() => AddtoCart(wishlistitem.prod_id)} className="btn btn-primary add-to-cart mt-4" >Add to Cart</button>
                          </div>

                          <div className="delete">
                            <Link onClick={() => Deleteprod(wishlistitem.prod_id)} className="btn btn-delete" title="">
                              <span>Delete from your wishlist</span>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </Link>
                          </div>
                          
                        </li>
                        
                      );
                    })) : (<h3 className='text-center'>Wishlist is Empty</h3>)}

                </ul>
              </div>

              <Latest />

            </div>
          </div>

        </main>
      </Userlayout>
    </>
  )
}

export default Wishlist;