import './home.scss'
import Product from '../../components/Product/product.jsx'
import hero from '../../hero-img.jpg'

const Home = () => {

  return (
    <div className="home">
      <img className="home__image" src={hero} alt="hero"/>

      <div className="home__row">
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product 
          image="https://images1.penguinrandomhouse.com/cover/9780307939845"
          id='124542'
          title='The Lean Startup'  
          price={12.54}
          rating={5}
        />
      </div>
      
    </div>
  )
}

export default Home;