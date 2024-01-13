import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "../shared/footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
