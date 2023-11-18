import { product } from "./App"

export const deleteProduct = (IdOfProductToDelete: string, productList: product[]): product[] => {
    return [...productList].filter(product => product.id !== IdOfProductToDelete)
}