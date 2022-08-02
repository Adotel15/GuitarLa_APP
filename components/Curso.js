
import Styles from '../styles/Curso.module.css'

// Componente para la barra de cursos en Inicio
const Curso = ({ cursos }) => {

    const { titulo, contenido, imagen } = cursos

    return (
        <section>
            <div className={`contenedor ${Styles.grid}`}>
                <div className={Styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={Styles.texto}>{contenido}</p>

                    <a className={Styles.enlace} href="#">Más Información</a>
                </div>
            </div>

            {/*Se puede aplicar directamente CSS en la misma hoja con <style jsx>, esto es para aplicar CSS a una imagen, que en Next.js no se puede con Styles */}
            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0/ .65), rgb( 0 0 0/ .7)), url(${imagen.url});
                    background-size: cover;
                    background-position: 50%;
                }
            `}</style>
        </section>
    )
}

export default Curso
