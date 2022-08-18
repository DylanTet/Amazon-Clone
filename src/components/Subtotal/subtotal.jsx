import { useStateValue } from '../../Context/context'
import './subtotal.scss'
import { getBasketTotal } from '../../Context/reducer'

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue()

    return (

        <div className='subtotal'>
            <p>Subtotal ( {basket.length} item(s) ) : $ {` ${getBasketTotal(basket)} `}</p>

            <small className='subtotal__checkbox'>
                <input type="checkbox" /> This order is a gift
            </small>

            <button>Proceed To Checkout</button>

        </div>

    )
     

}

export default Subtotal