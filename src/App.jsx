import React from 'react';
import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto.jsx"
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"

function App() {
  return (
    <main>
    <div className = "container">
   <ProfilePhoto/>
   <FullName/>
   <Address/>
   </div>
    </main>
  );
}

export default App;