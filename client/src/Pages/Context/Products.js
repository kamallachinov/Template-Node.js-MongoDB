import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const [filteredProducts, setFilteredProducts] = useState([])

    const datas = {
        products, setProducts, filteredProducts, setFilteredProducts
    }

    return <SearchContext.Provider value={datas}>{children}</SearchContext.Provider>
}
export default ProductProvider