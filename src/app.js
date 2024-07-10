import React from 'react';
import NavBar from './components/nav_bar';
import ItemListContainer from './components/item_list_container';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Welcome to our store!" />
    </div>
  );
};

export default App;
