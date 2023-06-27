import Home from "./Components/Home";
import Ordering from "./Components/Ordering";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/Ordering"
        element={
          <>
            <Navbar />
            <Ordering />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
