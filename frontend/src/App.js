import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [charac, setCharac] = useState([]);

  const fetchData = () => {
    return fetch("https://www.breakingbadapi.com/api/characters?name=Walter+White")
          .then((response) => response.json())
          .then((data) => setCharac(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <body>
      <header>
        <img className="img" src={require('./Breaking-Bad.jpg')} alt="banner"/>
        
      </header>

      <div className="Character">
        {charac && charac.length > 0 && charac.map((characObj, index) => (
            <><h1 key={characObj.char_id}>{characObj.name}</h1>
            <img key={characObj.char_id} src={characObj.img} alt="img"></img></>
        ))}
      </div>
      


    </body>
    
  );
}

export default App;
