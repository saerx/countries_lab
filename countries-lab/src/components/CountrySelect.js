import { useState } from "react";
import Country from "../components/Country";
const CountrySelect = ({countries}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)


    const handleSelectChange = event => {
        setSelectedCountry(event.target.value);
    };
    
    


    return (
        <div>
        <select onChange={handleSelectChange}> 
        {countries.map(country => 
            <option key={country.numericCode} value={country}>{country.name}</option>
        )}
        </select>
        <Country country={selectedCountry}/>
        </div>
    );
}

export default CountrySelect;