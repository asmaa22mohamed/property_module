import { Form, Col, Row } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

const Search = ({ minprice, maxprice, setMinPrice, setMaxPrice }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='6'>
          <RangeSlider
            value={minprice}
            onChange={(e) => setMinPrice(e.target.value)}
            min={50}
            max={5000}
          />
        </Col>
        <Col xs='6'>
          <RangeSlider
            value={maxprice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min={minprice}
            max={1000}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Search;
