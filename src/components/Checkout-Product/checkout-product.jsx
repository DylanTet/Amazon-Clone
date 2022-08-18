import './checkout-product.scss'
import { useStateValue } from "../../Context/context.jsx"

const CheckoutProduct = ({ id, title, image, price, rating }) => {

  const [{basket}, dispatch] = useStateValue()

  const removeItem = () => {

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })

  }

  return (
    <div className="checkoutProduct">

      <img className='checkoutProduct__image' src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">${price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove From Cart</button>
      </div>
    
    </div>
  )
}

export default CheckoutProduct