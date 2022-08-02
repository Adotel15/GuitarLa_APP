import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({ guitarras, cursos, blogs }) {
  return (
      <Layout
        pagina='Inicio'
        guitarra={guitarras[0]}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado 
            guitarras={guitarras}
          />

        </main>

        <Curso
          cursos={cursos}
        />

        <section className='contenedor'>
          <ListadoBlog
            entradas={blogs}
          />
        </section>
        

      </Layout>

  )
}

export async function getServerSideProps() {

  // Hacer 2 fetchs a la vez
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6&_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [respuestaGuitarras, respuestaCursos, respuestaBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras, cursos, blogs] = await Promise.all([
    respuestaGuitarras.json(),
    respuestaCursos.json(),
    respuestaBlogs.json()

  ])

  return {
    props : {
      guitarras,
      cursos,
      blogs
    }
  }
}
