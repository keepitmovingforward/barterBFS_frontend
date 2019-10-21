import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'

class App extends Component {

  constructor() {
    super()

    this.state={
      users: [],
      currentUser: null,
      selectedItemOwner: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
    .then(resp => resp.json())
    .then(usersArray =>
      this.setState({
        users: usersArray,
        currentUser: usersArray[0]
      })
    )
  }

  extractItems = () => {
    if(this.state.users.length === 0) {
      return this.state.users
    }
    else {
      let itemsArray = this.state.users.map(user => user.items)
      return itemsArray.flat()
    }
  }

  updateSelectedItem = (user) => {
    this.setState({
      selectedItemOwner: user
    })
  }

  removeSelectedItem = () => {
    this.setState({
      selectedItemOwner: null
    })
  }


  render() {
  return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" render={() =>
                <MainPage items={this.extractItems()}
                  users={this.state.users}
                  currentUser={this.state.currentUser}
                  updateSelectedItem={this.updateSelectedItem}
                  selectedItemOwner={this.state.selectedItemOwner}
                  removeSelectedItem={this.removeSelectedItem}
                  />
              } />
        </div>
      </Router>
    );
  }
}

export default App;
