
import Styles from '../styles/Blog.module.css'
import Entrada from '../components/Entrada'

const ListadoBlog = ({ entradas }) => {
  return (
    <>
        <h2 className='heading'>Blog</h2>
        <div className={Styles.blog}> 
            {entradas.map(articulo => (
                <Entrada 
                    key={articulo.id}
                    entrada={articulo}
                /> 
            ))}
        </div>
    </>
  )
}

export default ListadoBlog
