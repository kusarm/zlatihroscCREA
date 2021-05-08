
import Modal from 'react-modal';
import React, {useState} from "react";
import ClientApi from "../../api/clientApi";
import {useToasts} from "react-toast-notifications";
import axios from 'axios';

function ModalDodajPosest(props) {
    const [naziv, setNaziv] = useState('');

    const {addToast} = useToasts();

    const closeModal = () => {
        props.close();
    }


    const shraniPosest = () => {
        setNaziv('');
        addToast('Posest dodana.', { appearance: 'success' })
        axios.post('http://localhost:3005/posest/insert', {
            name: naziv
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
                    DODAJ POSEST
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
                        onClick={() => shraniPosest()}>
                    
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


export default ModalDodajPosest;
