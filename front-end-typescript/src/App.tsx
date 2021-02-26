import React, { useEffect, useState } from 'react';

import api from "./services/api"

import User from "./components/User";

interface IUser{
  name: string, 
  email: string
}

function App() {

  const [ users, setUser ] = useState<IUser[]>([])

  useEffect( () => {

    async function fetchData() {

      const { data } = await api.get<IUser[]>("/users");

      setUser(data);

    }
    
    fetchData();

  }, [])

  return (
    <div className="App">
      <p>ssdasd</p>
      {
        users.map(user => <User key={user.email} user={user} /> )
      }
    </div>
  );
}

export default App;
