import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import NavBar from '../Components/NavBar'
// import { NavLink } from 'react-router-dom'
// import Footer from './Components/Footer'
import Myvideo from '../Components/vidu.mp4'
export default function Home() {
    return (
        <div>
           <p className="bg-dark text-light px-4 "></p>
                                <video style={{backgroundColor:"#ffd"}} className="App" width="500px" height="500px" controls autoplay >
                                    <source src={Myvideo} type="video/mp4"/>
                                    not found
                            </video>
        </div>
    )
}