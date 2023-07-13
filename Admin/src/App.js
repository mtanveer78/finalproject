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
import Login from './components/Admin/User/Login';
import Viewdetail from './components/Admin/Product/Viewdetail';
import Flashsale from './components/Admin/Flashsale/Flashsale';
import { ProtectedRoute } from './Protected';



const App = () => {

  
  return (

    <div className="">
     
      <ProductState> 
      <Router basename="/">
      
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addcategory" element={<ProtectedRoute> <Addcategory /></ProtectedRoute> } />

          <Route exact path="/category" element={<ProtectedRoute> <Category /> </ProtectedRoute> } />
          <Route exact path="/updatecategory/:cat_id" element={<ProtectedRoute> <EditCategory /> /</ProtectedRoute> } />
          <Route exact path="/product" element={<ProtectedRoute>  <Product /> </ProtectedRoute> } />
          <Route exact path="/addproduct" element={<ProtectedRoute> <Addproduct /> </ProtectedRoute> } />
          <Route exact path="/updateproduct/:prod_id" element={<ProtectedRoute> <EditProduct /> </ProtectedRoute> } />
          <Route exact path="/viewproductdetail/:prod_id" element={<ProtectedRoute> <Viewdetail /> </ProtectedRoute> } />
          <Route exact path="/order" element={<ProtectedRoute> <Order page="processing" /> </ProtectedRoute> } />
          <Route exact path="/shippedorder" element={<ProtectedRoute> <Order page="shipped"/> </ProtectedRoute> } />
          <Route exact path="/orderhistory" element={<ProtectedRoute> <Order page="delivered"/> </ProtectedRoute> } />
          <Route exact path="/vieworder/:order_id" element={<ProtectedRoute> <ViewOrder /> </ProtectedRoute> } />
          <Route exact path="/user" element={<ProtectedRoute> <Users /> </ProtectedRoute> } />
          <Route exact path="/viewuser/:user_id" element={<ProtectedRoute> <ViewUser /> </ProtectedRoute> } />
          <Route exact path="/review" element={<ProtectedRoute> <MainReviewpage /> </ProtectedRoute> } />
          <Route exact path="/viewreview/:prod_id" element={<ProtectedRoute> <Review /> </ProtectedRoute> } />
          <Route exact path="/flashsale" element={<ProtectedRoute> <Flashsale /> </ProtectedRoute> } />
        </Routes>
        
      </Router>
      </ProductState>
    </div>

  )

}
export default App;