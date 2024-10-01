
import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
    return (
        <div className="country-list">
            {countries.map(country => (
                <div key={country.name.common} className="country-item">
                    <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} />
                    <h2>{country.name.common}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Região: {country.region}</p>
                    <Link to={`/country/${country.name.common}`} className="link">Ver mais detalhes</Link>
                </div>
            ))}
        </div>
    );
};

export default CountryList;
