import Navbar from "./components/Navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Nosotros from "./components/Nosotros/Nosotros.js";
import Footer from "./components/Footer/Footer.js";
import Buscar from "./components/Buscar/Buscar.js";
import Contact from "./components/Contact/Contact.js";
import Instrument from "./components/Buscar/Instrument.js";
import ScrollToTop from "./components/default/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/mispartituras" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/buscar/:instrument" element={<Instrument />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
