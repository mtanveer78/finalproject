import './App.css';
import React from 'react'
import Bodypage from './components/Bodypage';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus'; 
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import Wishlist from './components/Wishlist';
import ProductState from './context/product/ProductState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Sidebar from './components/Admin/Sidebar';
// import Navbar from './components/Admin/Navbar';
// import Footer from './components/Admin/Footer';
// import Addcategory from './components/Admin/Addcategory';
// import Category from './components/Admin/Category';
// import Product from './components/Admin/Product';
// import Addproduct from './components/Admin/Addproduct'
// import User from './components/Admin/User';
// import Order from './components/Admin/Order';
// import Shippedorder from './components/Admin/Shippedorder';
// import Completedorder from './components/Admin/Completedorder';
// import Review from './components/Admin/Review';
// import ViewOrder from './components/Admin/ViewOrder';
// import MainReviewpage from './components/Admin/MainReviewpage';
// import ViewUser from './components/Admin/ViewUser';

const App = () => {
  const onsaleproduct = [
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/tools_equipment_7.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/digital_18.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/fashion_08.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/digital_17.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/tools_equipment_3.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/fashion_05.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/digital_04.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" },
    { name: "T-Shirt Raw Hem Organic Boro Constrast Denim", image: "assets/images/products/kidtoy_05.jpg", description: "Radiant-360 R6 Wireless Omnidirectional Speaker", selling_price: "250", labels: "sale" }

  ]
  return (

    <div className="">
      <ProductState>
        <Router  basename="/">
          <Header />
          <Routes>
            <Route exact path="/" element={<Bodypage onsaleproduct= {onsaleproduct} />} />
            <Route exact path="/about" element={<Aboutus />} />
            <Route exact path="/contact" element={<Contactus />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart onsaleproduct={onsaleproduct}/>} />
            <Route exact path="/checkout" element={<Checkout onsaleproduct={onsaleproduct}/>} />
            <Route exact path="/product/:prod_id" element={<Detail />} />
            <Route exact path="/product/:prod_id/:info" element={<Detail />} />
            <Route exact path="/wishlist" element={<Wishlist onsaleproduct={onsaleproduct}/>} />
            
          </Routes>
          <Footer />
        </Router>
      </ProductState>
      {/* <ProductState>
      <Router basename="/">
      
        <Routes>

          <Route exact path="/addcategory" element={<Addcategory />} />

          <Route exact path="/category" element={<Category />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/shippedorder" element={<Shippedorder />} />
          <Route exact path="/orderhistory" element={<Completedorder />} />
          <Route exact path="/vieworder/:order_id" element={<ViewOrder />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/viewuser/:user_id" element={<ViewUser />} />
          <Route exact path="/review" element={<MainReviewpage />} />
          <Route exact path="/viewreview/:prod_id" element={<Review />} />
        </Routes>
        
      </Router>
      </ProductState> */}
    </div>

  )

}
export default App;