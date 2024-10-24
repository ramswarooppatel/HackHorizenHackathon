import React from 'react';
import './Marketplace.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Marketplace = () => {
    return (
        <div className="main-container m-1 border border-danger">
            <Navbar />
            <nav className="categories">
                <ul className="category-list">
                    <li><a href="#">Fruits</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Organic</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#">Bakery</a></li>
                    <li><a href="#">Beverages</a></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <h1>Fresh From Farm to Table</h1>
                    <p>Get fresh produce delivered to your doorstep</p>
                </div>
            </section>

            <section className="featured-categories">
                <h2>Shop by Category</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <div className="category-image">
                            <img 
                                src="/api/placeholder/250/200" 
                                alt="Fruits" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="category-info">
                            <h3>Fresh Fruits</h3>
                            <p>Seasonal & Exotic Fruits</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-image">
                            <img 
                                src="/api/placeholder/250/200" 
                                alt="Vegetables" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="category-info">
                            <h3>Fresh Vegetables</h3>
                            <p>Local & Organic Vegetables</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-image">
                            <img 
                                src="/api/placeholder/250/200" 
                                alt="Dairy" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="category-info">
                            <h3>Dairy & Eggs</h3>
                            <p>Farm Fresh Products</p>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-image">
                            <img 
                                src="/api/placeholder/250/200" 
                                alt="Bakery" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="category-info">
                            <h3>Bakery</h3>
                            <p>Fresh Baked Goods</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="deals">
                <div className="deals-container">
                    <h2>Today's Best Deals</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img 
                                    src="/api/placeholder/200/150" 
                                    alt="Apples" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </div>
                            <div className="product-info">
                                <h3>Fresh Apples</h3>
                                <p>1kg pack</p>
                                <div className="price">₹2.99</div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img 
                                    src="/api/placeholder/200/150" 
                                    alt="Tomatoes" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </div>
                            <div className="product-info">
                                <h3>Organic Tomatoes</h3>
                                <p>500g pack</p>
                                <div className="price">₹1.99</div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img 
                                    src="/api/placeholder/200/150" 
                                    alt="Milk" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </div>
                            <div className="product-info">
                                <h3>Fresh Milk</h3>
                                <p>1L bottle</p>
                                <div className="price">₹3.49</div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img 
                                    src="/api/placeholder/200/150" 
                                    alt="Bread" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </div>
                            <div className="product-info">
                                <h3>Whole Grain Bread</h3>
                                <p>400g loaf</p>
                                <div className="price">₹2.49</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Marketplace;
