import './App.css';
import React from 'react'
import Bodypage from './components/User/Mainpage/Bodypage';
import Aboutus from './components/User/Infopage/Aboutus';
import Contactus from './components/User/Infopage/Contactus'; 
import Login from './components/User/Profile/Login';
import Register from './components/User/Profile/Register';
import Cart from './components/User/Cart/Cart';
import Checkout from './components/User/Cart/Checkout';
import Detail from './components/User/Productdetail/Detail';
import Wishlist from './components/User/Wishlist/Wishlist';
import ProductState from './context/product/ProductState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Order from './components/User/Order/Order';
import ViewOrder from './components/User/Order/ViewOrder';
import ShopPage from './components/User/Shoppage/ShopPage';
import Product from './components/User/Mainpage/Product';
import Profile from './components/User/Profile/Profile';
import { ProtectedRoute } from './Protected';
import Review from './components/User/Order/Review';

// import Sidebar from './components/Admin/Sidebar';
// import Navbar from './components/Admin/Navbar';
// import Footer from './components/Admin/Footer';
// import Addcategory from './components/Admin/Category/Addcategory';
// import Category from './components/Admin/Category/Category';
// import Product from './components/Admin/Product/Product';
// import Addproduct from './components/Admin/Product/Addproduct'
// import User from './components/Admin/User/User';
// import Order from './components/Admin/Order/Order';
// import Review from './components/Admin/Review/Review';
// import ViewOrder from './components/Admin/Order/ViewOrder';
// import MainReviewpage from './components/Admin/Review/MainReviewpage';
// import ViewUser from './components/Admin/User/ViewUser';
// import EditCategory from './components/Admin/Category/EditCategory';
// import EditProduct from './components/Admin/Product/EditProduct';



const App = () => {

  
  return (

    <div className="">
      <ProductState>
        <Router  basename="/">
          
        
          <Routes>
            <Route exact path="/" element={<Bodypage  />} />
            <Route exact path="/about" element={<Aboutus />} />
            <Route exact path="/contact" element={<Contactus />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            {/* <Route exact path="/cart" element={<Cart onsaleproduct={onsaleproduct}/>} /> */}
            <Route path="/cart" exact element={<ProtectedRoute> <Cart /> </ProtectedRoute>} />
            <Route exact path="/checkout" element={<ProtectedRoute> <Checkout/> </ProtectedRoute>} />
            <Route exact path="/product/:prod_id" element={<Detail />} />
            <Route exact path="/wishlist" element={<ProtectedRoute>  <Wishlist/> </ProtectedRoute>} />
            <Route exact path="/order" element={<ProtectedRoute>  <Order condition="currentorder"/> </ProtectedRoute>} />
            <Route exact path="/order/orderhistory" element={<ProtectedRoute>  <Order condition="orderhistory"/> </ProtectedRoute>} />
            <Route exact path="/order/vieworder/:order_id" element={<ProtectedRoute>  <ViewOrder /> </ProtectedRoute> } />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/category/:cat_id" element={<Product />} />
            <Route exact path="/profile" element={<ProtectedRoute>  <Profile /> </ProtectedRoute> } />
            <Route exact path="/user/review/:item_id/:order_id" element={<ProtectedRoute>  <Review /> </ProtectedRoute> } />
          </Routes>
          
        </Router>
      </ProductState>
    </div>

  )

}
export default App;