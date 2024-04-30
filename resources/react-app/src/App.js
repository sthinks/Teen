import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import "./App.css";

function App() {
    return (
        <div className="w-full p-0 m-0 relative max-w-full">
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
