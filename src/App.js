import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
    <Container>
      <h1 className="text-center m-3">연락처</h1>
      <Row>
        <Col className="border-column">
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
