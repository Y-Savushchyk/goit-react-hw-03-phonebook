import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import ListItem from '../ListItem/ListItem'

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      < li className={css.item} key={id}>
        <ListItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={id}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};