const Population = ({countries}) => {

    if (!countries) return null;
    
    const popList = countries.map((country) =>
        country.population);
    
    const getPopTotal = function (list) {
        const total = list.reduce((runningTotal, population) => {
            return runningTotal + population;
        }, 0);
        return total;
    };

    const populationTotal = getPopTotal(popList);


    return (
        <>
            <h3>Population of all Countries: {populationTotal} </h3>
        </>
    )
}

export default Population;