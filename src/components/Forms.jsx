import React, { useState } from "react";
import "./css/Home.css";
import Maps from "./Maps.jsx"

function Home() {

    const [texto, setTexto] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [posicao, setPosicao] = useState(null)
    function onClickButton() {
        setPosicao({
            latitude,
            longitude,
            texto
        })
    }
    return (
        <div className="content">
            <div className="mapa">
                <div className="input">
                    Latitude: <input lat="Latitude type=text" value={latitude} onChange={event => setLatitude(event.target.value)}></input>
                    Longitude: <input lng="Longitude type=text" value={longitude} onChange={event => setLongitude(event.target.value)}></input>
                    Texto: <input txt="txt type=text" value={texto} onChange={event => setTexto(event.target.value)}></input>
                    <button type="button" onClick={onClickButton}>Pesquisar</button>
                </div>
                <Maps posicaoMarker={posicao} />
            </div>
        </div>
    );
}

export default Home