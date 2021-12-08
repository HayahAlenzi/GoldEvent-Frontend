import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import "./signUp.css"

export default function SingUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPas] = useState("")

    const history= useHistory()
    


const nemeVlue=(e)=>{
setName(e.target.value)
}

const emailValue=(e)=>{
    setEmail(e.target.value)
    }

const passValue=(e)=>{
        setPas(e.target.value)
        }

const addUser=async ()=>{
    const response = await axios.post("https://tuwaiq-goldevent-backend.herokuapp.com/signUp", { name: name,
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.status === 201){
          history.push("/LogIn")
      }
    };     

    return (
        <div id="b">
            <input  onChange={(e)=>{nemeVlue(e)}} placeholder="Enter name"/>
            <input onChange={(e) =>{ emailValue(e); }}placeholder="enter your email"/>
            <input  type="password" onChange={(e) =>{ passValue(e); }}placeholder="enter your pass"/>
        <button  onClick={()=>{addUser()}}>Submet</button>
        {/* <button onClick={() => {addUser()}}>sign up </button> */}

        </div>
    )
}
