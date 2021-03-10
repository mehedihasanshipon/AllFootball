import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamInfo from '../TeamInfo/TeamInfo';
import './TeamDetail.css'

const TeamDetail = () => {
    const {id} = useParams();
    const [team,setTeam] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]));
    },[id])
    return (
        <div >
            <TeamBanner team={team} />
            <div className="bg text-white pt-2">
                <TeamInfo team={team} />
            </div>
        </div>
    );
};

export default TeamDetail;