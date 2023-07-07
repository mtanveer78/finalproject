import './App.css';
import React from 'react'
import ProductState from './context/product/ProductState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Addcategory from './components/Admin/Category/Addcategory';
import Category from './components/Admin/Category/Category';
import Product from './components/Admin/Product/Product';
import Addproduct from './components/Admin/Product/Addproduct'
// import User from './components/Admin/User/User';
import Order from './components/Admin/Order/Order';
import Review from './components/Admin/Review/Review';
import ViewOrder from './components/Admin/Order/ViewOrder';
import MainReviewpage from './components/Admin/Review/MainReviewpage';
import ViewUser from './components/Admin/User/ViewUser';
import EditCategory from './components/Admin/Category/EditCategory';
import EditProduct from './components/Admin/Product/EditProduct';
import Users from './components/Admin/User/Users';
import Viewdetail from './components/Admin/Product/Viewdetail';
import Flashsale from './components/Admin/Flashsale/Flashsale';



const App = () => {

  
  return (

    <div className="">
     
      <ProductState> 
      <Router basename="/">
      
        <Routes>

          <Route exact path="/addcategory" element={<Addcategory />} />

          <Route exact path="/category" element={<Category />} />
          <Route exact path="/updatecategory/:cat_id" element={<EditCategory />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/updateproduct/:prod_id" element={<EditProduct />} />
          <Route exact path="/viewproductdetail/:prod_id" element={<Viewdetail />} />
          <Route exact path="/order" element={<Order page="processing" />} />
          <Route exact path="/shippedorder" element={<Order page="shipped"/>} />
          <Route exact path="/orderhistory" element={<Order page="delivered"/>} />
          <Route exact path="/vieworder/:order_id" element={<ViewOrder />} />
          <Route exact path="/user" element={<Users />} />
          <Route exact path="/viewuser/:user_id" element={<ViewUser />} />
          <Route exact path="/review" element={<MainReviewpage />} />
          <Route exact path="/viewreview/:prod_id" element={<Review />} />
          <Route exact path="/flashsale" element={<Flashsale />} />
        </Routes>
        
      </Router>
      </ProductState>
    </div>

  )

}
export default App;