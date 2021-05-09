import React, {useEffect, useState} from "react";
import '../css/style.css'
import axios from 'axios';
import DataTable from "react-data-table-component";

import japk from './../files/japka1.png';
import japcki5 from './../files/japcki5.png';

function Home(props) {

    const [sharp, setSharp] = useState("");
    const [sorta, setSorta] = useState("Zlati delišes");
    const [posest, setPosest] = useState("Sadjanica Crea, Haloze, SLO");
    const [datumObiranja, setDatumObiranja] = useState("2020-10-08");
    

    const [data, setData] = useState([]);

    const getAllDataFromSharp = () => {
        console.log("sharp: ", sharp);

        axios.post('http://localhost:3005/sadje/getBySharp', {
            sharp: sharp
          }).then((response) => {
              response.data.message.forEach(element => {
                    const row = {
                        delo: element.delo,
                        datum: element.datumDelo
                    };
                    if(!data.includes(row)) {
                        data.push(row); 
                    }
              })
            
            //setData(response.data.message);
          });
    }

    const columns = [
        {
            name: "delo",
            selector: 'delo'
        },
        {
            name: "datum",
            selector: 'datum'
        }        
    ];

    const customStyles = {
        rows: {
            style: {background: '#eeeeee', color: '#212121'}
        },
        header: {
            style: {
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid #596285',
                color: '#212121',
            }
        },
        headCells: {
            style: {
                pointerEvents: 'none',
                color: '#212121',
                fontStyle: 'italic'
            }
        },
        headRow: {
            style: {
                minHeight: '36px',
                backgroundColor: '#cccccc'
            }
        },
        contextMenu: {
            style: {
              backgroundColor: '#eeeeee'
            }
        }
    };

    useEffect(() => {
        if(sharp.length === 0){
            setData([]);
        }
    }, [sharp])

    return (

        <div style={{display: 'flex', overflowX: "hidden"}}>
            <div style={{padding: "20px",}}>
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
            {data.length ?
            <div style={{padding: "20px", borderLeft: "1px solid black", height: "100vh"}}>
                <div style={{display: "flex"}}>
                    <div >
                        <img style = {{height: "350px", paddingRight: "50px"}} src={japk} /> 
                    </div>
                    <div>
                        <div style={{paddingTop: "50px", fontSize: "25px"}}>
                            JABOLKO
                        </div>  

                        <div style={{paddingTop: "10px", paddingBottom: "5px", color: "gray"}}>
                            Sorta: 
                        </div>
                        <div style={{paddingTop: "3px", paddingBottom: "5px", fontSize: "20px"}}>
                            {sorta} 
                        </div>
                        <br></br>

                        <div style={{paddingTop: "10px", paddingBottom: "5px", color: "gray"}}>
                            Posest: 
                        </div>
                        <div style={{paddingTop: "3px", paddingBottom: "5px", fontSize: "20px"}}>
                            {posest} 
                        </div>

                        <br></br>

                        <div style={{paddingTop: "10px", paddingBottom: "5px", color: "gray"}}>
                            DatumObiranja: 
                        </div>
                        <div style={{paddingTop: "3px", paddingBottom: "5px", fontSize: "20px"}}>
                            {datumObiranja} 
                        </div>
                    </div>
                    <center>
                        <div style={{paddingTop: "40px", paddingLeft: "80px"}}>
                            <div style={{paddingTop: "10px", paddingBottom: "5px", color: "gray"}}>
                                Slatkost: 
                            </div>
                            <div >
                                <img style = {{height: "70px", paddingRight: "50px"}} src={japcki5} /> 
                            </div>
                            <br></br><br></br><br></br>
                            <div style={{paddingTop: "10px", paddingBottom: "5px", color: "gray"}}>
                                Pobrano pred: 
                            </div>
                            <div style={{fontSize: "40px", color: "red"}} >
                                8 dni 
                            </div>
                        </div>
                    </center>
                   
                </div>
                {data.length ?
                    <DataTable 
                        columns={columns} 
                        data={data}
                        customStyles={customStyles}
                        noHeader={true}
                    />
                    :
                    null
            
                }
            </div>

        :null}
          
        </div>

        
    )
}
export default Home;
