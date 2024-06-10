import React from "react";

import { useUserContext } from "../hooks/useUserContext";

import styles from "../Users.module.css";

function EditUser() {
  const { editUser, setEditUser, users, setUsers } = useUserContext();

  console.log(editUser.id);

  const handleChange = (e) => {
    const editedUser = e.target.value;
    setEditUser({ id: editUser.id, name: editedUser });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const foundIndex = users.findIndex((user) => user.id === editUser.id);
    const usersData = users;
    usersData.forEach((user, i, array) => {
      if (i === foundIndex) {
        array[i] = editUser;
      }
    });
    setUsers(usersData);
    setEditUser({ id: "", name: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={editUser.name}
          onChange={handleChange}
        />
        <button className={styles.btn} type="submit">
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
