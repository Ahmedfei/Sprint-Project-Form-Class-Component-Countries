
import React from 'react';
import CountriesList from './CountriesList';


const CountryCard = props => {
   console.log(props)
  return (
    <div className="Country">
     <h2>{props.countries.name}</h2>
     <p>{props.countries.population}</p>
     <p>{props.countries.land_area}</p>
    </div>
  );
};


export default CountryCard;
