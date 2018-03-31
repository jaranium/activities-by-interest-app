import React from 'react';

const SearchBox = props => {
    console.log('props in Search Box', props)
    return (
        <form onSubmit={props.handleSubmit}>
            <br /><label>
                <h2>Pick your the city you want to explore: </h2>
                <select value={props.value} onChange={props.handleChange}>
                    <option value="San Diego">San Diego</option>
                    <option value="Culver City">Culver City</option>
                    <option value="Torrance">Torrance</option>
                    <option value="Beverly Hills">Beverly Hills</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default SearchBox;