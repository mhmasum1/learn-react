import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`Country ${visited ? 'bgColorCountry' : 'non-bgColorCountry'} `}>
            <h3 >Name:  {name.common}</h3>
            <p>Population : {population}</p>
            <p>Area: {area}</p>
            <small>Code :{cca3}</small>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {/* {visited && '   I have visited this country'} */}
            {visited ? '   I have visited this country' : ' I want to visit this country'}
        </div>
    );
};
export default Country;