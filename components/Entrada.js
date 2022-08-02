
import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
import Styles from '../styles/Entrada.module.css'

// Componente para cada cuadrícula de un Blog en la pestañita de Blogs y en inicio
const Entrada = ({entrada}) => {

    const { titulo, resumen, imagen, published_at, id, url } = entrada

    return (
        <article>

            <Image priority="true" layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen Blog ${titulo}`}/>

            <div className={Styles.contenido}>
                <h3>{titulo}</h3>
                <p className={Styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={Styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={Styles.enlace}>
                        Leer Entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada
