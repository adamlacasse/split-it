/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Auth from '../components/Auth';
import AuthCheck from '../components/AuthCheck';
import Account from '../components/Account';

import './App.scss';

const routeProps = {
  loader: <Spinner />,
  errorElement: <Error />,
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <main>
      <h1>Let&apos;s splizzle some shizzle!</h1>
      <Routes>
        <Route path="/" element={<AuthCheck user={user}><Navigate to="/account" /></AuthCheck>} />
        <Route
          {...routeProps}
          path="/auth"
          element={<Auth setUser={setUser} />}
        />
        <Route
          {...routeProps}
          path="/account"
          element={<AuthCheck user={user}><Account user={user} /></AuthCheck>}
        />
        <Route
          {...routeProps}
          path="/event/:id"
          element={<AuthCheck user={user}><h2>This is some event</h2></AuthCheck>}
        />
      </Routes>
    </main>
  );
}

export default App;
