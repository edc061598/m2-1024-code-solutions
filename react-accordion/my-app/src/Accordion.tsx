import React, { useState } from 'react';
import { TopicCard } from './TopicCard';

type Props = {
  topics: { content: string; title: string }[];
};

export function Accordion({ topics }: Props) {
  const [activeTopic, setActiveTopic] = useState(null);

  function handleClick(index: any) {
    setActiveTopic(activeTopic === index ? null : index);
  }

  return (
    <>
      <h1>React Accordion</h1>
      <div className="accordion">
        {topics.map((topic, index) => (
          <div key={index}>
            <button type="button" onClick={() => handleClick(index)}>
              {topic.title}
            </button>
            {activeTopic === index && (
              <TopicCard title="" content={topic.content} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
