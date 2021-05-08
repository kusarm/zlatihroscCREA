import React, {useState} from "react";
import './../css/style.css';
import ModalDodajPosest from './Modal/ModalDodajPosest'
import ModalDodajSorto from './Modal/ModalDodajSorto'
import axios from 'axios';


function Sadje(props){

    const [posest, setPosest] = useState("");
    const [sorta, setSorta] = useState("");
    const [delo, setDelo] = useState("");
    const [datum, setDatum] = useState(Date.now());

    const [showModalPosest, setShowModalPosest] = useState(false);
    const [showModalSorta, setShowModalSorta] = useState(false);

    const setDatumDela = (event) => {

        console.log(event.target.value);
        setDatum(event.target.value)
    }

    const printEverything = () => {

        console.log("Print everything");
        console.log("posest: ", posest);
        console.log("sorta: ", sorta);
        console.log("delo: ", delo);
        console.log("datum: ", datum);

        axios.post('http://localhost:3005/delo/insert', {
            "id_sorta" : sorta,
            "name": delo,
            "datename": datum
          });
    }


    return (
        <div style={{padding: "20px"}}>
            <div style={{display: "flex"}}>
                <div>
                    Izberi posest: 
                </div>
                <div
                    style={{paddingLeft: "9px"}}
                    onChange={event => setPosest(event.target.value)}
                >
                    <input type="text"></input>
                </div>
                <div
                    style={{paddingLeft: "9px"}}
                    onClick={() => setShowModalPosest(true)}
                >
                    <button
                        className="action-button"
                    >
                        Dodaj posest
                    </button>
                </div>
            </div>
            <br></br>

            <div style={{display: "flex"}}>
                <div >
                    Izberi sorto: 
                </div>
                <div
                    style={{paddingLeft: "20px"}}
                    onChange={event => setSorta(event.target.value)}
                >
                    <input type="text"></input>
                </div>
                <div
                    style={{paddingLeft: "9px"}}
                    onClick={() => setShowModalSorta(true)}
                >
                    <button
                        className="action-button"
                    >
                        Dodaj sorto
                    </button>
                </div>
            </div>

            <br></br>

            <div style={{display: "flex"}}>
                <div >
                    Opiši delo
                </div>
                <div
                    style={{paddingLeft: "20px"}}
                    onChange={event => setDelo(event.target.value)}
                >
                    <input type="text"></input>
                </div>
            </div>

            <br></br>

            <div style={{display: "flex"}}>
                <div >
                    Kdaj se je to zgodilo
                </div>
                <div
                    style={{paddingLeft: "20px"}}
                    onChange={event => setDatumDela(event)}
                >
                    <input type="date"></input>
                </div>
            </div>

            <br></br>

            <div onClick={() => printEverything()}>
                <button
                    className="action-button"
                >
                    Dodaj delo
                </button>
            </div>
            
            <ModalDodajPosest
                className="ModalDodajPosest"
                show={showModalPosest}
                
                close={() => setShowModalPosest(false)}
            />

            <ModalDodajSorto
                className="ModalDodajPosest"
                show={showModalSorta}
                idPosest={posest}
                
                close={() => setShowModalSorta(false)}
            />

        </div>
    )
}

export default Sadje;
