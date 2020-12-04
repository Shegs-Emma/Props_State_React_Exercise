import React from 'react';
import classes from './Pokecard.module.css';

const PokemonItem = (props) => (
    <div className={classes.PokemonItem}>
        <h2 className={classes.PokemonName}>{props.name}</h2>
        <img src={props.image} alt={props.name} />
        <h3 className={classes.PokemonType}>{props.type}</h3>
    </div>
)

export default PokemonItem;