import React from 'react'
import storeItems from "../data/items.json"
import { Col, Row } from 'react-bootstrap'
const Store = () => {
  return (
    <div>
      <h1>Store</h1>
       <Row>
          {storeItems.map(item => (
            <Col> {JSON.stringify(item)} </Col>
          ))}
    
       </Row>
    </div>
  )
}

export default Store
