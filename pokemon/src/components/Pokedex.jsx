import React, { useEffect, useState } from "react";

const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    fighting: "#e6e0d4",
    normal: "#f5f5f5",
};

const main_types = Object.keys(colors);

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            let fetchedPokemons = [];
            for (let i = 1; i <= 150; i++) {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await res.json();
                fetchedPokemons.push(data);
            }
            setPokemons(fetchedPokemons);
        };
        fetchPokemons();
    }, []);

    return (
        <>
        <div className="first">
            <h1>Pokedex</h1>
        </div>
        <div className="poke-container">
            {pokemons.map((pokemon) => {
                const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                const id = pokemon.id.toString().padStart(3, "0");
                const poke_types = pokemon.types.map((type) => type.type.name);
                const type = main_types.find((type) => poke_types.indexOf(type) > -1);
                const color = colors[type];

                return (
                    <div key={pokemon.id} className="pokemon" style={{ backgroundColor: color }}>
                        <div className="img-container">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={name} />
                        </div>
                        <div className="info">
                            <span className="number">#{id}</span>
                            <h3 className="name">{name}</h3>
                            <small className="type">Type: <span>{type}</span></small>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
};
export default Pokedex;
