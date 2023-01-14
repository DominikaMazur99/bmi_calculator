import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/forms/auth/Login";

import "./App.scss";
import Register from "./components/forms/auth/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
