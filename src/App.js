import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/forms/auth/Login";

import Register from "./components/forms/auth/Register";
import MainPage from "./components/views/MainPage";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Calculator from "./components/calculator/Calculator";

function App() {
    return (
        <>
            {" "}
            <ToastContainer position="top-right" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
