import React from "react";
import './HomeBanner.css';
import banner from '../../images/football.jpg'

const HomeBanner = () => {
  return (
    <div>
      <header className="banner-section">
      <div className="card bg-dark ">
          <img src={banner} className="card-img img-fluid" id="banner-img" alt=""/>
          <div className="card-img-overlay">
            <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                    <h1>All Football</h1>
                </div>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeBanner;
