import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
