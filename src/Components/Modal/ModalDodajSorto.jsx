
import Modal from 'react-modal';
import React, {useState} from "react";
import ClientApi from "../../api/clientApi";
import {useToasts} from "react-toast-notifications";


function ModalDodajSorto(props) {
    const [naziv, setNaziv] = useState('');

    const {addToast} = useToasts();

    const closeModal = () => {
        props.close();
    }


    const shraniSorto = () => {
        console.log("TODO: shraniSorto() naziv:[" + naziv + "]");
        setNaziv('');
        addToast('Sorta dodana.', { appearance: 'success' })
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
