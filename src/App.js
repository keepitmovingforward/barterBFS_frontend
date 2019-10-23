import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Card, Image} from 'semantic-ui-react'
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import UserDetailContainer from './components/UserDetailContainer'
import LoginForm from './components/LoginForm'
import MyBarterContainer from './components/MyBarterContainer'

class App extends Component {

  constructor() {
    super()

    this.state={
      users: [],
      currentUser: null,
      loading: true
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
    .then(resp => resp.json())
    .then(usersArray =>
      this.setState({
        users: usersArray,
        loading: false
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

  acceptBarterUpdate = (userArray) => {
    let id = this.state.currentUser.id

    this.setState({
      users: userArray,
      currentUser: userArray.find(user => user.id === id)
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
          {this.state.loading ?
           null
           :
            <Switch>
              <Route path='/shops/:id' render={props => {
                let userId = parseInt(props.match.params.id)
                let foundUser = this.state.users.find(userObj => userObj.id === userId)
                return (foundUser ?
                  <UserDetailContainer
                    selectedItemOwner={foundUser}
                    items={this.extractItems().filter(itemObj => itemObj.user_id === userId)}
                    currentUser={this.state.currentUser}
                  />
                :
                <Card fluid>
                 <Image src={"https://i.imgur.com/vdU2Jlg.png"} verticalAlign='middle' centered />
                </Card>
                 )
                }}
                />

              <Route exact path="/login" render={() => {
                return (currentUser ?
                <Redirect to='/home' />
                :
                  <LoginForm
                    loginUser={this.loginUser}
                    />
                )}
                } />

              <Route exact path="/home" render={() =>
                  <MainPage items={this.extractItems()}
                    users={this.state.users}
                    currentUser={this.state.currentUser}
                    />
                } />

              <Route exact path="/barters" render={() => {
                return (currentUser ?
                  <MyBarterContainer
                    currentUser={this.state.currentUser}
                    acceptBarterUpdate={this.acceptBarterUpdate}
                    />
                  :
                  <Redirect to='/home' />
                )}
                } />

            </Switch>}

        </div>
      </Router>
    );
  }
}

export default App;
