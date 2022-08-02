
import Guitarra from "./Guitarra"
import Styles from "../styles/Listado.module.css"

const Listado = ({ guitarras }) => {

  return (

    <div className={Styles.listado}>
        {guitarras.map(elemento => (
            <Guitarra 
                key = {elemento.url}
                guitarra = {elemento}
            />
        ))}
    </div>
  )
}

export default Listado
