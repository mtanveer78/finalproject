const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header('auth-token');
  if (!token) {
    req.authError = { message: "Please authenticate using a valid token", status: 401 };
    return next();
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    req.authError = { message: "Please authenticate using a valid token", status: 401 };
    next(error);
  }
};

module.exports = fetchUser;
