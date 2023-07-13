import ProductContext from "./ProductContext";
import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

const ProductState = (props) => {
  const host = "http://localhost:5000"

  const shippingfee = 200
  const [cookies, , setCookie] = useCookies(['token']);
  const [alluser, setAlluser] = useState([])
  const [user, setUser] = useState([])
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [carts, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [subtotal, setsubtotal] = useState(0)
  const [orders, setOrders] = useState([])
  const [vieworder, setViewrder] = useState([])
  const [viewuserorder, setViewuserorder] = useState([])
  const [orderitem, setOrderitem] = useState([])
  const [allreview, setAllReview] = useState([])
  const [review, setReview] = useState([])
  const [flashsale, setFlashsale] = useState([])

  // Get all Category
  const getAllUser = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getalluser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const json = await response.json()
    setAlluser(json)

  }

  // Get all Category
  const getUser = async (user_id) => {
    // API Call 

    const response = await fetch(`${host}/api/auth/getuser/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const json = await response.json()
    setUser(json)
    return (json)

  }

  // Add product in the Wishlist
  const DeleteUser = async (user_id) => {
    // API Call  
    const response = await fetch(`${host}/api/auth/deleteuser/${user_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },

    });
    const json = await response.json()
    console.log(json)
    getAllUser()
  }

  // Get all Products
  const getProducts = async () => {
    // API Call 
    const response = await fetch(`${host}/api/product/fetchallproduct`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const json = await response.json()
    setProducts(json)
    return (json)

  }

  // Get all Category
  const getCategory = async () => {
    // API Call 
    console.log(cookies.token)
    const response = await fetch(`${host}/api/category/fetchallcategories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const json = await response.json()
    setCategory(json)

    return (json)

  }

  // Add Category
  const Addcategory = async (data) => {
    // API Call 
    console.log(cookies.token)
    const response = await axios({
      method: 'post',
      url: `${host}/api/category/addcategory`,
      headers: {
        "auth-token":cookies.token
      },
      data,
    });
    return response.data
  }

  // Get specific product detail
  const Insertproduct = async (data) => {

    // API Call 
    const response = await axios({
      method: 'post',
      url: `${host}/api/product/addproduct`,
      headers: {
        "auth-token": cookies.token
      },
      data,
    });
    return response.data
  }
  // Get specific product detail
  const getProductsdetail = async (id) => {
    // API Call 
    const response = await fetch(`${host}/api/product/fetchproduct/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const json = await response.json()
    setProduct(json)
    return (json)
  }

  // Get specific product detail
  const AddtoCartproduct = async (prod_id, prod_qty) => {
    // API Call 
    const response = await fetch(`${host}/api/cart/addcart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },
      body: cookies.token
    });
    const json = await response.json()
    fetchCart()
    return (json)
  }

  // Add product in the Wishlist
  const AddWishlist = async (prod_id) => {
    // API Call 
    const response = await fetch(`${host}/api/wishlist/addwishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },
      body: JSON.stringify({ prod_id })
    });
    const json = await response.json()
    fetchWishlist()
    return (json)
  }

  // Add product in the Wishlist
  const fetchCart = async () => {
    await getProducts();
    // API Call 
    try {
      const response = await fetch(`${host}/api/cart/fetchcart`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": cookies.token
        },

      });
      const json = await response.json()
      setCart(json);
      return (json);
    }
    catch (err) {
      return (err)
    }

  }

  // Add product in the Wishlist
  const Updatecart = async (prod_id, prod_qty) => {
    // API Call  
    const response = await fetch(`${host}/api/cart/updatecart/${prod_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },
      body: JSON.stringify({ prod_qty })
    });
    const json = await response.json()
    console.log(json)
    fetchCart()
  }

  // Add product in the Wishlist
  const Deletecart = async (prod_id) => {
    // API Call  
    const response = await fetch(`${host}/api/cart/deletecart/${prod_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },

    });
    const json = await response.json()
    console.log(json)
    fetchCart()
  }

  // Add product in the Wishlist
  const fetchWishlist = async () => {
    // API Call 
    try {
      const response = await fetch(`${host}/api/wishlist/fetchwishlist`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": cookies.token
        },

      });
      const json = await response.json()
      setWishlist(json)
    }
    catch (err) {
      return (err)
    }
  }

  // Delete product in the Wishlist
  const DeleteWishlist = async (prod_id) => {
    // API Call  
    const response = await fetch(`${host}/api/wishlist/deletewishlist/${prod_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },

    });
    const json = await response.json()
    fetchWishlist()
    return (json)
  }

  // Add product in the Wishlist
  const Totalgrand = async () => {
    const cart = await fetchCart();
    const products = await getProducts();

    let product = []
    let total = 0
    cart?.map(cart => {
      return (

        product = products.find(item => item._id === cart.prod_id),
        total = total + product.selling_price * cart.prod_qty
      )
    })
    setsubtotal(total)
    return (total)
  }

  // Get specific product detail
  const PlaceOrder = async (name, email, contact, address, country, city, state, zip, message, total_price) => {
    // API Call 
    const response = await fetch(`${host}/api/order/placeorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },
      body: JSON.stringify({ name, email, contact, address, country, city, state, zip, total_price, message })
    });
    const json = await response.json()
    getViewUserOrder()
    return (json)

  }

  // Get all New Order
  const getOrders = async () => {
    // API Call 
    const response = await fetch(`${host}/api/order/allorder`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const json = await response.json()
    setOrders(json)

  }

  // Get all New Order
  const getAllReview = async () => {
    // API Call 
    const response = await fetch(`${host}/api/review/fetchallreview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const json = await response.json()
    setAllReview(json)
    getProducts()

  }

  // Get all New Order
  const getReview = async (prod_id) => {
    // API Call 
    const response = await fetch(`${host}/api/review/fetchreview/${prod_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const json = await response.json()
    setReview(json)
    getProducts()

  }

  // Get detail of specific user Orders
  const getViewOrder = async (order_id) => {
    // API Call 
    const order = await fetch(`${host}/api/order/vieworder/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const orderitem = await fetch(`${host}/api/order/orderitem/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const getorder = await order.json()
    setViewrder(getorder)
    const getorderitem = await orderitem.json()
    setOrderitem(getorderitem)
    return (getorder)

  }

  // Get detail of specific Order
  const getViewUserOrder = async () => {
    // API Call 
    const order = await fetch(`${host}/api/order/viewuserorder`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const getorder = await order.json()
    setViewuserorder(getorder)
  }

  // Add product in the Wishlist
  const updateOrder = async (order_id, status) => {
    // API Call  
    console.log(order_id, status)
    const response = await fetch(`${host}/api/order/updateorder/${order_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },
      body: JSON.stringify({ status })
    });
    const json = await response.json()
    getOrders()
    return json
  }


  // Get all Products
  const getCategoryProduct = async (cat_id) => {
    // API Call 
    const response = await fetch(`${host}/api/product/fetchcategoryproduct/${cat_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      }
    });
    const json = await response.json()
    setProduct(json)

  }

  // Get User detail
  const getUserdetail = async () => {
    // API Call 
    try {
      const response = await fetch(`${host}/api/auth/getuserdetail`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":  cookies.token
        }
      });
      const json = await response.json()
      setUser(json)
      return (json)
    }
    catch (error) {
      if (error.status === 401) { localStorage.removeItem('token') }
      return (error)
    }

  }

  // Get Category detail
  const getSpecificCategory = async (cat_id) => {
    // API Call 
    try {
      const response = await fetch(`${host}/api/category/fetchcategory/${cat_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":  cookies.token
        }
      });
      const json = await response.json()
      return (json)
    }
    catch (err) {
      localStorage.removeItem('token');
      return (err)
    }

  }

  // Update Category detail
  const updateCategory = async (category) => {
    const name = category.name;
    const slug = category.slug;
    const description = category.description;
    const meta_title = category.meta_title;
    const meta_description = category.meta_description;
    const image = category.image;
    // API Call 
    try {
      const response = await fetch(`${host}/api/category/updatecategory/${category._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":  cookies.token
        },
        body: JSON.stringify({ name, slug, description, meta_title, meta_description, image })
      });
      const json = await response.json()
      return (json)
    }
    catch (err) {
      // localStorage.removeItem('token');
      return (err)
    }
  }

  // Update Product detail
  const updateProduct = async (cat_id, product) => {
    const name = product.name;
    const slug = product.slug;
    const original_price = product.original_price;
    const selling_price = product.selling_price;
    const quantity = product.quantity;
    const description = product.description;
    const meta_title = product.meta_title;
    const meta_description = product.meta_description;
    const image = product.image;
    // API Call 
    try {
      const response = await fetch(`${host}/api/product/updateproduct/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":  cookies.token
        },
        body: JSON.stringify({ cat_id, name, slug, original_price, selling_price, quantity, description, meta_title, meta_description, image })
      });
      const json = await response.json()
      return (json)
    }
    catch (err) {
      // localStorage.removeItem('token');
      return (err)
    }
  }

  // Delete product
  const deleteProduct = async (prod_id) => {
    // API Call  
    console.log(prod_id)
    const response = await fetch(`${host}/api/product/deleteproduct/${prod_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },

    });
    const json = await response.json();
    getProducts()
    return (json)
  }

  // Delete Category
  const deleteCategory = async (cat_id) => {
    // API Call  
    const response = await fetch(`${host}/api/category/deletecategory/${cat_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },

    });
    const json = await response.json();
    getCategory()
    return (json)
  }

  // Add product to Flash Sale
  const AddtoFlashsale = async (prod_id, sale_date) => {
    // API Call 
    const response = await fetch(`${host}/api/flashsale/addflashsale`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },
      body: JSON.stringify({ prod_id, sale_date })
    });
    const json = await response.json()
    return (json)
  }

  // Get all Products from Flash Sale
  const getFlashproduct = async () => {
    // API Call 
    const response = await fetch(`${host}/api/flashsale/fetchallflashsale`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setFlashsale(json)
    return (json)

  }

  // Update Product in Flash sale
  const updateFlashsale = async (id, sale_date) => {
    // API Call 
    try {
      const response = await fetch(`${host}/api/flashsale/updateflashsale/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":  cookies.token
        },
        body: JSON.stringify({ sale_date })
      });
      const json = await response.json()
      getFlashproduct()
      return (json)
    }
    catch (err) {
      return (err)
    }
  }

  // Delete product from Flash sale
  const deleteFlashsale = async (id) => {
    // API Call  
    const response = await fetch(`${host}/api/flashsale/deletefalshsale/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  cookies.token
      },

    });
    const json = await response.json();
    getFlashproduct()
    return (json)
  }

 // Login Admin
 const AdminLogin = async (email,password) => {
  // API Call 
 
  try {
    const response = await fetch(`${host}/api/auth/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json()

    if(json.success){
    return (json)
    }
    else{
      return({error:"Invalid Credentials"})
    }
  }
  catch (error) {
    return ({ error: "Internal Error" })
  }
}



  return (
    <ProductContext.Provider value={{ user, alluser, products, product, carts, wishlist, subtotal, shippingfee, category, orders, vieworder, viewuserorder, orderitem, allreview, review, flashsale, getReview, getUser, getAllUser, DeleteUser, Totalgrand, setProducts, getProducts, Insertproduct, getCategory, Addcategory, getProductsdetail, AddtoCartproduct, AddWishlist, fetchCart, Updatecart, Deletecart, fetchWishlist, DeleteWishlist, PlaceOrder, getOrders, getViewOrder, getViewUserOrder, updateOrder, getAllReview, getCategoryProduct, getUserdetail, getSpecificCategory, updateCategory, updateProduct, deleteProduct, deleteCategory, AddtoFlashsale, getFlashproduct, updateFlashsale, deleteFlashsale,AdminLogin }}>
      {props.children}
    </ProductContext.Provider>
  )

}
export default ProductState;