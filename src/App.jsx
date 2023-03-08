import Multiply from "./pages/multiply";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GaussJordan from "./pages/gauss-jordan";

function App() {
    return (
                <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GaussJordan/>}></Route>
            </Routes>
        </BrowserRouter>
                </div>
    );
}

export default App;
