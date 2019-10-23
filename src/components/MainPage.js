import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import ItemContainer from './ItemContainer'
import UserBox from './UserBox'

export default class MainPage extends Component {

  render() {
    return(
      this.props.currentUser ?
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={12}>
                <ItemContainer items={this.props.items.filter(itemObj => itemObj.user_id !== this.props.currentUser.id)}
                  users={this.props.users}
                  currentUser={this.props.currentUser}
                  itemsPerRow={5}
                  />
            </Grid.Column>
            <Grid.Column width={4}>
            <UserBox user={this.props.currentUser}
              itemsPerRow={3}
            />
            </Grid.Column>
        </Grid.Row>
      </Grid>
      :
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={16}>
                <ItemContainer items={this.props.items}
                  users={this.props.users}
                  currentUser={this.props.currentUser}
                  itemsPerRow={6}
                  />
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


}
