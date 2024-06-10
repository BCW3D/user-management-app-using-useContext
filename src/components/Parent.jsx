import React from "react";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import Users from "./Users";

import { useUserContext } from "../hooks/useUserContext";

function Parent() {
  const { isEdit } = useUserContext();
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h1>User Management App</h1>
      {isEdit ? <EditUser /> : <AddUser />}

      <Users />
    </div>
  );
}

export default Parent;
