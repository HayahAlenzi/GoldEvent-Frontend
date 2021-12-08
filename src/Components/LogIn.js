import React ,{useEffect, useState}from 'react'
import { useHistory , Link} from "react-router-dom";
import axios from 'axios';



export default function LogIn({setTokenP}) {

// const [t, setT] = useState("")

const [emailF, setEmail] = useState("")
const [passF, setPass] = useState("")

const changeEmail    = (e) => {setEmail(e.target.value);};
const changePassword = (e) => { setPass(e.target.value);};
const history=useHistory() 



const addUser = async()=> {
const res = await axios.post("https://tuwaiq-goldevent-backend.herokuapp.com/login", {
     email: emailF,
      password : passF

})
console.log(res);
// setT(res.data.token)

setTokenP(res.data.token)

history.push("/Activities");


}

    return (
        <>
      
        <div className="vh-100 d-flex text-light justify-content-center align-items-center ">
            <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
                <h4 >Email</h4>
                <input placeholder="enterEmail" onChange={(e)=>{changeEmail(e)}} className="form-control mb-5 w-75 m-auto" />
                <h4> Password </h4>
                <input type="password" placeholder="enterPassWord" onChange={(e)=>{changePassword (e)}} className=" m-auto mb-5 form-control w-75 m-3" />
                <button className=" btn btn-info px-5 fw-bold py-1" onClick={()=>{addUser()}}> log in </button>
            
              <Link to="/SignUp">  <p className="mt-2 mb-5"> Don't have an account? Create account</p></Link>  
            </div>
        </div>
        </>
    )
}
