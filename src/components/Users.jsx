import React from "react";
import { useUserContext } from "../hooks/useUserContext";
import User from "./User";

import styles from "../Users.module.css";

function Users() {
  const { users } = useUserContext();

  return (
    <section className={styles.section}>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </section>
  );
}

export default Users;
