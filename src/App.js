import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import ItemContainer from './components/ItemContainer'

class App extends Component {

  constructor() {
    super()

    this.state={
      users: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
    .then(resp => resp.json())
    .then(usersArray =>
      this.setState({
        users: usersArray
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


  render() {
  return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" render={() =>
                <ItemContainer items={this.extractItems()} users={this.state.users}/>
              } />
        </div>
      </Router>
    );
  }
}

export default App;
