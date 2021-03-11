import React, { useEffect, useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams,setTeam] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const allTeams = data.teams.slice(0,15);
            setTeam(allTeams)
        })
    },[])
    return (
        <div>
            <HomeBanner />
            <div className="container">
                <div className="row">
                    {
                        teams && teams.map(team => <Teams team={team} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;