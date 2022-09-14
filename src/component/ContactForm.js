import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  let dispatch = useDispatch();

  const createContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };

  return (
    <Form onSubmit={createContact}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력하세요"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>핸드폰 번호</Form.Label>
        <Form.Control
          type="number"
          placeholder="핸드폰 번호를 입력하세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
