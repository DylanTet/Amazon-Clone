import './checkout.scss'
import { useStateValue } from "../../Context/context.jsx"
import CheckoutProduct from '../../components/Checkout-Product/checkout-product.jsx'
import Subtotal from '../../components/Subtotal/subtotal.jsx'

const Checkout = () => {

  const [{basket}] = useStateValue()

  return (
    
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg"/>

        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty.</h2>
            <p>You have no items in your basket. To buy one or more items, click "Add To Cart" next to the item.</p>
          </div> 
        ) : (
          <div >
            <h2 className="checkout__title">Your shopping basket.</h2>
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                price={item.price}
                image={item.image}
                rating={item.rating}
                title={item.title}
              />
            ))}
            
          </div>
      
      )}

      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />

        </div>
      )}
      
    </div>
    
  )
}

export default Checkout;