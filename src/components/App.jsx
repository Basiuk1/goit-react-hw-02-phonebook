import React from 'react';
import Form from './Form';
// import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  // model.id = nanoid()

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <button type="submit">Add contact</button>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
