import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import UserDetailBox from './UserDetailBox'
import UserBox from './UserBox'

export default class UserDetailContainer extends Component {

  render() {
    return(
      this.props.currentUser ?
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={12}>
              <UserDetailBox user={this.props.selectedItemOwner}
                removeSelectedItem={this.props.removeSelectedItem}
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
            <UserDetailBox user={this.props.selectedItemOwner}
              removeSelectedItem={this.props.removeSelectedItem}
              currentUser={this.props.currentUser}
              itemsPerRow={7}
              />
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


}
