import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Login from './components/Login/Login';
import About from './components/About/About';
import PlaceDetails from "./components/Places/PlaceDetails";
import ExclusivePlaceDetails from './components/Places/ExclusivePlaceDetails';
import TravelStories from './components/Places/TravelStrories';
import Recommended from './components/RecommendedPlaces/Recommended';
import User from './components/Header/User';
import Profile from './components/Profile/Profile';
import RecommendedDetails from './components/RecommendedPlaces/RecommendedDetails';
import Cart from './components/Cart/Cart';


function App() {




  return (
    <Router>
      <Header />
      <User />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Login />}  />
      <Route  path="/about" element={<About />} />
      <Route path="/featuredplace/:id" element={<PlaceDetails />} />
      <Route path="/exclusiveplace/:id" element={<ExclusivePlaceDetails />} />
      <Route path="/travelstories/:id" element={<TravelStories />} />
      <Route path="places" element={<Recommended />} />
      <Route path="profile" element={<Profile />} />
      <Route path="recommendedplaces/:id" element={<RecommendedDetails />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
