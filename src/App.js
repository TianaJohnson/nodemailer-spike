import React, {Component} from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

import './App.css';
import { async } from 'q';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      email:'',
      message:'',
    }
    this.handelChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e  => {
    this.setState({[e.target.name]: e.target.value})

  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message} = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message,
    })
  }

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Nodemailer Spike 2.0</h2>
        <br/>
        <Form onSubmit={this.handleSubmit} style={{ width: '500px'}}>
          <FormGroup>
            <Label>Name: </Label>
            <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email: </Label>
            <Input
            type="text"
            name="email"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>message: </Label>
            <Input
            type="text"
            name="message"
            onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit!</Button>

        </Form>
        
        
      </header>
    </div>
  );
}
}

export default App;
