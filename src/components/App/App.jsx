import React from 'react';
import Form from '../Form';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from '../FilterContacts/FilterContacts';
import { Container, Title, Section } from './App.styled';

import Notiflix from 'notiflix';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addContact = contactItem => {
  //   console.log(contactItem);
  //   // const { name } = contactItem;
  // if (this.state.contacts.some(contact => contact.name === name)) {
  //   Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
  // } else {
  //   this.setState(({ contacts }) => ({
  //     contacts: [contactItem, ...contacts],
  //   }));
  //   }
  // };

  addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (this.state.contacts.some(contact => contact.name === name)) {
      Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Section>Contacts</Section>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
