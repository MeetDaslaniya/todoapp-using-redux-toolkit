import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import SideBar from "./Component/SideBar";
import Dashboard from "./Component/Dashboard";
import Completed from "./Component/Completed";
import Active from "./Component/Active";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="/" element={<SideBar />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Active" element={<Active />} />
          <Route path="Completed" element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
