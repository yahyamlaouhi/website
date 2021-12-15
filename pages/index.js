import { Router, useRouter } from 'next/router';
import React from 'react'
import Layout from '../layouts/Layout'
import { useState } from 'react';
import { useEffect } from 'react';
import Home from '../layouts/Home';
import Logo from '../layouts/Logo';


export default function index() {

    const [auth,setAuth]=useState(false);

    const router= useRouter()
    

    
        
    return (
       <Home>
            <>
            
            <Logo data={true}></Logo>
        
            <p style={{textAlign:"center"}}> Hello world </p>
          

            </>
        </Home>
    
    )
}
