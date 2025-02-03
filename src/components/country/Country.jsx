import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area,cca3} = country;


    const [visited, setVisited] = useState(false);

    const handleVisited =() =>{
        setVisited(!visited);
    }
  
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area} sq</p>
            <p><small>Code : {cca3}</small></p>
            <p>{visited ? 'Visited' : 'Not Yet'}</p>
            <br />
            <hr />
            <button onClick={() =>{
                handleVisitedCountry(country)
            }}>Mark Visited</button>
            <br />
            <button onClick={handleVisited} >Visited</button>
        </div>
    );
};

export default Country;