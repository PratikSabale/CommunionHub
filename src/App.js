import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
