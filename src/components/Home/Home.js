import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="content">

        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                  <div className="words-overlay">
                      <Link to="/lighting" className="words-overlay">lighting</Link>
                  </div>
                <img src="https://media.istockphoto.com/photos/dark-empty-room-with-reflective-tiles-floor-and-lights-3d-rendering-picture-id1186900859"  alt="lights" className="d-block w-100"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="assets/logo.png" alt="logo" id="logo"></img>
                </div>
                
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <div className="words-overlay">
                <Link to="/lifts" className="words-overlay">lifts</Link>
                </div>
                <img src="https://media.istockphoto.com/photos/an-auto-repair-shop-full-of-cars-to-be-fixed-picture-id177413862" alt="lift" className="d-block w-100"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="assets/logo.png" alt="logo" id="logo"></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <div className="words-overlay">
                <Link to="/flooring" className="words-overlay">flooring</Link>
                </div>
                <img src="https://media.istockphoto.com/photos/oil-leak-or-drop-from-engine-of-car-on-concrete-floor-check-and-auto-picture-id1136400107" alt="flooring" className="d-block w-100"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="assets/logo.png" alt="logo" id="logo"></img>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    )

}

export default Home;