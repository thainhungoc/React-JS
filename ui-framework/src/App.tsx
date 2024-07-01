// import "./App.css"
// import "./components/ss43/Color.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DataGrid, GridColDef,  } from '@mui/x-data-grid';
import { Router } from "./components/ss43/Router";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
   <div>
    {/* <NavLink className="nav-link" to={""}></NavLink>
    <NavLink className="nav-link" to={"/menu"}>Menu</NavLink> */}
    
    
    

     <Router/>
   </div>
  )
}