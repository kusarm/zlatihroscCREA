
import Modal from 'react-modal';
import React, {useState} from "react";
import ClientApi from "../../api/clientApi";
import {useToasts} from "react-toast-notifications";
import axios from 'axios';


function ModalDodajSorto(props) {
    const [naziv, setNaziv] = useState('');

    const {addToast} = useToasts();

    const closeModal = () => {
        props.close();
    }


    const shraniSorto = () => {

        // TODO : Nared tko, da ne bo idPosest hardcoded na 1
        setNaziv('');
        addToast('Sorta dodana.', { appearance: 'success' })
        axios.post('http://localhost:3005/sorta/insert', {
            name: naziv,
            "id_posest": 1 //props.idPosest
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
                    DODAJ SORTO
                </div>

                <div>
                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "250px",
                            paddingLeft: "20px",
                            paddingBottom: "5px"}}
                        >
                        <div style={{ paddingRight: "36px"}}>
                            Naziv:
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={(e) => setNaziv(e.target.value)}
                                value={naziv}
                                style={{width: "200px"}}
                            />
                        </div>
                    </div>


                </div>

                <div style={{paddingLeft: "10px", paddingTop: "20px", display: "flex" }}>

                    <button
                        className="action-button"
                        onClick={() => shraniSorto()}>
                    
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


export default ModalDodajSorto;
