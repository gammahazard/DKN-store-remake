import React from 'react';






   

const Navbar = () =>{
	return (

  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DKN Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  
            <li><a class="dropdown-item" href="/contact"> Contact Us</a></li>
            
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/Faq"> FAQ</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/profile">Profile</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/"></a></li>
          </ul>
         
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1"></a>
        </li>
      </ul>
      <form class="d-flex">

       
      </form>
    </div>
  </div>
</nav>
    )};

export default Navbar