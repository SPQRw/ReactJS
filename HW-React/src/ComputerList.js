import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeName, changeIP, toggleStatus } from './actions';

const Computer = ({
  computer,
  changeName,
  changeIP,
  toggleStatus,
}) => {
  const [newName, setNewName] = useState('');
  const [newIP, setNewIP] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleIPChange = (e) => {
    setNewIP(e.target.value);
  };

  return (
    <div>
      <h2>Computer:{computer.name}</h2>
      <p>IP Address: {computer.ip}</p>
      <p>Status: {computer.status}</p>

      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={handleNameChange}
      />
      <button onClick={() => changeName(computer.id, newName)}>Change Name</button>

      <input
        type="text"
        placeholder="New IP"
        value={newIP}
        onChange={handleIPChange}
      />
      <button onClick={() => changeIP(computer.id, newIP)}>Change IP</button>

      <button onClick={() => toggleStatus(computer.id)}>Toggle Status</button>
    </div>
  );
};

export default connect(null, {
  changeName,
  changeIP,
  toggleStatus,
})(Computer);
