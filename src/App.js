import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import UserDetailContainer from './components/UserDetailContainer'
import LoginForm from './components/LoginForm'

class App extends Component {

  constructor() {
    super()

    this.state={
      users: [],
      currentUser: null
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

  logoutCurrentUser = () => {
    this.setState({
      currentUser: null
    })
  }

  loginUser = (user) => {
    this.setState({
      currentUser: user
    })
  }
  // updateSelectedItem = (user) => {
  //   this.setState({
  //     selectedItemOwner: user
  //   })
  // }
  //
  // removeSelectedItem = () => {
  //   this.setState({
  //     selectedItemOwner: null
  //   })
  // }


  render() {
    let { currentUser } = this.state
  return (
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser}
            logoutUser={this.logoutCurrentUser}
            />
            <Switch>
              <Route path='/shops/:id' render={props => {
                let userId = parseInt(props.match.params.id)
                let foundUser = this.state.users.find(userObj => userObj.id === userId)
                return (
                  <UserDetailContainer
                    selectedItemOwner={foundUser}
                    items={this.extractItems().filter(itemObj => itemObj.user_id === userId)}
                    currentUser={this.state.currentUser}
                  />
                )
                }}
                />

              <Route exact path="/login" render={() => (
                currentUser ?
                <Redirect to='/home' />
                :
                  <LoginForm
                    loginUser={this.loginUser}
                    />
                  )
                } />

              <Route exact path="/home" render={() =>
                  <MainPage items={this.extractItems()}
                    users={this.state.users}
                    currentUser={this.state.currentUser}
                    />
                } />
            </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
