import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import UserBox from './UserBox'
import PendingBarters from './PendingBarters'


export default class MyBarterContainer extends Component {

  state = {
    barters: [],
    loading: true
  }

  componentDidMount() {
    fetch("http://localhost:4000/barters")
    .then(resp => resp.json())
    .then(bartersArray =>
      this.setState({
        barters: bartersArray,
        loading: false
      })
    )
  }

  acceptBarter = (barterObj) => {
    let barterId = barterObj.id
    let barterItems = barterObj.items
    //need to update barter status to accepted
    fetch(`http://localhost:4000/barters/${barterId}`, {
      method: "PATCH",
      headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify({
       id: barterId,
       sender_id: barterObj.sender_id,
       recipient_id: barterObj.recipient_id,
       barter_status: "accepted",
       items: barterItems
     })
   })
      .then(resp => resp.json())
      .then(updatedData => {
        this.setState({
          barters: updatedData.barters
        })
        this.props.acceptBarterUpdate(updatedData.users)
      })

    //need to update items by swapping owners
  }

  declineBarter = (barterObj) => {
    console.log(barterObj)
  }


  render() {
    let { currentUser } = this.props
    return (
      <>
      {this.state.loading ?
       null
       :
      <Grid celled id="barterPage">
        <Grid.Row>
            <Grid.Column width={12}>
              <PendingBarters
                user={currentUser}
                sentBarters={this.state.barters.filter(barter => barter.sender_id === currentUser.id)}
                recdBarters={this.state.barters.filter(barter => barter.recipient_id === currentUser.id)}
                acceptBarter={this.acceptBarter}
                declineBarter={this.declineBarter}
              />
            </Grid.Column>
            <Grid.Column width={4}>
            <UserBox user={this.props.currentUser}
              itemsPerRow={3}
            />
            </Grid.Column>
        </Grid.Row>
      </Grid>}
      </>
    )
  }
}
