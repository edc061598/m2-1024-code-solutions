import React from 'react';

type Props = {
  title: string;
  content: string;
};

export function TopicCard({ content }: Props) {
  return (
    <>
      <div></div>
      <div>{content}</div>
    </>
  );
}
