import React from 'react';
import { Card } from 'semantic-ui-react'
import BarterCard from './BarterCard'

const PendingBarters = (props) => {


  return (
    <Card fluid>
      <Card.Content>
          <div><h1>Pending Barters for {props.user.username}</h1></div>
       </Card.Content>
       <Card.Content extra>
         <Card.Group itemsPerRow={1}>
           <BarterCard
             sentBarters={props.sentBarters}
             recdBarters={props.recdBarters}
             user={props.user}
             acceptBarter={props.acceptBarter}
             declineBarter={props.declineBarter}
          />
         </Card.Group>
        </Card.Content>
    </Card>
  )
}

export default PendingBarters
