
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
// Como que el archivo donde está formatearfecha se llama index, lo coge automaticamente de helpers sin poner el /index.js
import Styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ articulo }) => {

    const { titulo, imagen, published_at, contenido } = articulo

    // Para leer el id de la URL
    const router = useRouter()

    return (

        <Layout pagina={titulo}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={Styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />

                    <div className={Styles.contenido}>
                        <p className={Styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={Styles.texto}>{contenido}</p>
                    </div>
                </article>

            </main>
        </Layout>
    )
}

/*
export async function getServerSideProps({ query: {id} }){

    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const articulo = await respuesta.json()

    console.log(id)

    return {
        props : {
            articulo
        }
    }
}
*/

// Cuando es getStaticProps se necesita un array que tenga todos los id
// los conseguimos aqui, y automáticamente están disponibles en getStaticProps
export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map( element => ({
        params: { url : element.url }
        // params: { id : element.id.toString()}
        // Convierte el id de numero a string porque sino da error
    }))

    return {
        paths,
        // fallback : true => Es para cuando tienes millones de id, y nextJs genera página de manera dinámica, no las construye todas de una
        // fallback : false => Es cuando le pasamos todas las rutas disponibles(Es el caso, ya que tenemos path), entonces construye todas las páginas de una
        fallback: false
    }

}

// Lee la API concretamente del id que se pasa por params
export async function getStaticProps({ params: {url} }){

    // Strapi es como una rest API puedes buscar, un objeto a través de una de sus variables con ?(nombre variable)=x
    const urlBlog = `${process.env.API_URL}/blogs?=${url}`
    const respuesta = await fetch(urlBlog)
    const articulo = await respuesta.json()

    return {
        props : {
            articulo : articulo[0]
        }
    }
}

export default EntradaBlog
