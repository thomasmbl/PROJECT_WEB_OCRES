import React, { useEffect, useState } from "react";
import "./Home.css";
import charac from "./Admin";
import Widgets from "../Components/Widgets";
import fetchData from "../utils/fetchData";

function Home() {

    const [text, setText] = useState("Walter White")
    const [data, setData] = useState([])

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
    
    return(
        <div>
            Hello home
            <div>
                <label className="label">Choisir un personnage :</label>
                <input id="cinput" type="text" placeholder='Character Name'></input>
                <button type="submit" onClick={(event) => {getText(document.getElementById('cinput').value)}}>Ajouter</button>
                           
                
            </div>
            <div>
                <div className="Card1">
                    {data && data.length > 0 && data.map((dataObj, index) => (
                    <><img key={dataObj.char_id} src={dataObj.img} className="cardimg" alt="img"></img>
                    </>
                    ))}
                </div>

                <div className="Card2">
                    {data && data.length > 0 && data.map((dataObj, index) => (
                    <><h1 key={dataObj.char_id} >{dataObj.char_id}</h1>
                    </>
                    ))}
                </div>

                    
            </div>
            
        </div>
    )
}

export default Home;





/*

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