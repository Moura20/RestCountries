
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => setCountry(data[0]));
    }, [name]);

    if (!country) return <div>Carregando...</div>;

    return (
        <div className="country-detail">
            <div className="detail-container">
                <h1>{country.name.official}</h1>
                <img className="country-flag" src={country.flags.svg} alt={`Bandeira de ${country.name.official}`} />
                <div className="country-info">
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <p><strong>Região:</strong> {country.region}</p>
                    <p><strong>Sub-região:</strong> {country.subregion}</p>
                    <p><strong>População:</strong> {country.population}</p>
                    <p><strong>Área:</strong> {country.area} km²</p>
                    <p><strong>Idiomas:</strong> {Object.values(country.languages).join(', ')}</p>
                    <p><strong>Moeda:</strong> {Object.values(country.currencies)[0].name}</p>
                    <p><strong>Fuso horário:</strong> {country.timezones.join(', ')}</p>
                    <p><strong>Domínio:</strong> {country.tld}</p>
                    <p><strong>Código de discagem:</strong> +{country.idd.root}{country.idd.suffixes[0]}</p>
                </div>
                <Link to="/" className="back-button">Voltar</Link>
            </div>
        </div>
    );
};

export default CountryDetail;
