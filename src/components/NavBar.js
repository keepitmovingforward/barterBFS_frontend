import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react'

class NavBar extends Component {

  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout = (e, { name }) => {
    let response = window.confirm("Please confirm Logout")
    if (!response) {
      return
    }
    this.setState({ activeItem: name })
    this.props.logoutUser()
  }

  render() {
    const { activeItem } = this.state

    return (

      <div style={{ borderBottom: '2px solid black', padding: '5px', marginBottom: '10px', marginTop: '2px' }}>
        <Image src="https://fontmeme.com/permalink/191017/566d1293d6fd07a9d76d9804bc7a75ca.png" id="logo"></Image>
        <Menu color='blue' inverted>
          <Menu.Item
            name='home'
            as={ Link }
            to="/home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        {this.props.currentUser ?
          <>
          <Menu.Item
            name='my barters'
            as={ Link }
            to="/barters"
            active={activeItem === 'my barters'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Logout'
            active={activeItem === 'logout'}
            onClick={this.logout}
          />
          </>
        :
        <Menu.Item
          name='Login'
          as={ Link }
          to="/login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        }
        </Menu>
      </div>
    )
  }
}

export default NavBar;
