```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      setServerData(data);
    };
    fetchData();
  }, []);

  if (!serverData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{serverData.message}</h1>
      <ClientComponent data={serverData} />
    </div>
  );
}

function ClientComponent({ data }) {
  return (
    <div>
      <p>Client Component Data: {data.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  // Simulate data fetching and change
  let message = 'Initial message';
  if (req.query.update) {
    message = 'Updated message';
  }

  res.status(200).json({ message });
}
```