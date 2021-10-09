import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      },
      phone: string,
      website: string,
      company: {
        name: string,
        catchPhrase: string,
        bs: string
      }
    }
  }


  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    axios.get(`/users.json`).then((res) => {
      setUsers(res.data);
    })
  })

  return (
    <div>
        <ul className="users">
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
