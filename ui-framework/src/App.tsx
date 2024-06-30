import "./App.css"
import "./components/ss43/Color.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DataGrid, GridColDef,  } from '@mui/x-data-grid';
import ExUI from "./components/ss43/ExUI";
import { Router } from "./components/ss49/Router";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
   <div>
    <NavLink className="nav-link" to={""}>Mac DInh</NavLink>
    <NavLink className="nav-link" to={"/chotam"}>Home</NavLink>
    <NavLink className="nav-link" to={"/duide"}>Mes</NavLink>
    <NavLink className="nav-link" to={"/daika"}>Porcher</NavLink>
    <NavLink className="nav-link" to={"/bmw"}>BMW</NavLink>
    <NavLink className="nav-link" to={"/bmw"}>Product</NavLink>
    
    

     <Router/>
   </div>
  )
}