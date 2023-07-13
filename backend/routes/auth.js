const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchUser');
var fetchAdmin = require('../middleware/fetchAdmin');

const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    // let user = await User.findOne({ email: req.body.email });
    // if (user) {
    //   return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
    // }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    let user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      contact: req.body.contact,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pincode: req.body.pincode,
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET,{expiresIn: '1d'});

    success=true;
    // res.json(user)
    res.json({success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const { email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET,{expiresIn: '1d'});
    success = true;
    res.json({ success, authtoken, user })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/admin/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }
    if (user.is_admin === 0) {
      success = false
      return res.status(400).json({success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET,{expiresIn: '1d'});
    success = true;
    res.json({ success, authtoken, user })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchUser,  async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 4: Get all User Data using: POST "/api/auth/getalluser". Login required
router.get('/getalluser', fetchUser,  async (req, res) => {

  try {
    	// Allow Updation only if user is admin
		const user = await User.findById({_id:req.user.id});
    if (user.is_admin===0){
      return res.status(401).send("Not Allowed");
    }
    
    const alluser = await User.find({ is_admin: 0 });
    res.send(alluser)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Get all User Data using: POST "/api/auth/getalluser". Login required
router.get('/getuser/:user_id', fetchUser,  async (req, res) => {

  try {
    	// Allow Updation only if user is admin
      
		const isuser = await User.findById({_id:req.user.id});
    if (isuser.is_admin===0){
      return res.status(401).send("Not Allowed");
    }
    
    const user = await User.findById(req.params.user_id)
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Get all User Data using: POST "/api/auth/getalluser". Login required
router.get('/getuserdetail', fetchUser,  async (req, res) => {

  try {
    
    const user = await User.findById(req.user.id)
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 5: Delete an existing Category using: DELETE "/api/category/deletecategory". Login required
router.delete('/deleteuser/:user_id', fetchUser, async (req, res) => {
	try {
    
		// Allow deletion only if user is admin
		let user = await User.findById({_id:req.user.id});
    
			if (user.is_admin===0){
				return res.status(401).send("Not Allowed");
			}
		// Find the note to be delete and delete it
	  user = await User.findById(req.params.user_id);
		if (user.length===0) { return res.status(404).send("Not Found") }


		user = await User.findByIdAndDelete(req.params.user_id)
		res.json({ "Success": "User has been deleted", user: user });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})
module.exports = router