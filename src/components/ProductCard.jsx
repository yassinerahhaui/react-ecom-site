import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';


const ProductCard = (props) => {
  const product = props.data
  const fetchProduct = () => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="productCard">
          <div className="productMedia">
            <img src={product.image} alt={product.title} className="productImage" title="View Details" />
            <div className="rating"><AiTwotoneStar style={{ color: 'yellow' }} /><span className="ratingNumber">{product.rating}</span></div>
            <span className="sale">SALE</span>
            {product.stockOut === false ? <button className="buyNow" title="Shop Me">Buy Now</button> : <span className="stock-out">Out Of Stock</span>}
          </div>
          <div className="productInfo">
            <p className="productTitle" title={`${product.title}\nPrice: ${product.price}$\n\n>> Click For View Details <<`}>{product.title}</p>
            <div className="prices">
              <span className="price">{product.price}$</span>{' '}
              <span className="oldPrice">{product.oldPrice}$</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {product.blocked === false ? fetchProduct() : ''}
    </>
  )
}
export default ProductCard;
