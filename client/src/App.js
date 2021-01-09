import React from 'react';
import './App.css';
import UserPage from './Components/users/UserPage';
import Navbar from './Components/shared/Navbar';
import Footer from './Components/shared/Footer';

function App() {
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Navbar />
        <UserPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
