import React from 'react'
import {Button, Card} from "react-bootstrap";
import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemsProps={
  id :number,
  name:string,
  price: number,
  imgUrl : string,
}
const StoreItems = ({id,name,price,imgUrl}: StoreItemsProps) => {
  const quantity = 0
  return (
    <div>
      <Card className='h-100'>
          <Card.Img
           variant="top" 
           src={imgUrl}
           height="200px"
           style={{objectFit : "cover"}}
           />
           <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                 <span className='fs-2'> {name} </span>
                 <span className='ms-2 text-muted'> {formatCurrency(price)} </span>
            </Card.Title>
            <div className='mt-auto'>
              {quantity === 0 ?(
                 <Button className='w-100'>+ Add to Cart</Button>
              ): <div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
                <div className='d-flex align-items-center justify-content-center'>
                  Hi
                </div>
                </div>}
            </div>
          
           </Card.Body>
      </Card>
    </div>
  )
}

export default StoreItems;
