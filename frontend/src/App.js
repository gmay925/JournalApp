import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <p>{!data ? 'Loading..' : data}</p>
      <p> You clicked {data} times</p>
      <button onClick={() => setData(data + 1)}>Click me</button>
    </div>
  );
}

export default App;
