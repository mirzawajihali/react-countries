
import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css"

const countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries , setVisitedCountries] = useState([]);


    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country];

        setVisitedCountries(newVisitedCountries)
    }

    useEffect(() => {
        fetch( `https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div >

            

            <h5>countries : {countries.length}</h5>

            <div>
                <h5>visited Countries : {visitedCountries.length}</h5>
                <ul>
                    
                {
                    visitedCountries.map(country =><li key={country.cca3} >{country.name.common}</li>
                    )
                }
                </ul>
            </div>

         <div className="country-container">
         {
                countries.map(country=><Country key ={country.cca3} country={country} handleVisitedCountry ={handleVisitedCountry}></Country> 
                )
            }
         </div>
            
        </div>
    );
};

export default countries;