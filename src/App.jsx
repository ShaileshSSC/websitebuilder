import './App.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  }

  return (
    <>
    <nav className='nav'>
      <ul>
        <li><Link className='link' to="/">features</Link></li>
        <li><Link className='link' to="/about">pricing</Link></li>
        <li><Link className='link' to="/services">login</Link></li>
      </ul>
    </nav>

    <section className='hero'>
     <img className='hero-img' src="/background.jpg" alt="" />
     <img className='hero-phone' src="/hero.png" alt="" />
     <h1 className='hero-text'>CREATE A WEBSHOP <br />
      IN EASY MODE WITH A.I</h1>
      <button onClick={handleClick} className='hero-button'>TRY NOW</button>
    </section>

    <section className='hero-test'>
          <h1 className='hero-test-h1'>Generate unique styles!</h1>
          <img className="hero-test-img" src="/blur4.jpg" />
          <img className='hero-test-phone' src="/phone.png" alt="" />
          <img className='hero-test-desktop' src="/phone.png" alt="" />
          <img className='hero-test-phone2' src="/phone.png" alt="" />
    </section>

    <section className="hero2">
    <img className='hero-img hero-img-reverse' src="/background2.jpg" alt="" />
    <img className='hero-world' src="/earth.png" alt="" />
        <div className='gradient'></div>
    <img className='hero-stats' src="/board2.png" alt="" />
    <img className='hero-products' src="/products.png" alt="" />
    <h1 className='hero-text hero-text2'>Sell to customers <br /> worldwide</h1>
    <h1 className='hero-text hero-text3'>Track website <br /> analytics</h1>
    </section>

    <section className='hero3'>
        <img className='hero3-img' src="blue-background.jpg" alt="" />
    </section>
    </>
  )
}

export default App
