import "./App.css"                                     
import "primereact/resources/themes/lara-dark-blue/theme.css"
import "primereact/resources/primereact.min.css";  
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Aside from "./components/aside/Aside";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={publicRoutes.home} element={<Home />} />
        <Route path={publicRoutes.contact} element={<Contact />} />
        <Route path={publicRoutes.about} element={<About />} />
      </Routes>
      <Aside />
    </>
  )
}

export default App
