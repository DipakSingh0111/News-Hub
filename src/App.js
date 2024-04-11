import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/general" element={<FetchData cat={"general"} />} />{" "}
          <Route path="/business" element={<FetchData cat={"business"} />} />{" "}
          <Route
            path="/entertainment"
            element={<FetchData s cat={"entertainment"} />}
          />{" "}
          <Route path="/health" element={<FetchData cat={"Health"} />} />{" "}
          <Route path="/science" element={<FetchData cat={"Science"} />} />{" "}
          <Route path="/sports" element={<FetchData cat={"Sports"} />} />{" "}
          <Route
            path="/technology"
            element={<FetchData cat={"Technology"} />}
          />{" "}
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </div>
  );
}

export default App;
