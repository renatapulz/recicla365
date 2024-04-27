import './App.css'
import {Outlet} from "react-router-dom"
import "./App.css";
import NavBar from "./assets/components/header/header";
import {AuthContextProvider} from "./hooks/AuthContext";
import {CollectionPointContextProvider} from "./hooks/CollectionPointContext";

function App() {

  return (
    <AuthContextProvider>
      <CollectionPointContextProvider>
      <NavBar />
      <Outlet />
      </CollectionPointContextProvider>
    </AuthContextProvider>
  )
}

export default App;
