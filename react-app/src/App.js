import React, {useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[users, setUsers] = useState([]);

    const fetchPost = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept-Language': 'fr',
            // 'Authorization': `Bearer ${accessToken}`,
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {headers});
            setUsers(response?.data?.data)
        } catch (err) {
            console.error(err);
        }
    };

  useEffect( () => {
      fetchPost().then(r => console.log(r))
  }, [])

    const render = useCallback(() => {
    return users && users.map((user, index) => {
      return (
          <li key={index}>
            <span>{user.user_id}</span>
            :
            <span>{user.user_name}</span>
          </li>
      )
    })
  }, [users])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>CODE</code> and save to reloadddd
        </p>
        <ul>
            {render()}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          duongdx - updated 2023/10/15
        </a>
      </header>
    </div>
  );
}

export default App;
