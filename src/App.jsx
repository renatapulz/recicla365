import './App.css'
import {Outlet} from "react-router-dom"
import "./App.css";
import NavBar from "./assets/components/header/header";
import {AuthContextProvider} from "./hooks/AuthContext"

function App() {

  return (
    <AuthContextProvider>
      <NavBar />
      <Outlet />
    </AuthContextProvider>
  )
}

export default App;
