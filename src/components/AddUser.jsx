import React, { useState } from "react";

import { useUserContext } from "../hooks/useUserContext";

import styles from "../Users.module.css";

function AddUser() {
  const { users, setUsers } = useUserContext();

  const [newUser, setNewUser] = useState({ id: "", name: "" });

  const handleChange = (e) => {
    setNewUser({ id: new Date().getTime().toString(), name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: "", name: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <button className={styles.btn} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
