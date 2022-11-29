import React, { useEffect, useState } from "react";
import "./Home.css";
import charac from "./Admin";
import fetchData from "../utils/fetchData";
import Dead from "../images/dead.gif";
import Gif from "./Gif";


function Home() {

    const [text, setText] = useState("Walter White")
    const [data, setData] = useState([])
    const [quote, setQuote] = useState([])
    

    useEffect(() => {
        const getData = async () => {
          const result = await fetchData(text)
          setData(result.data)
          console.log(result);
        }
        getData();
    }, [text]);

    const fetchQuote = () => {
        return fetch("https://www.breakingbadapi.com/api/quote/random")
              .then((response) => response.json())
              .then((data) => setQuote(data));
    }
    
    useEffect(() => {
        fetchQuote();
    },[])


    const getText = (text) => {
        setText(text);
        fetchQuote();
        console.log(text);
    }
    
    return(
        <div className="mainContent">
            <div className="searchbar">
                <label className="label">Search for a character : </label>
                <select onChange={(e) => {
                    getText(e.target.value);
                }}>
                    <option value="Walter White">Walter White</option>
                    <option value="Jesse Pinkman">Jesse Pinkman</option>
                    <option value="Skyler White">Skyler White</option>
                    <option value="Walter White Jr.">Walter White Jr.</option>
                    <option value="Henry Schrader">Henry Schrader</option>
                    <option value="Marie Schrader">Marie Schrader</option>
                    <option value="Mike Ehrmantraut">Mike Ehrmantraut</option>
                    <option value="Saul Goodman">Saul Goodman</option>
                    <option value="Gustavo Fring">Gustavo Fring</option>
                    <option value="Hector Salamanca">Hector Salamanca</option>
                    <option value="Domingo Molina">Domingo Molina</option>
                    <option value="Tuco Salamanca">Tuco Salamanca</option>
                    <option value="Todd Alquist">Todd Alquist</option>
                    <option value="Jane Margolis">Jane Margolis</option>
                    <option value="Brandon Mayhew">Brandon Mayhew</option>
                    <option value="Huell Babineaux">Huell Babineaux</option>
                    <option value="Steven Gomez">Steven Gomez</option>
                    <option value="Theodore Beneke">Theodore Beneke</option>
                    <option value="Gale Boetticher">Gale Boetticher</option>
                    <option value="Brock Cantillo">Brock Cantillo</option>
                    <option value="Carmen Molina">Carmen Molina</option>
                    <option value="Gretchen Schwartz">Gretchen Schwartz</option>
                    <option value="Elliot Schwartz">Elliot Schwartz</option>
                    <option value="Gonzo">Gonzo</option>
                    <option value="Christian Ortgea">Christian Ortgea</option>
                    <option value="Mrs. Pinkman">Mrs. Pinkman</option>
                    <option value="Adam Pinkman">Adam Pinkman</option>
                    <option value="Jake Pinkman">Jake Pinkman</option>
                    <option value="No-Doze">No-Doze</option>
                    <option value="Emilio Koyama">Emilio Koyama</option>
                    <option value="Dr. Delcavoli">Dr. Delcavoli</option>
                    <option value="Wendy S.">Wendy S.</option>
                    <option value="Bogdan Wolynetz">Bogdan Wolynetz</option>
                    <option value="George Merkert">George Merkert</option>
                    <option value="Clovis">Clovis</option>
                    <option value="SAC Ramey">SAC Ramey</option>
                    <option value="Victor">Victor</option>
                    <option value="Tomás Cantillo">Tomás Cantillo</option>
                    <option value="Francesca Liddy">Francesca Liddy</option>
                    <option value="Cynthia">Cynthia</option>
                    <option value="Tortuga">Tortuga</option>
                    <option value="Tim Roberts">Tim Roberts</option>
                    <option value="Juan Bolsa">Juan Bolsa</option>
                    <option value="Kaylee Ehrmantraut">Kaylee Ehrmantraut</option>
                    <option value="Pamela">Pamela</option>
                    <option value="Duane Chow">Duane Chow</option>
                    <option value="Jack Welker">Jack Welker</option>
                    <option value="Kimberly Wexler">Kimberly Wexler</option>
                    <option value="Howard Hamlin">Howard Hamlin</option>
                    <option value="Charles McGill">Charles McGill</option>
                    <option value="Ignacio Varga">Ignacio Varga</option>
                    <option value="Eduardo Salamanca">Eduardo Salamanca</option>
                </select>
            </div>

            <div className="Widgets"> 
                <div className="col-1">
                    <div className="Card1">
                        {data && data.length > 0 && data.map((dataObj) => (
                            <div key={dataObj.char_id}>
                                <img src={dataObj.img} className="cardimg" alt="img"></img>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="col-2">
                    <div className="Card2">
                        {data && data.length > 0 && data.map((dataObj) => (
                            <div key={dataObj.char_id}>
                                <h1>Character Infos</h1>
                                <li>Name = {dataObj.name}</li>
                                <li>Birthday = {dataObj.birthday}</li>
                                <li>Occupation = {dataObj.occupation[0]}</li>

                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="Card3">
                            {data && data.length > 0 && data.map((dataObj) => (
                                <div key={dataObj.char_id}>
                                    <p>{dataObj.nickname}</p>
                                </div>
                            ))}
                        </div>
                    
                        <div className="Card4">
                            {data && data.length > 0 && data.map((dataObj) => (
                                <div key={dataObj.char_id}>
                                    <Gif text={dataObj.status}></Gif>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="Card5">
                        {quote && quote.length > 0 && quote.map((quoteObj) => (
                            <div key={quoteObj.quote_id}>
                                <p>"{quoteObj.quote}" - {quoteObj.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;





/*


<input id="cinput" type="text" placeholder='Character Name'></input>
<button type="submit" onClick={(event) => {getText(document.getElementById('cinput').value)}}>Rechercher</button>
<option value="Marco & Leonel Salamanca">Marco & Leonel Salamanca</option>
<option value="Lydia Rodarte-Quayle">Lydia Rodarte-Quayle</option>
<option value="Skinny Pete">Skinny Pete</option>
<option value="Andrea Cantillo">Andrea Cantillo</option>
<option value="Ken">Ken</option>
<option value="Holly White">Holly White</option>
<option value="Donald Margolis">Donald Margolis</option>
<option value="Group Leader">Group Leader</option>
<option value="Stacey Ehrmantraut">Stacey Ehrmantraut</option>
<option value="Officer Saxton">Officer Saxton</option>

useEffect(() => {
        const getData = async () => {
          const result2 = await fetchQuote()
          setQuote(result2.data)
          console.log(result2);
        }
        getData();
      }, [quote]);

 {quote && quote.length > 0 && quote.map((quoteObj, index) => (
                    <div key={quoteObj.quote_id}>
                        <p>{quoteObj.quote}</p>
                    </div>
                    ))}






                    const fetchQuote = async () => {
        const response = await fetch("https://www.breakingbadapi.com/api/quote/random");
        const res = await response.json();
        return setQuote(res);
      }
    
      useEffect(() => {
        fetchQuote();
      },[])  
      




useEffect(() => {
        const getData = async () => {
          const result = await fetchData(text)
          setData(result.data)
          console.log(result);
        }
        getData();
      }, [text]);
    
    const getText = (text) => {
        setText(text);
        console.log(text);
    }


const Home = ({data})=> {
    
    return(
        <div>
            Hello home
            {data.map(item => (
            <CharacterImg key={item.char_id} item={item} />
            ))}
        </div>
    )
}

export default Home;



const fetchData = () => {
    return fetch("https://www.breakingbadapi.com/api/characters?name=Walter+White")
          .then((response) => response.json())
          .then((data) => setCharac(data));
  }

  useEffect(() => {
    fetchData();
  },[])

<div className="Widgets">
                    <div className="wgt1">
                        {charac && charac.length > 0 && charac.map((characObj, index) => (
                            <img key={characObj.char_id} src={characObj.img} alt="img"></img>
                            ))}
                    </div>

</div>

*/