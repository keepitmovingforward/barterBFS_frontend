import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import UserBoxItems from './UserBoxItems'

const BarterCard = (props) => {


  return (
    <>
    {props.sentBarters.map(barterObj => (
    <Card fluid id={"sentBarters"} key={barterObj.id}>
      <Card.Header>
        <h1>Barter Request Sent To: {barterObj.recipient.username}</h1>
        <h3>Description: {barterObj.description}</h3>
      </Card.Header>
      <Card.Meta>
        <h3>Message: {barterObj.message}</h3>
      </Card.Meta>
      <Card.Content>
        <h3>My Offered Item(s)</h3>
        <Card.Group itemsPerRow={5}>
          {barterObj.items.filter(item => item.user_id === props.user.id).map(itemObj =>
            <UserBoxItems
              item={itemObj}
              key={itemObj.id}
              photoClass={"myItemPhotos"}
              cardClass={"userBoxCards"}
           />
          )}
          </Card.Group>
      </Card.Content>
      <Card.Content>
        <h3>Their Requested Item(s)</h3>
        <Card.Group itemsPerRow={5}>
          {barterObj.items.filter(item => item.user_id !== props.user.id).map(itemObj =>
            <UserBoxItems
              item={itemObj}
              key={itemObj.id}
              photoClass={"myItemPhotos"}
              cardClass={"userBoxCards"}
           />
          )}
          </Card.Group>
      </Card.Content>
    </Card>
  ))}
    {props.recdBarters.map(barterObj => (
      <Card fluid id={"recdBarters"} key={barterObj.id}>
        <Card.Header>
          <h1>Barter Request Received From: {barterObj.sender.username}</h1>
          <h3>Description: {barterObj.description}</h3>
        </Card.Header>
        <Card.Meta>
          <h3>Message: {barterObj.message}</h3>
        </Card.Meta>
      <Card.Content>
        <h3>Their Offered Item(s)</h3>
        <Card.Group itemsPerRow={5}>
          {barterObj.items.filter(item => item.user_id !== props.user.id).map(itemObj =>
            <UserBoxItems
              item={itemObj}
              key={itemObj.id}
              photoClass={"myItemPhotos"}
              cardClass={"userBoxCards"}
           />
          )}
          </Card.Group>
      </Card.Content>
      <Card.Content>
        <h3>My Requested Item(s)</h3>
        <Card.Group itemsPerRow={5}>
          {barterObj.items.filter(item => item.user_id === props.user.id).map(itemObj =>
            <UserBoxItems
              item={itemObj}
              key={itemObj.id}
              photoClass={"myItemPhotos"}
              cardClass={"userBoxCards"}
           />
          )}
          </Card.Group>
        </Card.Content>
        <Card.Content extra id="barterButtons">
          <Button positive onClick={() => props.acceptBarter(barterObj)}>Accept Barter</Button>
          <Button negative onClick={() => props.declineBarter(barterObj)}>Decline Barter</Button>
        </Card.Content>
    </Card>
  ))}
  </>
  )

}

export default BarterCard
