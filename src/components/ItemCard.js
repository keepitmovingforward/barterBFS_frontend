import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const ItemCard = (props) => {

  return (

    <>
    {props.items.map(itemObj =>
      <Card as={Link} to={`/shops/${itemObj.user_id}`}
        key={itemObj.id}>
        <Image src={itemObj.image_url} verticalAlign='middle' centered id="itemPhoto" />
        <Card.Content>
          <Card.Header>{itemObj.name} by {props.users.find( user => user.id === itemObj.user_id).username}</Card.Header>
        </Card.Content>
      </Card>)
    }
    </>
  )
}

export default ItemCard
