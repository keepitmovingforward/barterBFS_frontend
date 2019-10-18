import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import UserBoxItems from './UserBoxItems'

const UserBox = (props) => {
  console.log(props)

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
         <Image src={props.user.prof_pic} verticalAlign='middle' centered id="userPhoto" />
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <Card.Group itemsPerRow={3}>
         {props.user.items.map(itemObj =>
           <UserBoxItems item={itemObj} key={itemObj.id} users={props.user}/>)
         }
         </Card.Group>
        </Card.Content>
    </Card>
    :
    null
  )
}


export default UserBox

//
