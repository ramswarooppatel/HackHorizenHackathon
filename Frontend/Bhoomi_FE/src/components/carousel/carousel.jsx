import React from "react";
import C1 from '../../assets/images/C1.jpg';
import C2 from '../../assets/images/C2.jpg';
import C3 from '../../assets/images/C3.jpg';
import './Carousel.css'; // Make sure to import your CSS

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="mx-2 my-1  carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={C1} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} alt="Weekend enjoyment" />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h2 className="fw-bolder fs-1">Enjoy Fresh Vegitables!</h2>
                            <h2 className="fw-bolder fs-4 mb-3">with your family and Friends</h2>
                            <a href="/marketplace" className="mx-1 btn btn-danger">Explore</a>
                            <a href="/logout" className="mx-1 btn btn-primary">LogOut</a>
                            <a href="/" className=" mx-1 btn btn-success">Learn more</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={C2} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} alt="Book your show" />
                        <div className="carousel-caption text-end d-none d-md-block mb-5">
                            <h1 className="fw-bolder fs-1">Lorem ipsum dolor sit amet </h1>
                            <h2 className="text-warning fw-bolder fs-4 mb-3">Lorem ipsum dolor sit.</h2>
                            <a href="/book" className=" mx-1 btn btn-danger">Buy Now</a>
                            <a href="/" className="btn btn-success">Learn more</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={C3} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} alt="Relax and enjoy" />
                        <div className="carousel-caption text-start d-none d-md-block mb-5">
                            <h1 className="text-danger fw-bolder fs-1">Lorem ipsum dolor sit.</h1>
                            <h2 className="fw-bolder fs-4 mb-4">Lorem, ipsum dolor.</h2>
                            <a href="/book" className="mx-1 btn btn-danger mb-4">Contact Now</a>
                            <a href="/" className="btn btn-success mb-4">Learn more</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
