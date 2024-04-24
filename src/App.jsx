import './App.css'
import {Outlet} from "react-router-dom"
import "./App.css";

function App() {

  return (
    <>
      <p>header</p>
      <Outlet />
  </>
  )
}

export default App;
