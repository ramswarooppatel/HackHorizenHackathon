import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [ownerId, setOwnerId] = useState(null); // New state for owner ID
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchOwnerId = async () => {
      try {
          const token = localStorage.getItem('token');
          console.log(token);
          setOwnerId(token);
      } catch (err) {
          console.error('Error fetching owner ID:', err);
          setError('Failed to fetch owner ID.');
      }
  };

    fetchOwnerId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    console.log("Submitting product:", {
      title,
      desc,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
      owner: ownerId, // Include owner ID in the submission
    });

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await axios.post('http://127.0.0.1:8000/api/products/add/', {
        title,
        desc,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
        owner: ownerId, // Include owner in the request
      }, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      setSuccess('Product added successfully!');
      console.log('Product added:', response.data);
      setTitle('');
      setDesc('');
      setPrice('');
      setQuantity(0);
    } catch (error) {
      console.error('Error response:', error.response);
      if (error.response) {
        setError(error.response.data.error || 'Failed to add product');
      } else {
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="main-box border border-primary d-flex align-items-center justify-content-center">
        <div className="form-container p-5 border border-danger">
          <h1 className="text-center">Add Product</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description</label>
              <textarea className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input type="number" className="form-control" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Add Product</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProduct;
