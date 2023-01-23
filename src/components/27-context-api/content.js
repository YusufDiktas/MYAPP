import React, { useContext, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Content = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurency] = useState("EUR");
  const [result, setResult] = useState(0);

  const store = useContext(StoreContext);
  const {currencies} = store;

  useEffect(()=> {
    const rslt = (amount / currencies[currency]).toFixed(2);
  }, [amount, currency])

  return (
    <div className="p-5">
      <InputGroup className="mb-3">
        <Form.Control value={amount} onChange={(e)=> setAmount(e.targer.value)} />
        <Form.Select >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">Result: {result}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};
export default Content;
