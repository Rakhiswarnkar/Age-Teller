import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Agestats from './component/Agestats';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newDate : '',
      birthday : '1996-08-28'
    }
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({newDate:inputValue});
    // console.log(this.state);
  };

  changeBirthday = () => {
    const {newDate} = this.state;
    this.setState({birthday:newDate})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>Input Your Birthday</h2> 
        <Form inline>
        <FormControl type='date' onChange={ this.handleChange }></FormControl>
        {' '}
        <Button onClick = { this.changeBirthday }>Submit</Button>
        </Form>
        <Agestats date= {this.state.birthday}/>
      </div>
    );
  }
}
export default App;

