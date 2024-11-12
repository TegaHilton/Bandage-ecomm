// import { useState } from "react";
import "./App.css";
import Nav from "./components/navbar/nav";
import FirstShow from "./pages/product/firstshow.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <FirstShow />
      <ToastContainer />
    </>
  );
}

export default App;
