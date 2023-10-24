import './App.css';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import ControleFinanceiro from './pages/ControleFinanceiro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ControleFinanceiro />} />
      </Routes>
    </div>
  );
}

export default App;
