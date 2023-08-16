export default function PurchaseButton({ salePrice, fullPrice }) {
  const handleClick = () => {
    console.log('Item added to cart');
  }
  return <>
    <h2 className="price-listing">
      <span className="current-price font-large label-font">{salePrice}</span>
      <span className="full-price font-small strike">{fullPrice}</span>
    </h2>
    <button
      className="add-to-cart"
      onClick={handleClick}
    ><img className="cart-icon" src="./icon-cart.svg" alt="" />Add to Cart
    </button>
  </>
}