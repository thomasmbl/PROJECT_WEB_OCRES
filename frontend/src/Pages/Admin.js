import React, { useEffect, useState } from "react";
import './Admin.css';


function Admin() {
    const [quote, setQuote] = useState([])

    

  const fetchQuote = () => {
    return fetch("https://www.breakingbadapi.com/api/quote?author=Walter+White")
          .then((response) => response.json())
          .then((data) => setQuote(data));
  }

  useEffect(() => {
    fetchQuote();
  },[])

    return(
        <div className="mainContent">
            hello admin
            {quote && quote.length > 0 && quote.map((quoteObj, index) => (
                    <div key={quoteObj.quote_id}>
                        <p>"{quoteObj.quote}"</p>
                    </div>
                    ))}
            

        </div>
    )
}

export default Admin;

/*
const Admin= ({getText}) => {

    
    return(
        <div>
            hello admin
            <input
                        placeholder="Search by name"
                        autoFocus
                        onChange={(e) => getText(e.target.value)}
                    />
        </div>
    )
}

export default Admin;*/