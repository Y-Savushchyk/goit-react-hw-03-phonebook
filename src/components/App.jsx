import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import  css from './App.module.css'

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Don Simon', number: '894-23-16' },
      // { id: 'id-2', name: 'Vlad Jmill', number: '993-32-76' },
      // { id: 'id-3', name: 'Benito Mussolini', number: '123-66-09' },
      // { id: 'id-4', name: 'Stas Rainy', number: '937-99-92' },
      // { id: 'id-5', name: 'Kevin Smith', number: '794-80-00' },
    ],
    filter: '',
  };

  addToList = (name, number) => {
    const nameId = nanoid();
    const { contacts } = this.state;
    const newContact = {
      id: nameId,
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContacts = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addToList} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContacts={this.deleteContacts}
          />
        </Section>
      </div>
    );
  }
}

export default App;