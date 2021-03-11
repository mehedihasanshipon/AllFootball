import React from 'react';
import { useHistory } from 'react-router';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const {strTeamBadge,strTeam,strSport,idTeam} = props.team;

    const history = useHistory();
    const handleDynamicRoute =()=>{
        history.push(`/team/${idTeam}`);
    }
    return (
        <div className="col-md-6 col-lg-4 mt-5 ">
            <div className="text-center card-custom">
                <img className="img-fluid text-center" id="card-img-top" src={strTeamBadge} alt=""/>
                <div className="">
                    <h5 className="my-3">{strTeam}</h5>
                    <p className="my-3">Sports Type: {strSport}</p>
                    <button onClick={handleDynamicRoute} className="btn btn-primary ">Explore  <span className="mx-3"><FontAwesomeIcon icon={faArrowRight} /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Teams;