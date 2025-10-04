import { useEffect, useState } from "react";
import { createProduct, getProduct , updateProduct } from "../api/products";
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';



export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        stock: 0,
        descripcion: ''
    })

    const navigate = useNavigate() 
    const params = useParams()

    useEffect(() => {
        const loadProducts = async() => {
            if(params.id) {
                const response = await getProduct(params.id)
                setProduct(response.data)
            }
        }
        loadProducts()
    }, [params.id])

    const handleSubmit= async (e) => {
        e.preventDefault()
        if (params.id) {
            await updateProduct(params.id, product)
            toast.success('Producto editado con exito')
        }
        else{
            await createProduct(product)
            toast.success('Producto Creado con exito')
        }
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input  id="nombre" 
                            type="text" 
                            value={product.nombre}
                            placeholder="Ingrese un Nombre"
                            onChange={e => setProduct({...product, nombre: e.target.value})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                        Precio
                    </label>
                    <input id="precio" 
                           type="number" 
                           value={product.precio}
                           placeholder="Ingrese un precio (numero)"
                           onChange={e => setProduct({...product, precio: e.target.value})}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                        Stock
                    </label>
                    <input id="stock" 
                           type="number" 
                           value={product.stock}
                           placeholder="Ingrese un stock (numero)"
                           onChange={e => setProduct({...product, stock: e.target.value})}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                        Descripción
                    </label>
                    <textarea id="descripcion" 
                              type="text" 
                              value={product.descripcion}
                              placeholder="Ingrese una descripción del producto"
                              onChange={e => setProduct({...product, descripcion: e.target.value})}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </textarea>
                </div>


                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Guardar Producto
                </button>
                
            </form>
        </div>
    )
}