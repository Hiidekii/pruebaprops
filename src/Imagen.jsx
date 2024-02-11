const Imagen = (props) => { //ponemos props para indicar que pasamos argumentos
    const estiloCard = {
        width: "300px",
        marginBottom: "20px"
    }

    return <div className="card" style={estiloCard}>
        <img //le pasamos por props los argumentos
            src={props.url} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
        </div>
    </div>
}

export default Imagen