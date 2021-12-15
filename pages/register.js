import React from 'react'
import Layout from '../layouts/Layout'
import { useState,SyntheticEvent } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';






export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLastName] = useState("");
  const [reapeatPassword, setRepeatPassword] = useState("");
  const router=useRouter();

  const submit = async (e) => {
    e.preventDefault();

    var user={name:name,
      last_name:last_name,
      email:email,
      password:password
      }
    
    axios.post('http://localhost:4000/api/register', 
      user
      
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(name)
    await router.push('/');
  
  }




    return (

        <Layout>
            <main class="container">
<div class="row">
<div class="col-3"></div>
  <div class="col-6" >
        <form onSubmit={submit}>
    <div class="row">
    <div class="form-group col-md-6">

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="First Name*" onChange={e=>setName(e.target.value)}/>
      <label for="floatingInput">First Name*</label>
    </div>
    </div>
    <br/>
    <div class="form-group col-md-6">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Last Name*" onChange={e=>setLastName(e.target.value)}/>
      <label for="floatingInput">Last Name*</label>
      </div>
    </div>
    </div>
    <br/>
    <div class="form-group row"></div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="Email*" onChange={e=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address*</label>
      
    </div>
    <br/>
    <div class="form-group row"></div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password*" onChange={e=>setPassword(e.target.value)}/>
      <label for="floatingInput">Password*</label>
      
    </div>
    <br/>
    <div class="form-group row"></div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Repeat Password*" onChange={e=>setRepeatPassword(e.target.value)}/>
      <label for="floatingInput">Repeat Password*</label>
      
    </div>

    <br></br>
    <div class="col text-center">
    <button id="btn" class=" btn btn-lg btn-dark "  type="submit"> Sign in</button>
    </div>
  </form>
  </div>
  <div class="col-3"></div>
  </div>
  </main>
        </Layout>
    )
}
