import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/registration.css"
import UserService from "../Services/UserService";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";


 function NewUser1() {
  
    const [respo, setRespo] = useState("");
  const[userState,setUserState] = useState({firstName:{value:" "},lastName:{value:" "},mobileNo:{value:" "},email:{value:" "},password:{value:" "},role:{value:" "}})
  const [confirmPass,setConfirmPass]  = useState({value:" "});
  
  const handleCPasswordChange = (e) => setConfirmPass(e.target.value);


  function onChangeHandler(event)
  {
      let {name,value} = event.target;

      setUserState(prev =>{
        return {...prev,[name]:value}
      })
    //   dispatch({ type: "update", data: { name, value} });

  }
//   //validation of email-----------------------------------------------------------------------------------
//   function validateEmail(){
//     var regEmail=/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in|org|microsoft|co.in)$/;
//     if(regEmail.test(userState.email)){
//       document.getElementById("errEmail").innerHTML="";
//       return true;
//     }
//     document.getElementById("errEmail").innerHTML="enter valid email, e.g: xyz123@gmail.com";
//     return false;
//   }
//   //validation of password -------------------------------------------------------------------------------
//   function validatePassword(){
//     var regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()":<>?]){8,}/
//     if(regPass.test(userState.password)){
//       document.getElementById("errPass").innerHTML="";
//       return true;
//     }
//     document.getElementById("errPass").innerHTML="enter atleast one lower case character,one upper casecharacter,one number ,one symbol and minimum length is 8 chatacter.";
//     return false;
//   }
//   // validation of confirmed password -------------------------------------------------------------------
//   function validateConfirmedPassword(){
//     if(userState.password===confirmPass){
//       document.getElementById("errcPass").innerHTML="";
//       return true;
//     }
//     document.getElementById("errcPass").innerHTML="password and confirmed passwords are not matching.";
//     return false;
//   }
//   //validation of mobile number --------------------------------------------------------------------------
//   function validatemobileNo(){
//     if(userState.mobileNo.trim().length===10){
//       document.getElementById("errmobileNo").innerHTML="";
//       return true;
//     }
//     document.getElementById("errmobileNo").innerHTML="enter 10 digit mobile number .";
//     return false;
//   }
//   //validation of role -----------------------------------------------------------------------------------
//   function validateRole(){
//     if(userState.role==="artist" || userState.role==="user"){
//       document.getElementById("errRole").innerHTML="";
//       return true;
//     }
//     document.getElementById("errRole").innerHTML="select atleast one role";
//     return false;
//   }
//   //general validation ----------------------------------------------------------------------------------
//   const validate = (event) => {
//     event.preventDefault();

//     var f1=validateEmail();
//     var f2=validatePassword();
//     var f3=validateConfirmedPassword();
//     var f4=validatemobileNo();
//     var f5=validateRole();
//     var flag=f1 && f2 && f3 && f4 && f5;
//     if(flag){
//       alert("Successfully logged in, Now login to get batter experience.");
//       submitForm();
//     }
//   };

  

//    function submitForm() {
//       try {
//           console.log(userState);
//            UserService.addNewUser({
//                 method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
//             //  userState: JSON.stringify({
//                         firstName: userState.firstName.value,
//                         lastName: userState.lastName.value,
//                         email: userState.email.value,
//                         mobileNo: userState.mobileNo.value,
//                         password: userState.password.value,
//                         role: userState.role.value
//                   }),
//             //  })
//           });
//           console.log(JSON.stringify(userState));
//       } catch (err) {
//           console.log(err.message);
//           alert("User Registration failed...!");
//       }

const submitData = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userState));

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: userState.firstName.value,
                        lastName: userState.lastName.value,
                        email: userState.email.value,
                        mobileNo: userState.mobileNo.value,
                        password: userState.password.value,
                        role: userState.role.value
      }),
    };

    console.log(reqOptions);

    fetch("http://localhost:8080/ekala/users/add", reqOptions)
        // console.log(JSON.stringify(userState));
      .then((resp) => resp.text())
      .then((data) => {
        setRespo(data);
        // if (data === "") {
        //   Navigate("/");
        // }
        // else if(data === "Already used"){
        //   setMessage("Username already used")
        // }
      })
      .catch((error) => console.error("Error:", error));
  };


  


  return (
    <div>
      <div className='registration-out-container'>
        <div className="container registration-in-container">
        <form action="/login" className="container registration-form-container"  onSubmit={submitData}>
          <h1 style={{color:"white"}}><storong>Registration here</storong></h1>
          {/* Row 1 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter first name" value={userState.firstName.value} onChange={onChangeHandler} required />
            </div>
            <div className="col-6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter last name" value={userState.lastName.value} onChange={onChangeHandler} required/>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="mobileNo">Mobile No</label>
              <input type="number" className="form-control" name="mobileNo" id="mobileNo" placeholder="Enter mobile number" value={userState.mobileNo.value} onChange={onChangeHandler} />
              <p id="errmobileNo" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="role">Select a Role</label>
              <select className="col-12 custom-select" name="role" id="role" aria-label="Select role" value={userState.role.value} onChange={onChangeHandler}>
                <option value="">Select one role</option>
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
              <input type="email" className="form-control" id="email" placeholder="Enter email" name = "email" value={userState.email.value} onChange={onChangeHandler} />
              <p id="errEmail" className='text-danger'></p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={userState.password.value} onChange={onChangeHandler} />
              <p id="errPass" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="cpassword" className="form-label">Confirmed Password</label>
              <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" name="confirmPass" value={confirmPass.value} onChange={handleCPasswordChange} />
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
export default NewUser1;
