import React from 'react';
import "./Navbar.css"
import {logout, auth} from "../firebase"




   

const Navbar = () =>{
	return (

  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
  
  

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <div id="home"><button id="navbarbtns"><a class="nav-link active" aria-current="page" href="/">Home</a></button></div> 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
          <ul>
  
           <div id="navbar"><li><button id="navbarbtns"><a class="dropdown-item" href="/contact"> Contact Us</a></button></li></div> 
            
          
           <div id="navbar"> <li><button id="navbarbtns"><a class="dropdown-item" href="/Faq"> FAQ</a></button></li></div>
          
          <div id="navbar">  <li><button id="navbarbtns"><a class="dropdown-item" href="/dashboard">Profile</a></button></li></div>
          <div id="navbar"> <li><button id="navbarbtns"><a class="dropdown-item" href="/Login">Login</a></button></li></div> 
          <div id="navbar">  <li><a href="/"><button className="dashboard__btn" id="navbarbtns" onClick={logout}>
        Logout</button></a>
      </li>  </div>
      
          </ul>
         
        </li>
     
      </ul>
  
    </div>
  </div>
</nav>
    )};

export default Navbar