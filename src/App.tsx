import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeView from './views/HomeView';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import RecapBar from './components/RecapBar';
import MainContent from './layout/MainContent';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="flex flex-1">
      <RecapBar/>
      <MainContent/>
      </div>
      {/* <HomeView/> */}
      <Footer/>
    </div>
  );
}

export default App;
