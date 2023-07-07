const User = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';

const fetchAdmin = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    req.authError = { message: "Please authenticate using a valid token", status: 401 };
    return next();
  }
  
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(data.user.id);
    if (user.is_admin === 0) {
      req.authError = { message: "Please authenticate using a valid token", status: 401 };
    } else {
      req.user = data.user;
    }
  } catch (error) {
    req.authError = { message: "Please authenticate using a valid token", status: 401 };
  }

  next();
};

module.exports = fetchAdmin;
