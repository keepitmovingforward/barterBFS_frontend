import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'

class ItemContainer extends Component {

  render() {

    return(
      <Card.Group itemsPerRow={this.props.itemsPerRow}>
        <ItemCard items={this.props.items}
          users={this.props.users}
          updateSelectedItem={this.props.updateSelectedItem}
          selectedItemOwner={this.props.selectedItemOwner}
          />
      </Card.Group>
    )
  }

}

export default ItemContainer
