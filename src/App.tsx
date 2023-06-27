import "./App.css"                                     
import "primereact/resources/themes/lara-dark-blue/theme.css"
import "primereact/resources/primereact.min.css";  
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path={publicRoutes.home} element={<Home />} />
      <Route path={publicRoutes.store} element={<Store />} />
      <Route path={publicRoutes.about} element={<About />} />
    </Routes>
  )
}

export default App
