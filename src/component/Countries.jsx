
import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length} </h5>
                <ol>
                    {visitedCountries.map(country =>
                        <li
                            key={country.cca3}>
                            {country.name.common}
                        </li>)}
                </ol>
            </div>
            <div className='country-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;