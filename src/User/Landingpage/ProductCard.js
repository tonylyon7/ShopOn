import React from 'react'
import './CSS/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

const ProductCard = props => {
    let {imgSrc, StoreName} = props.data;

  return (
    <Card className='p-0 overflow-hidden shadow featured-img'>
      <div className=''>
        <Card.Img variant='top' src={imgSrc} />
      </div>
      <Card.Body className='featured-storename'>
        <Card.Title className=' text-white'><h5>{StoreName}</h5></Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;