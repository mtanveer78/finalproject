import React from 'react'
// import ProductContext from "../context/product/ProductContext"


function UserProfile(props) {
  const { onChange } = props
  return (
    <>
      <div className="col-md-7">
        <div className="card">
          <div className="card-body">
            <h4>Profile Detail</h4>
            <hr />
            <div className="row ">
              <div className="col-md-6">
                <label htmlFor="">First Name</label>
                <input type="text" required name="name" value={props.user.name} className="form-control name" placeholder="Enter Name" onChange={onChange} />
                <span id="fname_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Email</label>
                <input type="text" required name="email" value={props.user.email} className="form-control email" placeholder="Enter Email" onChange={onChange} readOnly />
                <span id="email_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Phone Number</label>
                <input type="text" required name="contact" value={props.user.contact} className="form-control phone" placeholder="Enter Phone Number" onChange={onChange} />
                <span id="phone_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Address </label>
                <input type="text" required name="address" value={props.user.address} className="form-control address" placeholder="Enter Address " onChange={onChange} />
                <span id="address_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">City</label>
                <input type="text" required name="city" value={props.user.city} className="form-control city" placeholder="Enter City" onChange={onChange} />
                <span id="city_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">State</label>
                <input type="text" required name="state" value={props.user.state} className="form-control state" placeholder="Enter State" onChange={onChange} />
                <span id="state_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Country</label>
                <input type="text" required name="country" value={props.user.country} className="form-control country" placeholder="Enter Country" onChange={onChange} />
                <span id="country_error" className="text-danger"></span>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Pin Code</label>
                <input type="text" required name="pincode" value={props.user.pincode} className="form-control pincode" placeholder="Enter Pin Code" onChange={onChange} />
                <span id="pincode_error" className="text-danger"></span>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success w-30 mt-4">Update Profile</button>
      </div>

      <div className="col-md-5">
        <div className="card">
          <div className="card-body">
            <h4>Change Password</h4>
            <hr />
            <div className="row password-form">
              <div className="col-md-8 mt-3">
                <label htmlFor="">Old Password</label>
                <input type="text" name="old_password" className="form-control oldpass" placeholder="Old Password" />
                <span id="old_password_error" className="text-danger"></span>
              </div>
              <div className="col-md-8 mt-3">
                <label htmlFor="">New Password</label>
                <input type="text" name="new_password" className="form-control newpass" placeholder="New Password" />
                <span id="new_password_error" className="text-danger"></span>
              </div>
              <div className="col-md-8 mt-3">
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="confirm_password" className="form-control confirmpass" placeholder="Confirm Password" />
                <span id="confirm_password_error" className="text-danger"></span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary change-password w-30 mt-4">Update Password</button>

      </div>

    </>
  )
}

export default UserProfile
