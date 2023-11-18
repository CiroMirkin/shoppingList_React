import { product } from '../App'
import '../styles/ProductList.css'

export interface ProductListProps {
    productList: product[],
    deleteProductFunction(IdOfProductToDelete: string): any
}

function ProductList({ productList, deleteProductFunction }: ProductListProps) {

  return (
    <>
      <ul className='product-list'>
        {
            productList.map(product => {
                const productCheckClassName = product.check ? "product--green" : "product--red"
                const productClassName = `product ${productCheckClassName}`
                return (
                    <li key={product.id} className={productClassName}>
                        { product.productName }
                        <button onClick={() => deleteProductFunction(product.id)}>Delete</button>
                    </li>
                )
            }
               
            )
        }
      </ul>
    </>
  )
}

export default ProductList
