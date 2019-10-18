import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import UserBox from './UserBox'

class ItemContainer extends Component {

  render() {

    return(
      this.props.currentUser ?
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={12}>
              <Card.Group itemsPerRow={4}>
              {this.props.items.filter(itemObj => itemObj.user_id !== this.props.currentUser.id).map(itemObj =>
                <ItemCard item={itemObj} key={itemObj.id} users={this.props.users}/>)
              }
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={4}>
            <UserBox user={this.props.currentUser}/>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      :
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={16}>
              <Card.Group itemsPerRow={6}>
              {this.props.items.map(itemObj =>
                <ItemCard item={itemObj} key={itemObj.id} users={this.props.users}/>)
              }
              </Card.Group>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default ItemContainer

  // <ProfileBox users={this.props.users} />
