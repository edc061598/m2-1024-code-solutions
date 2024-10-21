type Props = {
  pokedex: {
    number: string;
    name: string;
  }[];
};

export function PokemonList({ pokedex }: Props) {
  const pokedexList = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return (
    <>
      <ul>{pokedexList}</ul>
    </>
  );
}
