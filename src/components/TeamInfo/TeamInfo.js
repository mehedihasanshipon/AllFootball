import React from 'react';
import './TeamInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPodcast,faFlag,faMars } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons'

const TeamInfo = (props) => {
    const {strTeamFanart1,strTeam,intFormedYear,strCountry,strSport,strGender,strTeamFanart2,strDescriptionEN,strKeywords,strLeague,strTwitter,strFacebook,strYoutube} = props.team;
    
    return (
        <div className="container mt-5">
            <div className="row my-5  align-items-center info ">
                <div className="col-md-6 ">
                    <div id="info-text">
                        <h2 className="mx-3">  {strTeam}</h2>
                        <h6><span className="mx-3"><FontAwesomeIcon icon={faPodcast} /></span> Founded: {intFormedYear}</h6>
                        <h6><span className="mx-3"><FontAwesomeIcon icon={faFlag} /></span> Country: {strCountry} </h6>
                        <h6><span className="mx-3"><FontAwesomeIcon icon={faFutbol} /></span> Sport Type: {strSport}</h6>
                        <h6><span className="mx-3"><FontAwesomeIcon icon={faMars} /></span> Gender: {strGender} </h6>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-lg-end justify-content-sm-start justify-content-md-start ">
                    <div id="info-img">
                        {strGender && strGender.toLowerCase() === "male"
                        ?<img className="img-fluid" src={strTeamFanart1} alt=""/>
                        :<img className="img-fluid" src={strTeamFanart2} alt=""/>}
                    </div>
                </div>
            </div>
            <div>
                <p>{strDescriptionEN}</p>
                <p>{strKeywords}</p>
                <p>League: {strLeague}</p>
            </div>
            <div className="text-center d-flex justify-content-center my-5">
                <a href={`https://www.${strTwitter}`} target="blank" className="mx-4 social-icon" id="twitter"><FontAwesomeIcon className="ico" icon={faTwitter} /></a>
                <a href={`https://${strFacebook}`} target="blank" className="mx-4 social-icon" id="fb"><FontAwesomeIcon className="ico" icon={faFacebookF} /></a>
                <a href={`https://${strYoutube}`} target="blank" className="mx-4 social-icon" id="youtube"><FontAwesomeIcon className="ico" icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default TeamInfo;