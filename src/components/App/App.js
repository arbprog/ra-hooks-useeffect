import React, { useState } from 'react';
import List from '../List/List';
import './App.css';
import useFetch from '../../hooks/useFetch';
import Details from '../Details/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(null);

  const [{ data, loading }] = useFetch(`${process.env.REACT_APP_USERS_URL}/users.json`);
  if (data && (JSON.stringify(users) !== JSON.stringify(data))) setUsers(data);

  return (
    <div className='App'>
      { loading && <div>{'Loading...'}</div> }
      <List
        items={users}
        selectedID={selectedUserID}
        onClick={(id) => setSelectedUserID(id)}
      />
      { selectedUserID && <Details info={users.find((o) => o.id === selectedUserID)}/> }
    </div>
  );
}

export default App;