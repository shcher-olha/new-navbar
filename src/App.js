import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Contacts from "./components/contacts";
import Menu from "./components/menu";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
