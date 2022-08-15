import { useStateValue } from '../../Context/context';
import './product.scss'

function Product({ id, title, price, rating, image }) {

  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {

      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          price,
          rating,
          image
        }
      })
  }

  return (

    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      
      <img src={image}/>
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product;