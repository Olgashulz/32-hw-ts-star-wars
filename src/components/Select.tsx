import React, {Component} from 'react';

interface Props {
    planets: string[]
}

const Select = ({planets}:Props) => {
        return (
            <select id="country" name="country">
                {planets.map((planet, index) => (
                    <option key={index} value={planet}>{planet}</option>
                ))}
            </select>
        );
    }
export default Select;