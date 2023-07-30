import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Events from './components/Events';
import DynamicEvents from './components/DynamicEvents';
import Promo from './components/Promo';
import Promo2 from './components/Promo2';
import Promo3 from './components/Promo3';
import Hooks from './components/Hooks';
import Hooks2 from './components/Hooks2';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import CurrentMessage from './components/CurrentMessage';
import Morning from './components/Morning';
import Video from './components/Video';
import Song from './components/Song';
import Calculator from './components/Calculator';

import pic from './assests/pic.jpg';

function Logo(props) {
  const userPic = <img src={pic} width={200} height={150} alt='ss' />;
  return userPic;
}

function App() {
  return (
    <div>

      <Link to="/" className='nav-item'>Home</Link>
      <Link to="/about" className='nav-item'>About</Link>
      <Link to="/contact" className='nav-item'>Contact</Link>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Header name="Sara malik" age="20" />
      <Main greet="Hello there" />
      <Sidebar price="RS.100" />
      <Logo />
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <Events />
      <DynamicEvents />
      <Promo />
      <Promo2 />
      <Promo3 />
      <Hooks />
      <Hooks2 />
      <CurrentMessage />
      <Morning />
      <Video />
      <Song />
      <Calculator />

    </div>
  )


}

export default App;
