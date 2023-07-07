import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
       <input type="date" name="set_date" onChange={props.Setvalue} />
       <button onClick={props.togglePopup}>Add</button>
      </div>
    </div>
  );
};
 
export default Popup;