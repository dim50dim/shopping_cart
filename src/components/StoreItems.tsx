import React from 'react'
import {Card} from "react-bootstrap";
type StoreItemsProps={
  id :number,
  name:string,
  price: number,
  imgUrl : string,
}
const StoreItems = ({id,name,price,imgUrl}: StoreItemsProps) => {
  return (
    <div>
      <Card>
          <Card.Img
           variant="top" 
           src={imgUrl}
           height="200px"
           style={{objectfit : "cover"}}
           />
      </Card>
    </div>
  )
}

export default StoreItems;
