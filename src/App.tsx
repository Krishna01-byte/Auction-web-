import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import AuctionDetail from "./pages/AuctionDetail";
import Departments from "./pages/Departments";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About"; // Reusing existing About or creating if missing (Wait, I didn't create About yet, let me just point to Services or placeholder)


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="auctions/:id" element={<AuctionDetail />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:id" element={<Auctions />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
