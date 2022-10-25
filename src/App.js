import "./styles.css";

// React Router Example
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { HOCExample } from "./Components/HOCExample";
import { APIExample } from "./Components/APIExample";
import { ReactContextExample } from "./Components/ReactContextExample";
import Parent from "./ParentChildExample/Parent"; // use {} only for arrow function import, Functions do not

//Navigation Example
import { NavBar } from "./Components/NavBar";

export default function App() {
  return (
    <div className="App">
      {/* Navigation Example render navbar */}
      <NavBar />
      {/* Configure the Route using Routes and Route to pages */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/HOCExample" element={<HOCExample />}></Route>
        <Route path="/APIExample" element={<APIExample />}></Route>
        <Route
          path="/ReactContextExample"
          element={<ReactContextExample />}
        ></Route>
        <Route path="/ParentChildFunc" element={<Parent />}></Route>
      </Routes>
    </div>
  );
}
