import React,{useState} from 'react'
import Activities from "./Components/Activities"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import LogIn from "./Components/LogIn"
import NavBar from "./Components/NavBar"
import SignUp from "./Components/SignUp"
import { Route} from "react-router-dom";
import Footer from './Components/Footer'

function App() {
const [token, setToken] = useState("")



  return (
    <div>
      
      <div>
       <NavBar />
      <Route exact path="/Activities" render={()=>{return <Activities Token={token} />}} />
      <Route exact path="/Cart" render={()=>{return <Cart Token={token} />}}   />
      <Route exact path="/Home" component={Home} /> 
      <Route exact path="/LogIn" render={()=>{return < LogIn setTokenP={setToken} />} }/> 
      <Route exact path="/SignUp" component={SignUp} /> 



 
    </div>
    <Footer/>
    </div>
  );
}

export default App;
