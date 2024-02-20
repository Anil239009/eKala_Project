import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/registration.css"
function UpdateArt(props) {
    const navigate=useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [role, setRole] = useState("");
  
    const handleFNameChange = (e) => setFName(e.target.value);
    const handleLNameChange = (e) => setLName(e.target.value);
    const handleMobileNoChange = (e) => setMobileNo(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleCPasswordChange = (e) => setCPassword(e.target.value);
    const handleRoleChange = (e) => setRole(e.target.value);
    //validation of email-----------------------------------------------------------------------------------
    function validateEmail(){
      var regEmail=/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in|org|microsoft|co.in)$/;
      if(regEmail.test(email)){
        document.getElementById("errEmail").innerHTML="";
        return true;
      }
      document.getElementById("errEmail").innerHTML="enter valid email, e.g: xyz123@gmail.com";
      return false;
    }
    //validation of password -------------------------------------------------------------------------------
    function validatePassword(){
      var regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()":<>?]){8,}/
      if(regPass.test(password)){
        document.getElementById("errPass").innerHTML="";
        return true;
      }
      document.getElementById("errPass").innerHTML="enter atleast one lower case character,one upper casecharacter,one number ,one symbol and minimum length is 8 chatacter.";
      return false;
    }
    // validation of confirmed password -------------------------------------------------------------------
    function validateConfirmedPassword(){
      if(password===cpassword){
        document.getElementById("errcPass").innerHTML="";
        return true;
      }
      document.getElementById("errcPass").innerHTML="password and confirmed passwords are not matching.";
      return false;
    }
    //validation of mobile number --------------------------------------------------------------------------
    function validateMobileNo(){
      if(mobileNo.trim().length==10){
        document.getElementById("errMobileNo").innerHTML="";
        return true;
      }
      document.getElementById("errMobileNo").innerHTML="enter 10 digit mobile number .";
      return false;
    }
    //validation of role -----------------------------------------------------------------------------------
    function validateRole(){
      if(role==="artist" || role==="user"){
        document.getElementById("errRole").innerHTML="";
        return true;
      }
      document.getElementById("errRole").innerHTML="select atleast one role";
      return false;
    }
    //general validation ----------------------------------------------------------------------------------
    const validate = (e) => {
      e.preventDefault();
  
      var f1=validateEmail();
      var f2=validatePassword();
      var f3=validateConfirmedPassword();
      var f4=validateMobileNo();
      var f5=validateRole();
      var flag=f1 && f2 && f3 && f4 && f5;
      if(flag){
        alert("Successfully logged in, Now log in to get batter experience.");
        e.target.submit();
      }
    };

    return (
        <div>
          <div className='registration-out-container'>
            <div className="container registration-in-container">
            <form action="/login" className="container registration-form-container" onSubmit={validate}>
              <h1 style={{color:"white"}}><storong>Update your existing art  here</storong></h1>
              {/* Row 1 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="fName">Art Name</label>
                  <input type="text" className="form-control" name="fName" id="fName" placeholder="Enter first name" value={fName} onChange={handleFNameChange} required />
                </div>
                <div className="col-6">
                  <label htmlFor="lName">Last Name</label>
                  <input type="text" className="form-control" name="lName" id="lName" placeholder="Enter last name" value={lName} onChange={handleLNameChange} required/>
                </div>
              </div>
              {/* Row 2 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="mobileNo">Mobile No</label>
                  <input type="number" className="form-control" name="mobileNo" id="mobileNo" placeholder="Enter mobile number" value={mobileNo} onChange={handleMobileNoChange} />
                  <p id="errMobileNo" className='text-danger'></p>
                </div>
                <div className="col-6">
                  <label htmlFor="role">Select a Role</label>
                  <select className="col-12 custom-select" name="role" id="role" aria-label="Select role" value={role} onChange={handleRoleChange}>
                    <option value="">------------ Select one role</option>
                    <option value="artist">Artist</option>
                    <option value="user">User</option>
                  </select>
                  <p id="errRole" className='text-danger'></p>
                </div>
              </div>
              {/* Row 3 */}
              <div className="row">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                  <p id="errEmail" className='text-danger'></p>
                </div>
              </div>
              {/* Row 4 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                  <p id="errPass" className='text-danger'></p>
                </div>
                <div className="col-6">
                  <label htmlFor="cpassword" className="form-label">Confirmed Password</label>
                  <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" value={cpassword} onChange={handleCPasswordChange} />
                  <p id="errcPass" className='text-danger'></p>
                </div>
              </div>
              {/* Row 5 */}
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-success">Submit</button>{" "}
                  <button type="reset" className="btn btn-secondary">Clear</button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      )
}

export default UpdateArt;
