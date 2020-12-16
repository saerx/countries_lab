const Country = ({country}) => {

    if (!country) return null;

    console.log(country)
    return (
        <>
            <h2>{country}</h2>
        </>
    )
}

export default Country;