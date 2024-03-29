import { useState } from "react"

const Imagen = (props) => { //ponemos props para indicar que pasamos argumentos
    //Variable de estado
    const [color /*nombre var*/, setColor /*funcion q modifica*/] = useState("#FFFFFF")

    const estiloCard = {
        width: "300px",
        marginBottom: "20px",
        backgroundColor: color
    }

    const cardOnClick = () => {
        //funcion que modifica el color del card
        if (color == "#FFFFFF") setColor("#FF10FF") //Modifica la variable de estado (regenera componente)
        else setColor("#FFFFFF")
    }

    return <div className="card" style={estiloCard} onClick={cardOnClick}>
        <img //le pasamos por props los argumentos
            src={props.url} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
        </div>
    </div>
}

export default Imagen