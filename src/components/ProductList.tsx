import { product } from '../App'
import '../styles/ProductList.css'

export interface ProductListProps {
    productList: product[],
    deleteProductFunction(IdOfProductToDelete: string): any,
    checkProductFunction(IdOfProductToCheck: string): any,
}

function ProductList({ productList, deleteProductFunction, checkProductFunction }: ProductListProps) {

  return (
    <>
      <ul className='product-list'>
        {
            productList.length === 1 && productList[0].id === "DefaultProduct"
            ? <li style={{listStyle: "none"}}>No products yet</li>
            : productList.map(product => {
                const productCheckClassName = product.check ? "product--green" : "product--red"
                const productClassName = `product ${productCheckClassName}`
                if(product.id === "DefaultProduct") return;
                return (
                    <li key={product.id} className={productClassName}>
                        { product.productName }
                        <button onClick={() => checkProductFunction(product.id)}>Check</button>
                        <button onClick={() => deleteProductFunction(product.id)}>Delete</button>
                     </li>
                )
            })
        }
      </ul>
    </>
  )
}

export default ProductList
