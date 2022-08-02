
import Layout from "../../components/Layout"
import Image from "next/image"
import Styles from '../../styles/Guitarra.module.css'
import { useState } from 'react'

const Producto = ({ guitarra, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1)

    const { nombre, url, precio, imagen, descripcion, id} = guitarra[0]

    const handleSubmit = e => {
        e.preventDefault();

        //Agregar al carrito
        if(cantidad < 1 ) {
            alert("Cantidad no válida") 
            return
        }

        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada);

        alert(`Agregada/s ${cantidad} de ${nombre} al carrito!`);
    }

    console.log(guitarra)

    return (
        <Layout
            pagina={`${nombre}`}
        >
            <div className={Styles.guitarra}>
            <Image layout="responsive" width={150} height={350} src={imagen.url}
            alt={`Imagen guitarra ${nombre}`} />

            <div className={Styles.contenido}>
                <h3>{nombre}</h3>
                <p className={Styles.text}>{descripcion}</p>
                <p className={Styles.precio}>{precio}$</p>

                <form 
                    className={Styles.formulario}
                    onSubmit={handleSubmit}
                >
                    <label>Cantidad:</label>

                    <select 
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value))}
                    >
                        <option value="">- - - Seleccione Cantidad - - -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <input 
                        type="submit"
                        value="Agregar al Carrito"
                    />
                </form>
            </div>

        </div>   
        </Layout>
    )
}

export async function getServerSideProps ({ query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    

    return {
        props : {
            guitarra
        }
    }
}

export default Producto
