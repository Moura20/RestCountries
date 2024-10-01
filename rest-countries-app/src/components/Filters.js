
import React from 'react';

const Filters = ({ onFilterChange }) => {
    return (
        <div>
            <select onChange={(e) => onFilterChange('region', e.target.value)}>
                <option value="">Todas as regiões</option>
                <option value="Africa">África</option>
                <option value="Americas">Américas</option>
                <option value="Asia">Ásia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
            
            <select onChange={(e) => onFilterChange('population', e.target.value)}>
                <option value="">Todas as populações</option>
                <option value="<1M">&lt;1M</option>
                <option value="1M-10M">1M-10M</option>
                <option value="10M-100M">10M-100M</option>
                <option value=">100M">&gt;100M</option>
            </select>
        </div>
    );
};

export default Filters;
