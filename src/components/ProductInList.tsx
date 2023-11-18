import { product } from '../product';
import '../styles/ProductInList.css'

export interface ProductInListProps {
    productInList: product,
    deleteProductFunction(IdOfProductToDelete: string): any,
    checkProductFunction(IdOfProductToCheck: string): any,
}

function ProductInList({ productInList, deleteProductFunction, checkProductFunction }: ProductInListProps) {
    const productInListCheckClassName = productInList.check ? "product--green" : "product--red"
    const productInListClassName = `product ${productInListCheckClassName}`

    if(productInList.id === "DefaultProduct") return;
    return (
        <li key={productInList.id} className={productInListClassName}>
            <header>{ productInList.productName }</header>
            <footer>
                <button onClick={() => checkProductFunction(productInList.id)}>Check</button>
                <button onClick={() => deleteProductFunction(productInList.id)}>Delete</button>
            </footer>
        </li>
    )
}

export default ProductInList