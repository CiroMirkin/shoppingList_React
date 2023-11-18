import { MagicMotion } from 'react-magic-motion'
import { product } from '../product'
import '../styles/ProductList.css'
import ProductInList from './ProductInList'

export interface ProductListProps {
    productList: product[],
    deleteProductFunction(IdOfProductToDelete: string): any,
    checkProductFunction(IdOfProductToCheck: string): any,
}

function ProductList({ productList, deleteProductFunction, checkProductFunction }: ProductListProps) {

  return (
    <>
      <MagicMotion>
        <ul className='product-list'>
          {
              productList.length === 1 && productList[0].id === "DefaultProduct"
              ? <li style={{listStyle: "none"}}>No products yet</li>
              : productList.map(product => 
                  <ProductInList key={product.id} productInList={product} deleteProductFunction={deleteProductFunction} checkProductFunction={checkProductFunction} />
              )
          }
        </ul>
      </MagicMotion>
    </>
  )
}

export default ProductList
