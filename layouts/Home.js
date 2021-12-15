import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'


export default function Layout(props) {
  







    return (
    <>

  
  <head>
    
    

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    

    

    
  </head>


    
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid"  style={{    marginLeft: "80px" ,  height: "83px"}}>
  <a class="navbar-brand" href="#">
    <Logo data={false}></Logo> 
  </a>

  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0" style={{    marginLeft: "80px"}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>
      </ul>
  </div>
  </div>
</nav>
<body >
<main class="container">


{props.children}
<br></br>
</main>




      
  </body>

  <footer >
  <Logo data={false}></Logo>

  <div class="text-center p-3"  style={{backgroundColor:"black"}}>
    © 2020 Copyright:
  </div>
</footer>

    </>
    )
}