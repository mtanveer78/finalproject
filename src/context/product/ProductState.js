import ProductContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
  const host = "http://localhost:5000"
  const Intialproduct = []
  const shippingfee=200
  const [alluser, setAlluser] = useState(Intialproduct)
  const [user, setuser] = useState(Intialproduct)
  const [products, setProducts] = useState(Intialproduct)
  const [category, setCategory] = useState(Intialproduct)
  const [product, setProduct] = useState(Intialproduct)
  const [carts, setCart] = useState(Intialproduct)
  const [wishlist, setWishlist] = useState(Intialproduct)
  const [subtotal, setsubtotal] = useState(0)
  const [orders, setOrders] = useState(Intialproduct)
  const [vieworder, setViewrder] = useState(Intialproduct)
  const [orderitem, setOrderitem] = useState(Intialproduct)
  const [allreview, setAllReview] = useState(Intialproduct)
  const [review, setReview] = useState(Intialproduct)

   // Get all Category
 const getAllUser = async () => {
  // API Call 
  const response = await fetch(`${host}/api/auth/getalluser`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
      }
    });
    const json = await response.json() 
    setuser(json)
       
  }

    // Add product in the Wishlist
    const DeleteUser = async (user_id) => {
      // API Call  
      const response = await fetch(`${host}/api/auth/deleteuser/${user_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      }
    });
    const json = await response.json() 
    setProducts(json)
       
  }
 // Get all Category
 const getCategory = async () => {
  // API Call 
  const response = await fetch(`${host}/api/category/fetchallcategories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
    }
  });
  const json = await response.json() 
  setCategory(json)
     
}
 // Add Category
 const Addcategory = async (name,slug,description,meta_description,image) => {
  // API Call 
  const response = await fetch(`${host}/api/category/addcategory`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
    },
    body: JSON.stringify({name,slug,description,meta_description,image})
  });
  const json = await response.json()
  console.log(json)
}
 // Get specific product detail
 const Insertproduct = async (cat_id,name,slug,orignal_price,selling_price,quantity,description,meta_description,image) => {
  // API Call 
  const response = await fetch(`${host}/api/product/addproduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzUxMzc3Nn0.rboMRh82rtUBC4-xy8ILdYmmwSdlAp7u5Wb8t4qsvIU'
    },
    body: JSON.stringify({cat_id,name,slug,orignal_price,selling_price,quantity,description,meta_description,image})
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      }
    });
    const json = await response.json()
    
    setProduct(json)   
  }

  // Get specific product detail
  const AddtoCartproduct = async (prod_id ,prod_qty) => {
    // API Call 
    const response = await fetch(`${host}/api/cart/addcart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      body: JSON.stringify({prod_id, prod_qty})
    });
    const json = await response.json()
    console.log(json)
    fetchCart() 
    DeleteWishlist(prod_id)
  }

  // Add product in the Wishlist
  const AddWishlist = async (prod_id) => {
    // API Call 
    const response = await fetch(`${host}/api/wishlist/addwishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      body: JSON.stringify({prod_id})
    });
    const json = await response.json()
    fetchWishlist()
    console.log(json)
  }

  // Add product in the Wishlist
  const fetchCart = async () => {
    await getProducts();
    // API Call 
    const response = await fetch(`${host}/api/cart/fetchcart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      
    });
    const json = await response.json()
    setCart(json); 
   
  }

  // Add product in the Wishlist
  const Updatecart = async (prod_id,prod_qty) => {
    // API Call  
    const response = await fetch(`${host}/api/cart/updatecart/${prod_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      body: JSON.stringify({prod_qty})
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      
    });
    const json = await response.json()
    console.log(json)
    fetchCart() 
  }

   // Add product in the Wishlist
   const fetchWishlist = async () => {
    // API Call 
    const response = await fetch(`${host}/api/wishlist/fetchwishlist`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      
    });
    const json = await response.json() 
    setWishlist(json) 
  }

   // Add product in the Wishlist
   const DeleteWishlist = async (prod_id) => {
    // API Call  
    const response = await fetch(`${host}/api/wishlist/deletewishlist/${prod_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      
    });
    const json = await response.json()
    console.log(json)
    fetchWishlist() 
  }

   // Add product in the Wishlist
   const Totalgrand =async () => {
    await fetchCart();
    setTimeout(5000);
    let product=[]
    let total=0
    
    carts?.map(cart => {
      return (
        
        product = products.find(item => item._id === cart.prod_id),
        total = total+product.selling_price*cart.prod_qty
      )})
    setsubtotal(total)
   }

     // Get specific product detail
  const PlaceOrder = async (name, email, contact, address, country, city, state, zip, message,total_price) => {
    // API Call 
    const response = await fetch(`${host}/api/order/placeorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      body: JSON.stringify({name, email, contact, address, country, city, state, zip, total_price, message})
    });
    const json = await response.json()
    console.log(json)
  
  }

   // Get all New Order
   const getOrders = async () => {
    // API Call 
    const response = await fetch(`${host}/api/order/allorder`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
      }
    });
    const json = await response.json() 
    setReview(json)
    getProducts()
       
  }
  
  // Get detail of specific Order
  const getViewOrder = async (order_id) => {
    // API Call 
    const order = await fetch(`${host}/api/order/vieworder/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
      }
    });
    const orderitem = await fetch(`${host}/api/order/orderitem/${order_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2MDFiYjA0MGIzMjZhZjE1NmFiOTY3In0sImlhdCI6MTY2NzI0MjkyOH0.YKyhqoOXmlEP3rjfgG4CHpdmwAEWaI84dSVnfAbyHSs'
      }
    });
    const getorder = await order.json() 
    setViewrder(getorder)
    const getorderitem = await orderitem.json() 
    setOrderitem(getorderitem)
       
  }

  // Add product in the Wishlist
  const updateOrder = async (order_id,status) => {
    // API Call  
    const response = await fetch(`${host}/api/order/updateorder/${order_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZmQxYjkwZjI2YjdhNGRlMGEyMzMwIn0sImlhdCI6MTY2NzIyMzk5M30.vMrU10zBGlcp5skqCh6O8hr-mS7YvWtDJq7NG9ueszw'
      },
      body: JSON.stringify({status})
    });
     await response.json()
    // console.log(json)
    getOrders() 
  }

  return (
    <ProductContext.Provider value={{ user,alluser,products,product,carts,wishlist,subtotal,shippingfee,category,orders,vieworder,orderitem,allreview,review, getReview, getUser, getAllUser, DeleteUser, Totalgrand, setProducts, getProducts,Insertproduct,getCategory,Addcategory,getProductsdetail, AddtoCartproduct , AddWishlist ,fetchCart,Updatecart,Deletecart,fetchWishlist,DeleteWishlist,PlaceOrder,getOrders,getViewOrder,updateOrder,getAllReview}}>
      {props.children}
    </ProductContext.Provider>
  )

}
export default ProductState;