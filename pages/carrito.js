
import Layout from "../components/Layout"
import Styles from '../styles/Carrito.module.css'
import Image from "next/image"
import { useState, useEffect } from "react"

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0)

    useEffect (() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)

        setTotal(calculoTotal)

    }, [carrito])

    return (
        <div>
        <Layout pagina={'Carrito de Compras'}>
            <>
                <h1 className="heading">Carrito</h1>
                <main className={`${Styles.contenido} contenedor`}>
                    <div className={Styles.carrito}>
                        <h2>Artículos</h2>
                        {carrito.length === 0 ? 
                        'Carrito Vacío' 
                        : 
                        (
                            carrito.map(producto => (
                                <div
                                    key = {producto.id} 
                                    className={Styles.producto}
                                >
                                    <div>
                                        <Image 
                                            layout = "responsive"
                                            width = {250}
                                            height = {500}
                                            src = {producto.imagen}
                                            alt = {producto.nombre}
                                        />
                                    </div>

                                    <div> 
                                        <p className = {Styles.nombre}> {producto.nombre} </p>
                                        <div className = {Styles.cantidad}>
                                            <p> Cantidad:</p>
                                            <select 
                                                value={producto.cantidad}
                                                className = {Styles.select}
                                                onChange = {e => actualizarCantidad({
                                                    cantidad: e.target.value,
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <p className = {Styles.precio}> <span>{producto.precio}$ </span></p>
                                        <p className = {Styles.subtotal}>
                                            Subtotal: <span>{producto.precio * producto.cantidad}$</span>
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className= {Styles.eliminar}
                                        onClick = {() => eliminarProducto(producto.id)}
                                    >X</button>


                                </div>
                            )
                        ))}
                    </div>
                    <div className = {Styles.resumen}>
                        {total > 0 ? (
                            <>
                                <p>Resumen del pedido</p>
                                <p>Total a pagar: {total}$</p>
                            </>
                        ) : <p>No hay productos en el carrito</p>}
                    </div>
                </main>
            </>
        </Layout>
        </div>
    )
}

export default Carrito
