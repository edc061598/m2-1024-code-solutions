import React from 'react';

type Props = {
  items: string[];
  query: string;
};

export function Items({ items, query }: Props) {
  const filter = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filter.length ? (
        <ul className="my-list">
          {filter.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items match the filter</p>
      )}
    </>
  );
}
