import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { deleteProduct } from './deleteProduct'
import { checkProduct } from './checkProduct'

export interface product {
  id: string,
  productName: string,
  check: boolean
}

function App() {
  const [ newProductName, setNewProductName ] = useState("")
  const [ productList, setProductList ] = useState([
    {
      id: "DefaultProduct",
      productName: "",
      check: false
    }
  ])
  
  const handleClick = () => {
    const newProduct: product = {
      productName: newProductName,
      id: crypto.randomUUID(),
      check: false
    }
    const newProductList: product[] = [...productList]

    const theNameOfNewProductIsNotBlank = !!newProduct.productName.trim()
    if(theNameOfNewProductIsNotBlank) {
      newProductList.push(newProduct)
      setNewProductName("")
      setProductList(newProductList)
      
    }
  }

  const deleteProductFromProductList = (IdOfProductToDelete: string) => {
    const newProductList = deleteProduct(IdOfProductToDelete, productList)
    setProductList(newProductList)
  }
  
  const checkProductFromList = (IdOfProductToCheck: string) => {
    const newProductList = checkProduct(IdOfProductToCheck, productList)
    setProductList(newProductList)
  }

  return (
    <>
      <div>
        <input type="text" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
        <button onClick={handleClick}>Add product</button>
      </div>
      {
        <ProductList productList={productList} deleteProductFunction={deleteProductFromProductList} checkProductFunction={checkProductFromList}/>
      }
    </>
  )
}

export default App
