import React, { Component } from 'react';

import './App.css';
import './styles/components.css';
import './styles/form.css';
import Logo from './styles/water_drop.png';


import DeliveryForm from './components/DeliveryForm';
import QuickAccessBar from './components/QuickAccessBar';
import SearchBar from './components/SearchBar';
import RecentEntries from './components/RecentEntries'

class App extends Component {
  render() {
    return (
      // App Container
      <div className="App">

        {/* Header Container */}
        <header className="App-header">
          <div className="App-logo-container">
            <img src={Logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-title-container">
            <h1 className="App-title">Water</h1>
          </div>
          <div></div>
        </header>

        {/* Content Container */}
        <div className="Content-container">


          {/* Quick Access Bar */}
          <div className="Quick-access-bar-container">
            <QuickAccessBar />
          </div>

          {/* Delivery - Truck Row */}
          <div className="Delivery-truck-container">

            {/* Delivery Form */}
            <div className="Delivery-container">
              <h3>Delivery Form</h3>
              <DeliveryForm />
            </div>

            {/* Truck Form */}
            <div className="Truck-container">
              <h3>Truck Form</h3>
              <br></br>
              <br></br>
              <br></br>
              <h4>Content in development...</h4>
            </div>

          </div>

          {/* Running Total - Search Bar Row */}
          <div className="total-search-container">

            {/* Running Total Field */}
            <div className="running-total-container">
              <h3>Running Totals</h3>
              <br></br>
              <h4>Content in development...</h4>
              {/* <RunningTotalField /> */}
            </div>

            {/* Search Bar */}
            <div className="search-bar-container">
              <SearchBar />
            </div>

          </div>

            {/* Recent Entries */}
            <div className="recent-entries-container">
            <h3>Recent Entries</h3>
            <RecentEntries />
            </div>

        </div>



        </div> 
    );
  }
}

export default App;
