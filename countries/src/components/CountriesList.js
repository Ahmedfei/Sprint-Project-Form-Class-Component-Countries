import React from 'react';
import CountryCard from './CountryCard';


 function CountriesList(props){

  // console.log(props)


  
    return (
      <div className="Countries">
        {props.countries.map((country) =>
           
            < CountryCard  countries={country}/>
        
          
          )}
        
      </div>
    );
  }


export default CountriesList;
