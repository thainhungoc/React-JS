import "./App.css"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Row, Col, ListGroup, Navbar, Form, InputGroup, Button} from"react-bootstrap"

export default function App() {
  return (
   <div>
     <div className="component">
     <Row>
      <div className="left">
      <Col  >
      <h3 className="fs-1 text-primary">Sales.</h3>
        <ListGroup>
        <ListGroup.Item><i className="bi bi-circle-square" > Dashboard </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-calendar-check"> Lap Test </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-calendar4-week"> Appointment </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-handbag"> Medicine Order </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-envelope-at-fill"> Message</i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-wallet2"> Payment </i></ListGroup.Item>
      <ListGroup.Item><i className="bi bi-gear"> Setting </i></ListGroup.Item>
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