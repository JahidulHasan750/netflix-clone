import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Protectes from "./components/Protectes";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login"  element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/account" element={<Protectes><Account></Account></Protectes> }></Route>
      </Routes>
    </AuthContextProvider>
  </>
  );
}

export default App;
