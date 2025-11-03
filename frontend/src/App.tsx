import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <nav style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#fff",
        borderBottom: "1px solid #ccc" }}>
        <Link to="/">🏠 Home</Link> | <Link to="/menu">🍛 Menu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Curry Shop</h1>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
