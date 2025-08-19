import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FlavorsPage from "./pages/Flavors/FlavorsPage.jsx";
import FlavorCategoryPage from "./pages/Flavors/FlavorCategoryPage.jsx";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flavors" element={<FlavorsPage />} />
          <Route path="/flavors/:category" element={<FlavorCategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />  
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
