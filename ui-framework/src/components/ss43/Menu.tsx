import React from 'react'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { NavLink } from "react-router-dom";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Row, Col, ListGroup, Navbar, Form, InputGroup, Button} from"react-bootstrap"
import { Navigate } from 'react-router-dom';

export const Menu = () => {
    // const navigate = useNavigate();
  return (
    <div>
        <div className="component">
     <Row>
      <div className="left">
      <Col  >
      <h3 className="fs-1 text-primary">Sales.</h3>
        <ListGroup>
        <ListGroup.Item>
            <i className="bi bi-circle-square" ><NavLink className="nav-link" to={"/menu"}>Dashboard</NavLink></i>
        </ListGroup.Item>
      <ListGroup.Item>
        <i className="bi bi-calendar-check" ><NavLink className="nav-link" to={"/profile"}>Profile</NavLink></i>
        </ListGroup.Item>
      <ListGroup.Item><i className="bi bi-calendar4-week"><NavLink className="nav-link" to={"/chart"}>Chart</NavLink></i>
      </ListGroup.Item>
      {/* <ListGroup.Item><i className="bi bi-handbag"> Medicine Order </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-envelope-at-fill"> Message</i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-wallet2"> Payment </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-gear"> Setting </i></ListGroup.Item> */}
    </ListGroup>
    </Col>
      </div>
      
      <div className="right">
      <Col  >
        <Navbar className="bg-body-tertiary justify-content-between">
      <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
          <h2>Sales Information</h2>
          <div className="info" >
              <div>
              <Form.Label htmlFor="custom"> Customer </Form.Label>
              <Form.Control type="text"id="custom"/>
              </div>
              <div>
              <Form.Label htmlFor="id">Invoice ID</Form.Label>
              <Form.Control type="list-number"id="id" />
              </div>
              <div>
              <Form.Label htmlFor="start">Start Date</Form.Label>
              <Form.Control type="date"id="start" />
              </div>
              <div>
              <Form.Label htmlFor="end">End Date</Form.Label>
              <Form.Control type="date"id="end" />
              </div>
              
          </div>
          <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                         rows={rows}
                        columns={columns}
                        initialState={{
                         pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                          },
                         }}
                         pageSizeOptions={[5, 10]}
                         checkboxSelection
                     />
                </div>
        </Row>
      </Form>
    </Navbar>
        </Col>
      </div>
      
        
      </Row>
     </div>
    </div>
  )
}
