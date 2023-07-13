import React, { useContext, useState } from 'react';
import Login from '@react-login-page/page2';
import defaultBannerImage from '@react-login-page/page2/banner-image';
import ProductContext from '../../../context/product/ProductContext';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [cookies, setCookie] = useCookies(['token']);
  const context = useContext(ProductContext);
  const navigate = useNavigate();
  const { AdminLogin } = context;

  const handleSubmit = async () => {
    try {
      const data = await AdminLogin(form.email, form.password);
      if (!data.error) {
        setCookie('token', data.authtoken, { maxAge: 3600, path: '/' });

        swal('Login Success!', 'You have been successfully logged in!', 'success').then(() => {
          navigate('/addcategory');
        });
      } else {
        swal('Login Failed!', 'Please check your email and password!', 'error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <Login style={{ height: '100vh' }}>
      <Login.Banner>
        <img src={defaultBannerImage} alt="imghere" />
      </Login.Banner>

      <Login.Email
        index={0}
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
      />
      <Login.Password
        index={1}
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleInputChange}
      />
      <Login.Submit onClick={handleSubmit} />
    </Login>
  );
};

export default Signin;
