import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    // console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // console.log("Clicked!");
        // if(visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }

        // setVisited(visited ? false : true);

        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`visited ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>

            <button onClick={() => {
                handleVisitedFlag(country?.flags?.flags?.png)
            }}>Add Visited flag</button>
        </div>
    );
};

export default Country;