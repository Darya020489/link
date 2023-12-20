import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Demo } from "./components/Demo";

function App() {
  return (
    <div style={{ width: "100%", height: "300px", backgroundColor: "orange" }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
// "homepage": "https://darya020489.github.io/deep-link-apple",

export default App;
