import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import NavList from './Components/NavList'
import Cards from './Components/Cards'
import Carousel from "./Components/Carousel";
import ImgCards from './Components/ImgCards'
import Deals from './Components/Deals'
import  Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavList />
      <img src="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_toggle-02-nonVIP.png" alt=".." className="img-fluid" />

      <Carousel />
      <img src="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_category-icon-title.png" alt=".." className="img-fluid" />
      <h4 className="ms-5">
        TRENDING
    </h4>
      < Cards />
      < ImgCards />
      <Deals />
      <Footer/>
    </div>
  );
}

export default App;
