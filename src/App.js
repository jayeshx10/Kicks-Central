import "./App.css";
import { useEffect } from "react";
import axios from "axios";

import { Header } from "components/Header.js";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
