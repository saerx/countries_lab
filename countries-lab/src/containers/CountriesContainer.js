import {useEffect, useState} from "react";

import CountrySelect from "../components/CountrySelect";
import Country from "../components/Country";
import FavsList from "../components/FavsList";
import Population from "../components/Population";

function CountriesContainer() {


    const url = "https://restcountries.eu/rest/v2/all"

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries()
    }, [])



    const getCountries = () => {
        fetch(url)
            .then(res => res.json())
            .then(countriesList => setCountries(countriesList))
      
    }



    return (
        <>
        <h2>Countries Info - App</h2>
        <Population countries={countries}/>
        <CountrySelect countries={countries}/>
        <Country />
        <FavsList />
        </>
    )
}

export default CountriesContainer;