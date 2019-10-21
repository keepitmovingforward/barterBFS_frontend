import React, { Component } from 'react';
import { Image, Grid, Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import UserDetailBox from './UserDetailBox'

class ItemContainer extends Component {

  render() {

    return(
      this.props.selectedItemOwner===null ?
      <Card.Group itemsPerRow={this.props.itemsPerRow}>
        <ItemCard items={this.props.items}
          users={this.props.users}
          updateSelectedItem={this.props.updateSelectedItem}
          selectedItemOwner={this.props.selectedItemOwner}
          />
      </Card.Group>
      :
      <>
      <Grid.Column width={12}>
      <UserDetailBox user={this.props.selectedItemOwner}
        removeSelectedItem={this.props.removeSelectedItem}
        itemsPerRow={5}
        />
      </Grid.Column>
      </>
    )
  }

}

export default ItemContainer

  // <ProfileBox users={this.props.users} />

  // {this.props.items.filter(itemObj => itemObj.user_id === this.props.selectedItemOwner.id).map(itemObj =>
  //   <Card onClick={() => this.props.updateSelectedItem(this.props.users.find( user => user.id === itemObj.user_id))}
  //     key={itemObj.id}>
  //     <Image src={itemObj.image_url} verticalAlign='middle' centered id="itemPhoto" />
  //     <Card.Content>
  //       <Card.Header>{itemObj.name} by {this.props.users.find( user => user.id === itemObj.user_id).username}</Card.Header>
  //     </Card.Content>
  //   </Card>)
