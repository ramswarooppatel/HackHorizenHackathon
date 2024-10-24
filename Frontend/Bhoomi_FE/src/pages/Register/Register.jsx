import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import Footer from '../../components/Footer/Footer';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('Consumer'); // Default user type
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username: userName,
        password: password,
        email: email,
        user_type: userType,
        address: address,
      });

      // Handle successful registration
      console.log('Register successful:', response.data);
      // Redirect or store token here
    } catch (error) {
      // Check for errors and display appropriate messages
      if (error.response) {
        setError(error.response.data.error || 'Register failed');
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
          <h1 className="text-center">Register Yourself</h1>
          {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Username</label>
              <input type="text" className="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="userType" className="form-label">User Type</label>
              <select className="form-control" id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="Consumer">Consumer</option>
                <option value="Farmer">Farmer</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPass(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
