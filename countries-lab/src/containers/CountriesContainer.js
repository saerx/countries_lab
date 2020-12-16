import {useEffect, useState} from "react";

import CountrySelect from "../components/CountrySelect";
import Country from "../components/Country";
import FavsList from "../components/FavsList";

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
        console.log(countries)
    }



    return (
        <>
        <h2>Container</h2>
        <CountrySelect />
        <Country />
        <FavsList />
        </>
    )
}

export default CountriesContainer;