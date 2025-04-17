import { useEffect } from 'react';
import React from 'react';
// import './App.css';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { getusers } from './features/counter/userSlice';
import { Users } from './app/Interface';

function App() {

  const user = useAppSelector(state => state.user.data as Users[])
  const dispatch = useAppDispatch();

  useEffect(()=>{
      dispatch(getusers())
  }, [dispatch])

  console.log(user)


  return (
    <div className="App">
      {
        user?.map((userData) => (
          <React.Fragment key={userData.id}>
          <h3>{userData.email}</h3>
          <h2>{userData.id}</h2>
          <h4>{userData.phone}</h4>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default App;
