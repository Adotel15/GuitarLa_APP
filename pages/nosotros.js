
import Layout from '../components/Layout'
import Image from 'next/image'
import Styles from "../styles/Nosotros.module.css"

const Nosotros = () => {

  return (
    <Layout pagina = 'Nosotros' >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={Styles.contenido}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg"
            alt="Imagen sobre Nosotros" />
          <div>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lacinia facilisis urna, sit amet luctus diam hendrerit ut. Aliquam venenatis blandit leo in molestie. Duis eleifend vestibulum rutrum. Praesent ex lorem, fermentum ac elit sed, tincidunt convallis velit. Vivamus tristique egestas sapien. Suspendisse eu lacinia eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lacinia facilisis urna, sit amet luctus diam hendrerit ut. Aliquam venenatis blandit leo in molestie. Duis eleifend vestibulum rutrum. Praesent ex lorem, fermentum ac elit sed, tincidunt convallis velit. Vivamus tristique egestas sapien. Suspendisse eu lacinia eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      </main>
    </Layout>
      
  )
  
}


export default Nosotros
