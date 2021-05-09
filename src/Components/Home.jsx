import React, {useState} from "react";
import '../css/style.css'
import axios from 'axios';

function Home(props) {

    const [sharp, setSharp] = useState("");

    const getAllDataFromSharp = () => {
        console.log("sharp: ", sharp);
        axios.post('http://localhost:3005/sadje/getBySharp', {
            sharp: sharp
          }).then((response) => {
              console.log(response);
          });
    }

    return (
        <div style={{padding: "20px"}}>
            Dobrodošli na CREA Sadovnjaku
            <br></br>
            <br></br>
            <div>
                <div>
                    Napiš sharp od japke
                </div>
                <br></br>
                <div
                    onChange={event => setSharp(event.target.value)}>
                    <input type="text"></input>
                </div>

                <br></br>
                <div
                    onClick={getAllDataFromSharp()}    
                >
                    <button
                        className="action-button"
                    >
                        Isci
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;
