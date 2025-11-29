import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TavernSign from "./components/TavernSign";
import QuestBoard from "./components/QuestBoard";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
        <TavernSign />

        <nav style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "1rem",
          marginBottom: "2rem"
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: '#8b0000',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>🏠 Home</Link>
          <Link to="/menu" style={{
            textDecoration: 'none',
            color: '#8b0000',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>📜 Quest Board (Menu)</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<QuestBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
