import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard';

export default function OurTeam() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.json')
          .then(res => res.json())
          .then(teams => setTeams(teams));
      }, []);

  return (
    <div className='w-full bg-gradient-to-b from-purple-100 to-blue-200 pb-20'>
        <div className='w-9/12 mx-auto '>
        <h1 className='text-center text-5xl font-bold mb-10 pt-16'>
        Meet our consultant experts.   
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
           teams.map(team=><TeamCard key={team.id} team={team}></TeamCard>) 
        }

        </div>
    </div>
    </div>
  )
}
