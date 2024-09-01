import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Service from "./Service";
import Admin from "./components/admin/Admin";

import Getcontacts from "./components/admin/Getcontacts";
import Getusers from "./components/admin/Getusers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="getusers" element={<Getusers />} />
            <Route path="getcontacts" element={<Getcontacts />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
