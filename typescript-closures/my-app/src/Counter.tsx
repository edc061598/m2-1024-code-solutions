import { useCallback } from 'react';
import { useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    // fetch data
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    const data = getData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [getData]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
