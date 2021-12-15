import Layout from "../layouts/Layout";
import { useState,SyntheticEvent } from "react";
import { useRouter } from 'next/router';
import axios from "axios";


function Login(){
  const router=useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    var user={
      email:email,
      password:password
      }
    
    axios.post('http://localhost:4000/api/login', 
      user
      
    )
    .then(function (response) {
      
      if(response){
      localStorage.setItem("token",response.data.token);
       router.push('/home');
      }


    })
    .catch(function (error) {
      console.log(error);
      alert("email or password invalid");

    });
    
 
  
  }



return (
    <Layout>
    <main class="container">
<div class="row">
<div class="col-3"></div>
  <div class="col-6" >
    <form onSubmit={submit}>
  

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="Email*" onChange={e=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address*</label>
    </div>
    <br/>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password*" onChange={e=>setPassword(e.target.value)}/>
      <label for="floatingInput">Password*</label>
    </div>
    <br/>
    <br/>
    <br/>

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

export default Login;