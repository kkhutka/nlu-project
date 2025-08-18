import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";



function App() {

  return (
    <>
      <NavBar />
      <div className="container">
       <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      </div>

    </>
  )
}

export default App
