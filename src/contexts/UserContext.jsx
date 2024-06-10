import React, { useState } from "react";

export const UserContext = React.createContext({});

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jone" },
  ]);

  console.log(users);
  const [editUser, setEditUser] = useState({ id: "", name: "" });

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (id) => {
    const toEdit = users.filter((user) => user.id === id);
    setEditUser({ id: toEdit[0].id, name: toEdit[0].name });
    setIsEdit(true);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        handleEdit,
        editUser,
        setEditUser,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
