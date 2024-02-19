import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navigation';
import HeadingAbout from './components/home/HeadingAbout';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Login from './components/Login';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ArtistBook from './components/home/ArtistBook';
import ArtGallery from './components/home/ArtGallery';
import Registration from './components/Registration';

function App(){
  return (
    <div className='main-container'>
      <div>
        <NavigationBar></NavigationBar>
        <div className='min-h'>
          <Routes>
            <Route path="" element={<HeadingAbout></HeadingAbout>}></Route>
            <Route path="/feedback" element={<Feedback></Feedback>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/gallery" element={<ArtGallery></ArtGallery>}></Route>
            <Route path='/register' element={<Registration></Registration>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;