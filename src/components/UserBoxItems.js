import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const UserBoxItems = (props) => {

  return (

      <Card id="userBoxCards">
        <Image src={props.item.image_url} verticalAlign='middle' centered id="myItemPhotos" />
        <Card.Content id="userItemDescription">
          <Card.Description id="myItemText">{props.item.name}</Card.Description>
        </Card.Content>
      </Card>

  )
}

export default UserBoxItems
