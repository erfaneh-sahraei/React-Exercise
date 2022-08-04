import {useState , useEffect} from 'react'

import ProductList from "./components/ProductList/ProductList"
import AddProduct from './components/AddProduct/AddProduct'

const App= () =>{

  const [products, setProducts] = useState([])

  useEffect(()=>{
    console.log("useEfect")
  } , [])

const addProduct =(title)=>{
const id = Math.floor(Math.random()*10000)
const newProduct = {id, ...title}
setProducts([...products, newProduct])
}

      const deleteProduct = (id) =>{
    setProducts(products.filter((item)=> item.id !== id))
      }
  
  
  return (
  <div id='app' className='container'>
    <AddProduct onAdd={addProduct}/>
 <ProductList products={products} onDelete={deleteProduct}/>
    </div>
    )
}

export default App