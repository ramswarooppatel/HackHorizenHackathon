import React, {useState } from 'react';
import axios from 'axios'; 
import './Login.css'
function Login() {

  const [userName,setUserName]=useState('');
  const [password,setPass]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: userName,
        password: password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);
      // You can store the token or redirect here
    } catch (error) {
      // Check for errors and display appropriate messages
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.log(error.response.data.error || 'Login failed'); // Customize as needed
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response from server');
      } else {
        // Something happened in setting up the request
        console.log('Error: ' + error.message);
      }
    }
  };

  return (

    <div className="main-box border border-primary d-flex align-items-center justify-content-center">
      <div className="form-container p-5 border border-danger">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="userName" className="form-label">Enter You Name</label>
            <input type="text" className="form-control" id="userName" value={userName} onChange={(e)=> setUserName(e.target.value)}  />
             
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control"  id="exampleInputPassword1" value={password} onChange={(e)=> setPass(e.target.value)}/>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Login