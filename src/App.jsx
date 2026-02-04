//import { useState } from 'react';

import List from './components/List.jsx';
import './App.css';

function App() {
  let people = [
    { firstName: 'Emily', lastName: 'McGettrick', jobTitle: 'Tutor' },
    { firstName: 'Emma', lastName: 'Latimer', jobTitle: 'Project Manager' },
    { firstName: 'Camil', lastName: 'Mikiej', jobTitle: 'Physician Assistant' },
    { firstName: 'Abner', lastName: 'Jacobsen', jobTitle: 'Graphic Designer' },
  ];

  return (
    <div className='App'>
      <List people={people} />
      <button>I'm a button</button>
    </div>
  );
}




export default App;
