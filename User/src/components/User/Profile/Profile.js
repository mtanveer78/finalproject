import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import Userlayout from '../Userlayout/Userlayout'
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  const { getUserdetail } = context;
  const [userdata , setUserData] = useState({})
  useEffect(() => {
    /* eslint-disable-next-line */
 
    async function fetchData() {
      try {
        const data = await getUserdetail();
        if(data.error!==undefined){navigate("/login")}
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, [])
  const onChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value })

  }
  return (
    <div>
        <Userlayout>
          {console.log(userdata)}
        <div className="container">
          <UserProfile user={userdata} onChange={onChange}/>
        </div>
        </Userlayout>
    </div>
  )
}

export default Profile
