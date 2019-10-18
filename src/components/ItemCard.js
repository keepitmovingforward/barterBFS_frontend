import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const ItemCard = (props) => {

  return (

      <Card>
        <Image src={props.item.image_url} verticalAlign='middle' centered id="itemPhoto" />
        <Card.Content>
          <Card.Header>{props.item.name} by {props.users.find( user => user.id === props.item.user_id).username}</Card.Header>
        </Card.Content>
      </Card>

  )
}

export default ItemCard
