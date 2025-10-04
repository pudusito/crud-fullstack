import { BrowserRouter, Route, Routes } from "react-router"
import {Toaster} from 'react-hot-toast'
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"


function App() {

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/nuevo-producto" element={<ProductForm/>} />
          <Route path="/editar-producto/:id" element={<ProductForm/>} />
        </Routes>
        <Toaster position="bottom-center" />
      </div>
    </BrowserRouter>
  )
}

export default App
