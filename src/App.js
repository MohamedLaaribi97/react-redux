import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage";

import DescPage from "./pages/DescPage";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
     <NavBar/>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/DescPage/:id" element={<DescPage />} />
      </Routes>
    </>
  );
};

export default App;
