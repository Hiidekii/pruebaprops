import Imagen from "./Imagen"

const ListaImagenes = (props) => {
    /*const listaImagenes = [ //lista de objetos javascript con la informacion
        {
            url: "https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/img/escudo_600x300-01_1.jpg?itok=0_61sHmS",
            titulo: "Logo 1"
        },
        {
            url: "https://th.bing.com/th/id/R.6a322114888c66aaccb2827653928f3e?rik=HcrHuBtTIxuI7g&pid=ImgRaw&r=0",
            titulo: "Logo 2"
        },
        {
            url: "https://th.bing.com/th/id/R.d4692575013978858c318f094dfa3eb7?rik=CFZTTI9KiCeZrw&riu=http%3a%2f%2fstatic.zerochan.net%2fYuuki.Asuna.full.1325404.jpg&ehk=hjIYRX7ZaQ6MVgeCPzXGRfNpwyDak9VYiVx8L2Pvib0%3d&risl=&pid=ImgRaw&r=0",
            titulo: "Logo 3"
        },
        {
            url: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://beyondtheflag.com/wp-content/uploads/getty-images/2021/03/1230080198.jpeg",
            titulo: "Logo 4"
        },
        {
            url: "https://th.bing.com/th/id/R.e80b7cfe1e533989cf732d686d3d18fe?rik=pYEfh22CaJe9Ww&pid=ImgRaw&r=0",
            titulo: "Logo 5"
        },
    ]*/

    return <div>
        { //usamos map para mapear la data de la lista y mostrarla en pantalla
            props.listaImagenes.map((elem) => { //elem toma el valor de cada objeto de la lista
                return <Imagen
                    url={elem.url}
                    titulo={elem.titulo}
                />
            })
        }
    </div>
}

export default ListaImagenes