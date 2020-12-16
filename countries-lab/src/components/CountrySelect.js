import { useState } from "react";
import Country from "../components/Country";
const CountrySelect = ({countries}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)


    const handleSelectChange = event => {
        const filteredCountries = countries.filter((country) => {
            if (country.alpha3Code === event.target.value) {
                return country;
            }
           
        })
        
        setSelectedCountry(filteredCountries[0]);
    };

    // const addToFavs = event => {
    //     const newFav = selectedCountry
    // }
    
    
    // console.log(countries[0].name)

    return (
        <div>
        <select onChange={handleSelectChange}> 
        {countries.map(country => 
            <option key={country.numericCode} value={country.alpha3Code}>{country.name}</option>
        )}
        </select>
        <Country country={selectedCountry}/>
        {/* <button onClick={addToFavs}>
            Add to Favourites
        </button> */}
        </div>
    );
}

export default CountrySelect;