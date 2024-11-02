import React from 'react';

type Props = {
  items: string;
};

export function Banner({ items }: Props) {
  return <div className="banner">{items}</div>;
}
