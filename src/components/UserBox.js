import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import UserBoxItems from './UserBoxItems'

const UserBox = (props) => {

  return (
    props.user ?
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <div><h1>My Profile</h1></div>
          {props.user.username}
        </Card.Header>
        <Card.Meta>
         <span className='date'>Name: {props.user.name}</span>
         </Card.Meta>
         <Card.Description>
         <Image src={props.user.prof_pic} verticalAlign='middle' centered id="myUserPhoto" />
         </Card.Description>
         <Card.Header>
          <h2>My items</h2>
          </Card.Header>
       </Card.Content>
       <Card.Content extra>
         <Card.Group itemsPerRow={props.itemsPerRow}>
         {props.user.items.map(itemObj =>
           <UserBoxItems
             item={itemObj}
             key={itemObj.id}
             photoClass={"myItemPhotos"}
             cardClass={"userBoxCards"}
          />)
         }
         </Card.Group>
        </Card.Content>
    </Card>
    :
    null
  )
}


export default UserBox
