import { Routes, Route } from "react-router-dom";
import MyDashboard from "./pages/MyDashboard";

function App() {
  return (
    
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<MyDashboard />} />
        </Routes>
      </div>
  
  );
}

export default App;
