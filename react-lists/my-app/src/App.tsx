import './App.css';
import { PokemonList } from './PokemonList.tsx';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

/* const pokedexList = pokedex.map(pokemon =>
      <li key={pokemon.number}>
        {pokemon.name}
        </li>
      ); */
export function Pokemon() {
  return (
    <>
      <h1>Pokedex Array List</h1>
      <PokemonList pokedex={pokedex} />
    </>
  );
}

export default Pokemon;
