import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentts/Header";
import Home from "./pages/Home";
import Footer from "./componentts/Footer";
import Blog from "./pages/Blog";
import Kartas from './pages/Kartas'
import NotFound from "./pages/NotFound";
import Katalog from "./pages/Katalog"
import Mans from "./pages/Mans"
import Dotavka from "./pages/Dotavka"
import Kontakt from "./pages/Kontakt"
import Corzinca from "./pages/Corzinca"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/kartas" element={<Kartas/>}/>
        <Route path="/katalog" element={<Katalog/>}/>
        <Route path="/mans" element={<Mans/>}/>
        <Route path="/dotavka" element={<Dotavka/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/corzinca" element={<Corzinca/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
