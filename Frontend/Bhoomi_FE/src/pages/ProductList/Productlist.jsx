import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/products/');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const addToCart = async (productId) => {
        // Implement adding to cart functionality here
        alert(`Product ${productId} added to cart`);
    };

    return (
        <div className="container mt-5">
            <h2>Product List</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.desc}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
