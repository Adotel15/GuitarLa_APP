

import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({ entradas }) => {

  // Para tener la URL en el cliente tiene que tener NEXT_PUBLIC
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

  return (
    <div>

         <Layout
          pagina = 'Blog'
         >
            <>
              <main className='contenedor'>
                <ListadoBlog
                  entradas={entradas}
                />
              </main>
            </>

        </Layout>
      
    </div>
  )
}

// Cada vez que recargas la página se ejecuta y vuelve a consultar la API
// export async function getServerSideProps() {

// Solo consulta una vez la API
// Esto solo corre en el servidor no llega al cliente, solo llega lo que pasamos por props
export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }

}

export default Blog
