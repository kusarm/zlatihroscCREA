import Modal from 'react-modal';
import React, {useState} from "react";
import ClientApi from "../../api/clientApi";
import {useToasts} from "react-toast-notifications";
import axios from 'axios';


function ModalDodajSadje(props) {
    const [idSorta, setIdSorta] = useState('');
    const [kolicina, setKolicina] = useState('');


    const {addToast} = useToasts();

    const closeModal = () => {
        props.close();
    }

    const shraniSadje = () => {

        // TODO : Nared tko, da ne bo idPosest hardcoded na 1
        setKolicina('');
        setIdSorta('');
        addToast('Sadje dodano.', { appearance: 'success' })
        axios.post('http://localhost:3005/bitcoin', {
            "kolicina": kolicina,
            "id_sorta": idSorta //props.idPosest
            }).then(response => {
                setTimeout(() => {
                    console.log("burek");
                }, 10000);

                
            });
        
        
        
        props.close();
    }


    return(
        <div
        >
            <Modal 
                className="modalDodajPosest"
                isOpen={props.show}
                centered={true}
            >
                
                <div 
                    style={{
                        paddingLeft: "20px",
                        paddingTop: "20px",
                        fontSize: "20px",
                        paddingBottom: "20px"}}
                    >
                    DODAJ SADJE
                </div>

                <div>
                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "350px",
                            paddingLeft: "20px",
                            paddingBottom: "5px"}}
                        >
                        <div style={{ paddingRight: "56px"}}>
                            {"Id sorta:"}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={(e) => setIdSorta(e.target.value)}
                                value={idSorta}
                                style={{width: "200px"}}
                            />
                        </div>
                    </div>

                    <br></br>

                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "350px",
                            paddingLeft: "20px",
                            paddingBottom: "5px"}}
                        >
                        <div style={{ paddingRight: "36px"}}>
                            Kolicina:
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={(e) => setKolicina(e.target.value)}
                                value={kolicina}
                                style={{width: "200px"}}
                            />
                        </div>
                    </div>


                </div>

                <div style={{paddingLeft: "10px", paddingTop: "20px", display: "flex" }}>

                    <button
                        className="action-button"
                        onClick={() => shraniSadje()}>
                    
                        Shrani
                    </button>

                    <button
                        className="action-button"
                        onClick={() => closeModal()}>
                        Close
                    </button>
                </div>
          </Modal>
      </div>
    );
}


export default ModalDodajSadje;