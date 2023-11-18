import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { deleteProduct } from './deleteProduct'

export interface product {
  id: string,
  productName: string,
  check: boolean
}

function App() {
  const [ newProductName, setNewProductName ] = useState("")
  const [ productList, setProductList ] = useState([
    {
      id: "0",
      productName: "",
      check: false
    }
  ])
  const deleteDefaultProduct = (productListWithDefaultProduct: product[]) => productListWithDefaultProduct.shift()
  
  const handleClick = () => {
    const newProduct: product = {
      productName: newProductName,
      id: crypto.randomUUID(),
      check: false
    }
    const newProductList: product[] = [...productList]

    const isThereTheDefaultProduct = !newProductList[0].productName
    if(isThereTheDefaultProduct) deleteDefaultProduct(newProductList)

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

  return (
    <>
      <div>
        <input type="text" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
        <button onClick={handleClick}>Add product</button>
      </div>
      {
        <ProductList productList={productList} deleteProductFunction={deleteProductFromProductList} />
      }
    </>
  )
}

export default App
