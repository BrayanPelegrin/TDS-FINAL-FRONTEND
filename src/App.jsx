import Inicio from "./paginas/home";
import Registrar from "./paginas/registro";
import Login from "./paginas/login";
import Mantenimiento from "./paginas/Mantenimiento";
import Product from "./paginas/Product";
import ProductList from "./paginas/ProductList";
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Inicio/>} />
        <Route path="home" element={<Inicio />} />
        <Route path="registro" element={<Registrar />} />
        <Route path="login" element={<Login />} />
        <Route path="Mantenimiento" element={<Mantenimiento />} />
      </Routes>
    </Router>
  </>
  );
};

export default App;