import "./Header.scss"
import { Link, Outlet } from 'react-router-dom'
import {Fragment} from 'react'
import cart from '../../cart.png'
import search from '../../search-interface-symbol.png'
import { useStateValue } from '../../Context/context.jsx'
import LoginButton from "../Login-Button/login-button"
import LogoutButton from "../Logout-Button/logout-button"

function Header() {

  const [{ basket }] = useStateValue()

  console.log(basket)

  return (
    <Fragment>
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com//uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
      </Link>
      <div className="header__searchBox">
        <input type="text" className="header__searchInput" />
        <img className="header__searchImage" src={search} />
      </div>
      <div className="header__nav">
        
        <LoginButton 
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri="http://localhost:3000/"
          domain={process.env.REACT_APP_DOMAIN}
        />
        <LogoutButton />

        <Link className="header__link" to="#">
          <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="#">
          <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="checkout">
          <div className="header__optionBasket">
              <img className='header__cart-icon' src={cart} />
              <p className="header__optionLineTwo header__cart-count">{basket?.length}</p>
          </div>
        </Link>
        
      </div>
     
    </nav>
    <Outlet />
    </Fragment>
  )
}

export default Header;