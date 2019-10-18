import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react'

class NavBar extends Component {

  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <div style={{ borderBottom: '2px solid black', padding: '5px', marginBottom: '10px', marginTop: '2px' }}>
        <Image src="https://fontmeme.com/permalink/191017/566d1293d6fd07a9d76d9804bc7a75ca.png" id="logo"></Image>
        <Menu color='blue' inverted>
          <Menu.Item
            name='home'
            as={ Link }
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='my barters'
            as={ Link }
            to="/barters"
            active={activeItem === 'my barters'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}

export default NavBar;


//
//   <NavLink
//     style={{ textAlign: 'right', border: '1px solid black', margin: '2px', padding: '5px' }}
//     to="/"
//   >
//     Home
//   </NavLink>
//   <NavLink
//     style={{ textAlign: 'right', border: '1px solid black', margin: '2px', padding: '5px' }}
//     to="/barters"
//   >
//     My Barters
//   </NavLink>
//       </div>
