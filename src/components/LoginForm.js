import React from "react";
import { Grid, Button, Form, Segment, Message } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = () => {
    fetch("https://barter-bfs-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => {
      return res.json()
    }).then(data => {
      if (data.id) {
        this.props.loginUser(data)
      }
      else {
          alert(data.message)
      }
    })
  };

  render() {
    return (
      <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
          <Form
            onSubmit={this.handleLoginSubmit}
            size="large"
            key="large"
          >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Username"
              placeholder="Enter Username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Enter Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default LoginForm;


// .then(data => {
//   if(data.success){
//     console.log(data.token)
//     localStorage.setItem("jwt", data.token)
//     this.props.onChangeUser(data.user_data)
//   }else{
//     alert(data.message)
//   }
// })
