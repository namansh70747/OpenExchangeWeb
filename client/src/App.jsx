import {Navigate,  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HostelSelection from './pages/HostelSelection';
import ItemListings from './pages/ItemListings';
import BuySellRent from './pages/BuySellRent';
import ContactUs from './pages/ContactUs';
import Compiler from './Components/Compiler';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Navigate to="/Login" replace />} />
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<AdminLogin/>}></Route>

        <Route path='/App' element={<Compiler />}>
        <Route path='*' element={<Navigate to="/Login" replace />} />
          
          {/* <Route path='Contact' element={<Contact />} /> */}
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
