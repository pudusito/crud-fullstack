import { Link } from "react-router"

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 mb-8">
            <h1 className="text-3xl font-bold text-center">CRUD Productos</h1>
            <Link to="/" className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"> 
                Inicio
            </Link>

            <Link to="/nuevo-producto" className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition ml-4">
                Nuevo Producto
            </Link>


        </header>
    )
}