import React, { useState, useEffect } from 'react';

function TimeNow() {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{timeNow}</h1>
    </div>
  );
}

export default TimeNow;
