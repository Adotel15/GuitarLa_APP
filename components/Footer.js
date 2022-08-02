
import Link from "next/link"
import Styles from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <footer className={Styles.footer}>
        <div className={`contenedor ${Styles.contenido}`}>
            <nav className={Styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/tienda">Tienda</Link>
            </nav>

            <p className={Styles.copyright}>©Todos los archivos reservados</p>
        </div>
    </footer>
  )
}

export default Footer