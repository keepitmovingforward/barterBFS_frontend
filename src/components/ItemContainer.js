import React, { Component } from 'react';
import ItemCard from './ItemCard'
import { Grid, Card } from 'semantic-ui-react'

class ItemContainer extends Component {



  render() {
    console.log(this.props)

    return(
      <Grid celled>
        <Grid.Row>
            <Grid.Column width={12}>
              <Card.Group itemsPerRow={4}>
              {this.props.items.map(itemObj =>
                <ItemCard item={itemObj} key={itemObj.id} users={this.props.users}/>)
              }
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={4}>
            <h1>Initiate Barter Component</h1>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


}


export default ItemContainer
