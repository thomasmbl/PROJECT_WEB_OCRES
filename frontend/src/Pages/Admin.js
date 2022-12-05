
import axios from "axios";
import React, { useEffect, useState } from "react";
import './Admin.css';
import { Link } from "react-router-dom";
import { TonalitySharp } from "@mui/icons-material";

const init = {
    saisonNumber:"",
    deathsNumber:"",
}

const Admin = () => {
    const [data, setdata] = useState([]);
    const [state, setState] = useState(init);
    const { saisonNumber, deathsNumber } = state;

    /*
    CRUD Methods
    */
    const getSaisons = async () => {
        const res = await axios.get("http://localhost:3001/saisons")
        if (res.status === 200) {
            setdata(res.data);
        }
    };
     
    const addSaison = async (e) => {
        await axios.post("http://localhost:3001/saisons", e);
        getSaisons();
    };

    const deleteSaison = async (id) => {
        await axios.delete(`http://localhost:3001/saisons/${id}`)
        getSaisons();
    };

    const updateSaison = async (id) => {
        await axios.patch(`http://localhost:3001/saisons/${id}`, state)
        getSaisons();
    }


    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({...state, [name]: value });
    }
    
    const handleSubmitAdd = (e) => {
        e.preventDefault();
        if(!saisonNumber || !deathsNumber) {
            console.error("Empty field", saisonNumber, deathsNumber)
        } else {
            addSaison(state);
        }
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        if(!saisonNumber || !deathsNumber) {
            console.error("Empty field", saisonNumber, deathsNumber)
        } else {
            updateSaison(state);
        }
    }

    useEffect(() => {
        getSaisons();
    }, [])

    
    
    

    console.log("data=>", data);

    return (
        <div className="mainContent">
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Saison</th>
                        <th className="th">Deaths</th>
                        <th className="th">Option</th>

                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.saisonNumber}</th>
                                <td>{item.deathsNumber}</td>
                                <td>
                                    <button className="btn-delete" onClick={() => deleteSaison(item._id)}>Delete</button>
                                    <button className="btn-edit" onClick={() => updateSaison(item._id)}>Update</button>

                                </td>
                            </tr>
                           
                        )
                    })}
                </tbody>
            </table>
            <div>
                <form>
                    <label>Season Number</label>
                    <input placeholder="Season Number" id="saisonNumber" name="saisonNumber" onChange={handleInputChange} value={saisonNumber}></input>

                    <label>Death Count</label>
                    <input placeholder="Death Count" name="deathsNumber" onChange={handleInputChange} value={deathsNumber}></input>

                    <input type="submit" value="Add" onClick={handleSubmitAdd}></input>
                </form>
            </div>
        </div>
    )
    
}

export default Admin

/**
 * <input type="submit" value="Edit" onClick={updateSaison(document.getElementById("ID").value)}></input>
 */