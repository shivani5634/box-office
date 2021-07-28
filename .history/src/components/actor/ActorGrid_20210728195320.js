import React from 'react';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({data}) => {
  return <div>{
  data.map(({person})=>(
      <ActorCard key={person.id} name={person.name} country={person.country?person.country.name:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} image=
  ))
  
};
</div>;

export default ActorGrid;
