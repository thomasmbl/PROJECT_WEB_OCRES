import React, { useEffect, useState } from "react";
import './Admin.css';


function Admin() {
    

    return(
        <div className="mainContent">
            <div>
                <input type="search" id="site-search" placeholder='Enter saison number' name="q"/>
                <button>GET</button>
                <div>
                    <label for="site-search">  Number of deaths = </label>
                </div>
            </div>

            <div>
                <input type="search" id="site-search" placeholder='Enter saison number' name="q"/>
                <button>DELETE</button>    
            </div>

            <div>
                <input type="search" id="site-search" placeholder='Enter saison number' name="q"/>
                <input type="search" id="site-search" placeholder='Enter death number' name="q"/>
                <button>ADD</button>    
            </div>

            <div>
                <input type="search" id="site-search" placeholder='Enter saison number' name="q"/>
                <input type="search" id="site-search" placeholder='Enter death number' name="q"/>
                <button>UPDATE</button>    
            </div>

            
            
        </div>
    )
}

export default Admin;

/*

const [quote, setQuote] = useState([])

    

  const fetchQuote = () => {
    return fetch("https://www.breakingbadapi.com/api/quote?author=Walter+White")
          .then((response) => response.json())
          .then((data) => setQuote(data));
  }

  useEffect(() => {
    fetchQuote();
  },[])

hello admin
            {quote.map((quoteObj) => (
                    <div key={quoteObj.quote_id}>
                        <p>"{quoteObj.quote}"</p>
                    </div>
                    ))}
            



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