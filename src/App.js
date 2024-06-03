import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'john', age: 20 });

  const updateUser = (newName) => {
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => {
  const { user, updateUser, age } = useContext(UserContext);
  const [newName, setNewName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newName);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Update Name</button>
      </form>
      <div>
        name : {user.name} , age : {user.age}
      </div>
    </>
  );
};

const App = () => {
  return (
    <UserProvider>
      <UserConsumer />
    </UserProvider>
  );
};

export default App;
