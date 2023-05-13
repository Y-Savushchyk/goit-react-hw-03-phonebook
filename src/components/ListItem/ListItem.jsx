import React from "react";
import css from './ListItem.module.css'

const ListItem = ({ onDeleteContact, number, name, id }) => {
  return (
    <>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.btn__on}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ListItem;