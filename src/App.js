import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Contacts from "./components/contacts";
import Menu from "./components/Menu";
import Home from "./components/home";

//const Home = () => <h1>Home Page</h1>; 
//если пишем эту строчку то надо убрать из меню из компонентов - home.js-это тоже самое

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>

  );
}

export default App;
