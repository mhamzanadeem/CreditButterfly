import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword1 from "./pages/ForgotPassword1";
import ForgotPassword2 from "./pages/ForgotPassword2";
import ForgotPassword3 from "./pages/ForgotPassword3";
import Home from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ForgotPassword1" element={<ForgotPassword1 />} />
        <Route path="/ForgotPassword2" element={<ForgotPassword2 />} />
        <Route path="/ForgotPassword3" element={<ForgotPassword3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
