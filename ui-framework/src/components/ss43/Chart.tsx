import React from 'react'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Row, Col, ListGroup, Navbar, Form, InputGroup, Button} from"react-bootstrap"
export const Chart = () => {
  return (
    <div>
        <div className='component'>
        <div className="left">
      <Col  >
      <h3 className="fs-1 text-primary">Sales.</h3>
        <ListGroup>
        <ListGroup.Item>
            <i className="bi bi-circle-square" >
                <NavLink className="nav-link" to={"/menu"}>Dashboard</NavLink></i>
        </ListGroup.Item>
      <ListGroup.Item>
        <i className="bi bi-calendar-check" ><NavLink className="nav-link" to={"/profile"}>Profile</NavLink></i>
        </ListGroup.Item>
      <ListGroup.Item><i className="bi bi-calendar4-week"></i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-calendar4-week"><NavLink className="nav-link" to={"/chart"}>Chart</NavLink></i>
      </ListGroup.Item>
      {/* <ListGroup.Item><i className="bi bi-handbag"> Medicine Order </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-envelope-at-fill"> Message</i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-wallet2"> Payment </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-gear"> Setting </i></ListGroup.Item> */}
     </ListGroup>
        </Col>
      </div>



      <div className='right'>
      
        </div>
    </div>
    </div>

)
}
