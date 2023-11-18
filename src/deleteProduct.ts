import { product } from './product'

export const deleteProduct = (IdOfProductToDelete: string, productList: product[]): product[] => {
    return [...productList].filter(product => product.id !== IdOfProductToDelete)
}