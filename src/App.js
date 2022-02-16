import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
