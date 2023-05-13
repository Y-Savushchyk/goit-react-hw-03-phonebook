import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p className={css.name}>{name} :</p>
        <p className={css.text}>{number} :</p>
        <button
          className={css.btn__on}
          type="button"
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
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