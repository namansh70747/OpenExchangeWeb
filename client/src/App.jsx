import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HostelSelection from './pages/HostelSelection';
import ItemListings from './pages/ItemListings';
import BuySellRent from './pages/BuySellRent';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hostel-selection" element={<HostelSelection />} />
        <Route path="/item-listings" element={<ItemListings />} />
        <Route path="/buy-sell-rent" element={<BuySellRent />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;