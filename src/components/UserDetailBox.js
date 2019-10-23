import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image, Icon, Dimmer, Loader, Segment } from 'semantic-ui-react'
import UserBoxItems from './UserBoxItems'

const UserDetailBox = (props) => {

  return (
    <>
    {props.user ?
    <>
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <div><h1>{props.user.username}'s Shop</h1></div>

        </Card.Header>
         <Card.Description>
         <Image src={props.user.prof_pic} verticalAlign='middle' centered id="userDetailPhoto" />
         </Card.Description>
         <Card.Header>
          <h2>{props.user.username}'s items up for Barter</h2>
          </Card.Header>
       </Card.Content>
       <Card.Content extra>
         <Card.Group itemsPerRow={props.itemsPerRow}>
         {props.user.items.map(itemObj =>
           <UserBoxItems
           item={itemObj}
           key={itemObj.id}
           users={props.user}
           photoClass={"userDetailItemPhotos"}
           cardClass={"userDetailBoxCards"}
           />)
         }
         </Card.Group>
        </Card.Content>
    </Card>
    <div id="userDetailButtons">
    <Button animated as={Link} to={`/home`}>
      <Button.Content visible>Back to All Items</Button.Content>
      <Button.Content hidden>
        <Icon name='home' />
      </Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>Initiate Barter</Button.Content>
        <Button.Content hidden>
          <Icon name='handshake'/>
        </Button.Content>
      </Button>
    </div>
    </>
    :
    <Segment>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' centered />
    </Segment>

  }
  </>
  )
}

export default UserDetailBox
