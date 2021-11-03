import React,{useState} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();


  const submitHandler = (e) => {
    e.preventDefault();
    if(keyword){
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  }

  return ( 
      
      <Form onSubmit={submitHandler} inline-block>
        <Row>
        <Col md={9}>
        <Form.Control
        type = 'text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-6 ml-sm-2'
      ></Form.Control>
        </Col>
        <Col md={3}>
        <Button
          type = 'submit'
          variant = 'outline-success'
          className = 'p-2'
        >
          Search
        </Button>
        </Col>
        </Row>
    </Form> 
      
  );
}
 
export default SearchBox;