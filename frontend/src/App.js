import "./App.css";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./pages/uploadPage";
import ResultScreen from "./pages/resultScreen";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App min-h-screen" style={{ backgroundColor: "#f5f5fa" }}>
      <div
        id="#heading"
        className="bg-white px-5 py-4 pt-5 text-3xl text-left font-bold drop-shadow-lg"
      >
        <span className="inline-flex">
          <span>
            <img src="./MLR_Tool.png" alt="MLR Review" className="mr-2 w-32"/>
          </span>
        </span>
      </div>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
