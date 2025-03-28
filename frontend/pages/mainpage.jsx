import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // State Hook: Declare a state variable
  const [username, setUsername] = useState('');

  // Effect Hook: Side-effect logic, such as fetching data
  useEffect(() => {
    // This will run once after the initial render
    console.log('Component mounted or count changed');

    // Optional clean-up function
    return () => {
      console.log('Component unmounted or count will change');
    };
  }, [count]); // Dependencies array, runs when `count` changes

  // Event handler for button click
  const handleClick = () => {
    setCount(count + 1); // Increment the count
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
