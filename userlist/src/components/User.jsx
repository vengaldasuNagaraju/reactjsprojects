import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api?results=50");
      const { results } = await res.json();
      setUsers(results);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last} ${user.location.city} ${user.location.country}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h4 className="title">Live User Filter</h4>
        <small className="subtitle">Search by name and/or location</small>
        <input
          type="text"
          id="filter"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <ul id="result" className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index}>
              <img src={user.picture.large} alt={user.name.first} />
              <div className="user-info">
                <h4>{`${user.name.first} ${user.name.last}`}</h4>
                <p>{`${user.location.city}, ${user.location.country}`}</p>
              </div>
            </li>
          ))
        ) : (
          <li>
            <h3>Loading...</h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default User;
