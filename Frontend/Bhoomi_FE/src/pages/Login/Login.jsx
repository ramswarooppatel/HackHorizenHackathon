import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import Footer from '../../components/Footer/Footer';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: userName,
        password: password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token); // Store the token
      navigate('/add-product'); // Redirect to the Add Product page
    } catch (error) {
      // Check for errors and display appropriate messages
      if (error.response) {
        setError(error.response.data.error || 'Login failed');
      } else if (error.request) {
        setError('No response from server');
      } else {
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="main-box border border-primary d-flex align-items-center justify-content-center">
        <div className="form-container p-5 border border-danger">
          <h1 className="text-center">Login</h1>
          {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Enter Your Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="userName" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                value={password} 
                onChange={(e) => setPass(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
