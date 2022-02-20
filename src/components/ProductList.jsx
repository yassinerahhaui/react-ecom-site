import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { GlobalContext } from '../localState/GlobalProvider';

// { id: 1, title: 'Get a grayscale image by appending ?grayscale to the end of the url.', price: '250,00', oldPrice: '300.50', image: 'https://picsum.photos/seed/picsum/200/300', solde: false, stockOut: false, blockerd: false, category: 'Technology', rating: 4, totalUserRating: 158 },

function ProductList() {
  const state = useContext(GlobalContext)
  const mapping = () => {
    const product = state.products.map((x) => {
      return (
        <ProductCard
          key={x.id}
          data={x}
        />
      )
    })
    return product
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {mapping()}
        </div>
      </div>
    </>
  )
}
export default ProductList;
