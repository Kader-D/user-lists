import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // Hook useState pour stocker la liste des utilisateurs
  const [listOfUsers, setListOfUsers] = useState([]);

  // Hook useEffect pour obtenir la liste des utilisateurs via l'API lors du premier rendu
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data); // Mettre à jour l'état avec les données récupérées
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération des données", error);
      });
  }, []); // Le tableau vide [] signifie que l'effet s'exécute uniquement lors du premier rendu

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {listOfUsers.map(user => (
          <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
