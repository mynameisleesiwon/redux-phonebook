import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");

  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
