import React from 'react';
import './App.css';
import PhotoProfile from './Profile/PhotoProfile';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

function App() {
  return (
    <div className="App">
    <PhotoProfile/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
