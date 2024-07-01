import React from 'react'
import { NavLink } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/coreui/dist/js/coreui.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Row, Col, ListGroup, Navbar, Form, InputGroup, Button} from"react-bootstrap"
export const Profile = () => {
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
      <ListGroup.Item><i className="bi bi-calendar4-week"> Appointment </i></ListGroup.Item>
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
      <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-coreui-ride="false"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-coreui-target="#carouselExampleCaptions"
      data-coreui-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-coreui-target="#carouselExampleCaptions"
      data-coreui-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-coreui-target="#carouselExampleCaptions"
      data-coreui-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/564x/da/c4/ea/dac4ea3325242482781e3822979a3c64.jpg" className="d-block w-100" alt="khong" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/a0/88/b6/a088b64ea04ed2c4d39cfaf0aed905bd.jpg" className="d-block w-100" alt="khong" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/c8/65/5a/c8655aae146b4b99433ab679ebeefe94.jpg" className="d-block w-100" alt="khong" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-coreui-target="#carouselExampleCaptions"
    data-coreui-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-coreui-target="#carouselExampleCaptions"
    data-coreui-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



      </div>
        </div>
    </div>
  )
}
