import React, { useState } from "react";
import './dashboard.css';

const Dashboard = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <div className={`dashboard ₹{isDarkTheme ? 'dark' : 'light'}`}>
            <div className="theme-switch">
                <input 
                    type="checkbox" 
                    id="theme-toggle" 
                    checked={isDarkTheme} 
                    onChange={toggleTheme} 
                />
                {/* <label htmlFor="theme-toggle">Toggle Theme</label> */}
            </div>
            <div className="container">
                <header className="header">
                    <div className="profile-section">
                        <img src="farmer-profile.jpg" alt="" className="profile-pic" />
                        <h1>Welcome, Kishan</h1>
                    </div>
                </header>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Total Revenue</h3>
                        <div className="value">₹24,500</div>
                    </div>
                    <div className="stat-card">
                        <h3>Crop Yield</h3>
                        <div className="value">1,200 tons</div>
                    </div>
                    <div className="stat-card">
                        <h3>Livestock Count</h3>
                        <div className="value">250</div>
                    </div>
                    <div className="stat-card">
                        <h3>Equipment Efficiency</h3>
                        <div className="value">92%</div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="profile-card">
                        <h2>Farmer Profile</h2>
                        <div className="profile-info">
                            <div className="info-item">
                                <span className="info-label">Name:</span>
                                <span>Kishan</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Farm Size:</span>
                                <span>500 acres</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Location:</span>
                                <span>Midwest, USA</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Experience:</span>
                                <span>15 years</span>
                            </div>
                        </div>
                    </div>
                    <div className="sales-card">
                        <h2>Sales Overview</h2>
                        <div className="sales-chart">
                            <div className="chart-bars">
                                <div className="bar-container">
                                    <div className="bar crops" style={{ height: '80%' }}>
                                        <span className="bar-value">₹8,000</span>
                                    </div>
                                    <div className="bar dairy" style={{ height: '60%' }}>
                                        <span className="bar-value">₹6,000</span>
                                    </div>
                                    <div className="bar organic" style={{ height: '70%' }}>
                                        <span className="bar-value">₹4,700</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="additional-sections">
                    <div className="weather-widget">
                        <h2>Weather Forecast</h2>
                        <p>Sunny, 25°C</p>
                    </div>
                    <div className="task-list">
                        <h2>Task List</h2>
                        <div className="task-item">
                            <input type="checkbox" id="task1" />
                            <label htmlFor="task1">Check irrigation system</label>
                        </div>
                        <div className="task-item">
                            <input type="checkbox" id="task2" />
                            <label htmlFor="task2">Plant new seeds</label>
                        </div>
                        <div className="task-item">
                            <input type="checkbox" id="task3" />
                            <label htmlFor="task3">Schedule vet visit for livestock</label>
                        </div>
                    </div>
                    <div className="inventory-tracker">
                        <h2>Inventory Tracker</h2>
                        <div className="inventory-item">
                            <span>Feed Stock</span>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="inventory-item">
                            <span>Fertilizer</span>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                        <div className="inventory-item">
                            <span>Seeds</span>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
