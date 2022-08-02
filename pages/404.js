
import Layout from "../components/Layout"
import Link from "next/link"
import Styles from '../styles/NoEncotrado.module.css'

const NoEncontrado = () => {
  return (

    <Layout>
        <div className={Styles.noEncontrado}>
            <h1 className="heading">Página no encontrada</h1>
            <Link href="/">Volver a Inicio</Link>
        </div>
    </Layout>
  )
}

export default NoEncontrado
