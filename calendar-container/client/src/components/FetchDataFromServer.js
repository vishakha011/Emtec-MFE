import React, { useState, useEffect } from 'react';


const FetchDataFromServer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <p>{!data ? "Loading..." : data}</p>
  )
};

export default FetchDataFromServer();