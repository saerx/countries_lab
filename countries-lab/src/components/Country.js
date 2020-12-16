const Country = ({country}) => {

    if (!country) return null;

    console.log(country)
    return (
        <div className="country-info">
            <h2>{country.name}</h2>
            <img width="100px" height="60px" src={country.flag} alt="Country Flag"/>
        </div>
    )
}

export default Country;