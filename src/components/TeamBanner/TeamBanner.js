import React from "react";
import './TeamBanner.css'

const TeamBanner = (props) => {
  const {strTeamBadge,strTeamFanart1,strStadiumThumb} = props.team
  return (
    <div mb-5>
      <header className="team-banner-section">
        <div className="card bg-dark ">
        <img src={strStadiumThumb} className="card-img img-fluid" id="banner-img" alt=""/>
        <div className="card-img-overlay">
          <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                  <img className="badge-img img-fluid" src={strTeamBadge} alt=""/>
              </div>
            </div>
        </div>
    </div>

        {/* <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
                <h1 className="font-weight-light">Team Tracker</h1>
            </div>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default TeamBanner;
