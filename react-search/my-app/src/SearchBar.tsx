import React from 'react';

type Props = {
  query: string;
  onSearchChange: (newIndex: string) => void;
};

export function SearchBar({ query, onSearchChange }: Props) {
  function handleInput(e: any) {
    onSearchChange(e.target.value);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder="Search"
      />
    </form>
  );
}
