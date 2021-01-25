import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App({ login }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setUser);
  }, [login]);

  if (user.name) {
    return (
      <div>
        <h1>Welkom {user.name}</h1>
      </div>
    );
  }
  return <div className="App">Please loging with a valid user!</div>;
}
