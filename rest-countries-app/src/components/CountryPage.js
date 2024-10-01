
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SortOptions from './SortOptions';
import CountryList from './CountryList';
import './CountryPage.css';

const CountryPage = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filters, setFilters] = useState({
        region: '',
        population: ''
    });

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setFilteredCountries(data);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = countries.filter(country => 
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (currentFilters) => {
        let filtered = countries;

        // Filtrar por região
        if (currentFilters.region) {
            filtered = filtered.filter(country => country.region === currentFilters.region);
        }

        // Filtrar por população
        if (currentFilters.population) {
            filtered = filtered.filter(country => {
                const population = country.population;
                if (currentFilters.population === '<1M') return population < 1000000;
                if (currentFilters.population === '1M-10M') return population >= 1000000 && population <= 10000000;
                if (currentFilters.population === '10M-100M') return population >= 10000000 && population <= 100000000;
                if (currentFilters.population === '>100M') return population > 100000000;
                return true;
            });
        }

        setFilteredCountries(filtered);
    };

    const handleSortChange = (sortKey) => {
        const sortedCountries = [...filteredCountries].sort((a, b) => {
            if (sortKey === 'name') {
                return a.name.common.localeCompare(b.name.common);
            } else if (sortKey === 'population') {
                return a.population - b.population;
            } else if (sortKey === 'area') {
                return a.area - b.area;
            }
            return 0;
        });
        setFilteredCountries(sortedCountries);
    };

    return (
        <div className="country-page">
            <div className="filters-container">
                <Filters onFilterChange={handleFilterChange} />
                <SortOptions onSortChange={handleSortChange} />
                <SearchBar onSearch={handleSearch} />
            </div>
            <CountryList countries={filteredCountries} />
        </div>
    );
};

export default CountryPage;
