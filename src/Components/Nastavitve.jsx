import Modal from 'react-modal';
import React, {useState} from "react";
import {useToasts} from "react-toast-notifications";
import axios from 'axios';

function Nastavitve(props) {

    const [dataForBC, setDataforBc] = useState('');
    const [dataFromBC, setDatafromBC] = useState('');
    const [sharp, setSharp] = useState('');
    const [sharp1, setSharp1] = useState('');

    const handleInputForDataToBlockchain = (event) => {
        console.log(event.target.value);
        setDataforBc(event.target.value)
    }

    const handleInputForSharp = (event) => {
        console.log(event.target.value);
        setSharp1(event.target.value)
    }

    const onSubmitToSendToBC = () => {
        axios.post('http://localhost:3005/bitcoin', {
                dataForBC: dataForBC
            }).then(response => {
                console.log("response", response);
                setSharp(response.data.message);
                
            });
    }

    const toGetDatafromBC = () => {
        axios.post('http://localhost:3005/bitcoin', {
                sharp1: sharp1
            }).then(response => {
                console.log("response", response);
                setDatafromBC(response.data.message);
                
            });
    }
    return (

        <div style={{display: "flex"}}>
            <div style={{padding: "20px"}}>
                <div>
                    <label>Vnesi kar želiš zapisati v blockchain</label>
                    <br></br>
                    <br></br>
                    <input type="text" onChange={(event) => handleInputForDataToBlockchain(event)}></input>
                </div>
                    <br></br>
                <div onClick={() => onSubmitToSendToBC()}>
                    <button
                        className="action-button" 
                        style={{height: "50px"}}   
                    >
                        Send to blockchain
                    </button>
                </div>

                <textarea rows="15" cols="50" style={{border: "1px solid black"}}>
                    {sharp}
                </textarea>
            </div>



            <div style={{padding: "20px"}}>
                <div>
                    <label>Vnesi hash, da pogledamo v blockchain</label>
                    <br></br>
                    <br></br>
                    <input type="text" onChange={(event) => handleInputForSharp(event)}></input>
                </div>
                    <br></br>
                <div onClick={() => toGetDatafromBC()}>
                    <button
                        className="action-button" 
                        style={{height: "50px"}}   
                    >
                        Get from blockchain
                    </button>
                </div>

                <textarea rows="15" cols="50" style={{border: "1px solid black"}}>
                    {dataFromBC}
                </textarea>
            </div>















        </div>
        
    )
}

export default Nastavitve;