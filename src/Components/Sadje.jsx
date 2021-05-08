import React, {useState} from "react";
import './../css/style.css';


function Sadje(props){

    const [posest, setPosest] = useState("");
    const [sorta, setSorta] = useState("");
    const [delo, setDelo] = useState("");
    const [datum, setDatum] = useState(Date.now());

    const [modalPosest, setModalPosest] = useState(false);
    const [modalSorta, setModalSorta] = useState(false);

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
                    onClick={() => setModalPosest(true)}
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
                    onClick={() => setModalSorta(true)}
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
                <button>
                    click me
                </button>
            </div>


        </div>
    )
}

export default Sadje;
