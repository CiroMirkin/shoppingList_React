import { product } from "./components/App";

export const checkProduct = (IdOfProductToCheck: string, productList: product[]) => {
    return [...productList].map(product => {
        if(product.id == IdOfProductToCheck ) {
            const editProduct = {...product}
            editProduct.check = !editProduct.check
            return editProduct
        }
        return product
    })
}