import Modal from 'react-modal';
import React, {useState} from "react";
import {useToasts} from "react-toast-notifications";
import axios from 'axios';

function Nastavitve(props) {

    const [idSorta, setIdSorta] = useState('');
    const [sharp, setSharp] = useState('');

    const handleInputChange = (event) => {

        console.log(event.target.value);
        setIdSorta(event.target.value)
    }

    const onSubmit = () => {
        axios.post('http://localhost:3005/bitcoin', {
                idSorta
            }).then(response => {
                console.log("response", response);
                setSharp(response.data.message);
                
            });
    }
    return (
        <div style={{padding: "20px"}}>
            <div>
                <label>Vnesi kar želiš zapisati v blockchain</label>
                <br></br>
                <br></br>
                <input type="text" onChange={(event) => handleInputChange(event)}></input>
            </div>
                <br></br>
            <div onClick={() => onSubmit()}>
                <button
                    className="action-button" 
                    style={{height: "50px"}}   
                >
                    Send to blockchain
                </button>
            </div>

            <textarea rows="8" cols="50" style={{border: "1px solid black"}}>
              {sharp}
            </textarea>
        </div>
    )
}

export default Nastavitve;