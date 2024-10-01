
import React from 'react';

const SortOptions = ({ onSortChange }) => {
    return (
        <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="name">Ordenar por Nome</option>
            <option value="population">Ordenar por População</option>
            <option value="area">Ordenar por Área</option>
        </select>
    );
};

export default SortOptions;
