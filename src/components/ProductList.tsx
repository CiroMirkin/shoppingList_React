import { product } from '../App'
import '../styles/ProductList.css'

export interface ProductListProps {
    productList: product[]
}

function ProductList({ productList }: ProductListProps) {

  return (
    <>
      <ul className='product-list'>
        {
            productList.map(product => {
                const productCheckClassName = product.check ? "product--green" : "product--red"
                const productClassName = `product ${productCheckClassName}`
                return (
                    <li key={product.id} className={productClassName}>{ product.productName }</li>
                )
            }
               
            )
        }
      </ul>
    </>
  )
}

export default ProductList
