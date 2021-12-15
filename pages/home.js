import { Router, useRouter } from 'next/router';
import React from 'react'
import Layout from '../layouts/Layout'
import { useState } from 'react';
import { useEffect } from 'react';
import Home from '../layouts/Home';
import Logo from '../layouts/Logo';


export default function home() {

    const [auth,setAuth]=useState(false);

    const router= useRouter()
    

    
        
    return (
       <Home>
            <>
            
            <Logo data={true}></Logo>
            <br></br>
            <br/>
        <h1>
            <p style={{textAlign:"center" ,color:"black"}}> The Logo Above is Made In pure CSS </p>
          
            </h1>
            </>
        </Home>
    
    )
}
