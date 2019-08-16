import React, {Component} from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';

import './App.css';

class App extends Component {

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Nodemailer Spike 2.0</h2>
        <br/>
        <Form style={{ width: '500px'}}>
          <FormGroup>
            <Label>Name: </Label>
            <Input
            type="text"
            name="name"
            // onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email: </Label>
            <Input
            type="text"
            name="email"
            // onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>message: </Label>
            <Input
            type="text"
            name="message"
            // onChange={this.handleChange}
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
