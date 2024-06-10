import React from "react";

import styles from "../Users.module.css";
import { useUserContext } from "../hooks/useUserContext";

function User({ id, name }) {
  const { users, setUsers, handleEdit } = useUserContext();
  const handleDelete = (id) => {
    const filterdUser = users.filter((user) => user.id !== id);
    setUsers(filterdUser);
  };

  return (
    <article className={styles.article}>
      <h4>{id}</h4>
      <h4>{name}</h4>
      <button
        className={`${styles.btn} ${styles.btnDelete}`}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          handleEdit(id);
        }}
      >
        Edit
      </button>
    </article>
  );
}

export default User;
