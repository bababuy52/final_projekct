import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentts/Header";
import Home from "./pages/Home";
import Footer from "./componentts/Footer";
import Blog from "./pages/Blog";
import Kartas from './pages/Kartas'
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/kartas" element={<Kartas/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
