The solution involves checking if the state variable is initialized before accessing its properties.  Using optional chaining is a concise approach.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name || 'Loading...'}</Text> {/* Optional chaining */}
      {/* Alternative: Conditional rendering */}
      {/* {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>} */}
    </View>
  );
}
```

The `data?.name` utilizes optional chaining (`?.`). If `data` is `null` or `undefined`, the expression short-circuits, avoiding the error and returning `undefined` (which is rendered as nothing).  We add `|| 'Loading...'` to display a placeholder message in case data hasn't been loaded yet.  Alternatively, conditional rendering can achieve the same with more explicit checks.