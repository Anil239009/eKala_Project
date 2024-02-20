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
import AllArts from './components/Admin/AllArts';
import ArtList from './components/Admin/artList';
import UpdateArt from './components/Admin/UpdateArt'
import Delivery from './components/Admin/Delivery';
import Payment from './components/Admin/Payments';
import Users from './components/Admin/Users';

import AdminDetails from './components/Admin/AdminDetails';

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
            <Route path="/arts" element={<AllArts></AllArts>}></Route>
            <Route path="/admin" element={<AdminDetails></AdminDetails>}></Route>
            <Route path="/artList" element={<ArtList></ArtList>}></Route>
            <Route path="/UpdateArt" element={<UpdateArt></UpdateArt>}></Route>
            <Route path="/delivery" element={<Delivery></Delivery>}></Route>
            <Route path="/payments" element={<Payment></Payment>}></Route>
            <Route path="/users" element={<Users></Users>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;