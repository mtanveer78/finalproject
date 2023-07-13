import ProductContext from "./ProductContext";
import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

const ProductState = (props) => {
  const host = "http://localhost:5000"
  const Intialproduct = []
  const shippingfee = 200
  const [cookies, , removeCookie] = useCookies(['token']);
  const [alluser, setAlluser] = useState(Intialproduct)
  const [user, setUser] = useState(Intialproduct)
  const [products, setProducts] = useState(Intialproduct)
  const [category, setCategory] = useState(Intialproduct)
  const [product, setProduct] = useState(Intialproduct)
  const [carts, setCart] = useState(Intialproduct)
  const [wishlist, setWishlist] = useState(Intialproduct)
  const [subtotal, setsubtotal] = useState(0)
  const [orders, setOrders] = useState(Intialproduct)
  const [vieworder, setViewrder] = useState(Intialproduct)
  const [viewuserorder, setViewuserorder] = useState(Intialproduct)
  // const [orderitem, setOrderitem] = useState(Intialproduct)
  const [allreview, setAllReview] = useState(Intialproduct)
  const [review, setReview] = useState(Intialproduct)

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
    const response = await fetch(`${host}/api/review/addreview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },
      data,
    });
    const json = await response.json()
    console.log(json)
  }

  // Get specific product detail
  const Insertproduct = async (cat_id, name, slug, orignal_price, selling_price, quantity, description, meta_description, image) => {
    // API Call 
    const response = await fetch(`${host}/api/product/addproduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },
      body: JSON.stringify({ cat_id, name, slug, orignal_price, selling_price, quantity, description, meta_description, image })
    });
    const json = await response.json()
    console.log(json)
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
        "auth-token": cookies.token
      },
      body: JSON.stringify({ prod_id, prod_qty })
    });
    const json = await response.json()
    await fetchCart()
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
    fetchCart()
    return json
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
      return (json)
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
    console.log(json)
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
        "auth-token": cookies.token
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
        "auth-token": cookies.token
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
        "auth-token": cookies.token
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
        "auth-token": cookies.token
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
        "auth-token": cookies.token
      }
    });

    const getorder = await order.json()
    setViewrder(getorder)
    return (getorder)

  }

  // Get detail of specific orderitem form Order
  const getOrderitem = async (item_id, order_id) => {
    // API Call 
    const order = await fetch(`${host}/api/order/vieworder/${item_id}/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });

    const getorder = await order.json()
    // setViewrder(getorder)
    return (getorder)

  }

  // Get detail of specific Order
  const getViewUserOrder = async () => {
    // API Call 
    const order = await fetch(`${host}/api/order/viewuserorder`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      }
    });
    const getorder = await order.json()
    setViewuserorder(getorder)
    return (getorder)
  }

  // Add product in the Wishlist
  const updateOrder = async (order_id, status) => {
    // API Call  
    const response = await fetch(`${host}/api/order/updateorder/${order_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
      },
      body: JSON.stringify({ status })
    });
    await response.json()
    // console.log(json)
    getOrders()
  }


  // Get all Products
  const getCategoryProduct = async (cat_id) => {
    // API Call 
    const response = await fetch(`${host}/api/product/fetchcategoryproduct/${cat_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
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
          "auth-token": cookies.token
        }
      });
      const json = await response.json()
      setUser(json)
      
      return (json)
    }
    catch (error) {
      // console.log("hello")
      // localStorage.removeItem('token')
      if (error.status === 401) { removeCookie('token') }
      return ({error})
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
          "auth-token": cookies.token
        }
      });
      const json = await response.json()
      return (json)
    }
    catch (err) {
      removeCookie('token')
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
          "auth-token": cookies.token
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
          "auth-token": cookies.token
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
    const response = await fetch(`${host}/api/product/deleteproduct/${prod_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": cookies.token
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
        "auth-token": cookies.token
      },

    });
    const json = await response.json();
    getCategory()
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
    return (json)

  }

  // Add Review on product
  const Addreview = async (data) => {
    // API Call 
    const response = await axios({
      method: 'post',
      url: `${host}/api/review/addreview`,
      headers: {
        "auth-token": cookies.token
      },
      data,
    });
    return response.data

  }

    // fetch user review
    const fetchReview = async (prod_id) => {
      // API Call  
      const response = await fetch(`${host}/api/review/fetchUserreview/${prod_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": cookies.token
        },
  
      });
      const json = await response.json();
      return (json)
    }
  


  return (
    <ProductContext.Provider value={{ user, alluser, products, product, carts, wishlist, subtotal, shippingfee, category, orders, vieworder, viewuserorder, allreview, review, getReview, getUser, getAllUser, DeleteUser, Totalgrand, setProducts, getProducts, Insertproduct, getCategory, Addcategory, getProductsdetail, AddtoCartproduct, AddWishlist, fetchCart, Updatecart, Deletecart, fetchWishlist, DeleteWishlist, PlaceOrder, getOrders, getViewOrder, getViewUserOrder, updateOrder, getAllReview, getCategoryProduct, getUserdetail, getSpecificCategory, updateCategory, updateProduct, deleteProduct, deleteCategory, getFlashproduct, getOrderitem, Addreview, fetchReview }}>
      {props.children}
    </ProductContext.Provider>
  )

}
export default ProductState;