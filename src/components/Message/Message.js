import React from 'react';
import css from './Message.module.css';

export const Message = () => {
  return (
    <>
      <h2 className={css.title}>Contact list</h2>
      <p className={css.txt}>There are no any contacts ... </p>
    </>
  );
};