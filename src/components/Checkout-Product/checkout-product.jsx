import './checkout-product.scss'

const CheckoutProduct = ({ id, title, image, price, rating }) => {

  return (
    <div className="checkoutProduct">

      <img src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">{price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <button>Remove From Cart</button>
    
    </div>
  )
}

export default CheckoutProduct