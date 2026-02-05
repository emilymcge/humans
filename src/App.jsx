/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Dropdown from './components/Dropdown.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  let peopleData = [
    { firstName: 'Emily', lastName: 'McGettrick', jobTitle: 'Tutor' },
    { firstName: 'Emma', lastName: 'Latimer', jobTitle: 'Project Manager' },
    { firstName: 'Camil', lastName: 'Mikiej', jobTitle: 'Physician Assistant' },
    { firstName: 'Abner', lastName: 'Jacobsen', jobTitle: 'Graphic Designer' },
  ];

  const [people, setPeople] = useState(peopleData);

  return (
    <div className='App'>
      <Dropdown people={peopleData} setPeople={setPeople} />
      <List people={peopleData} />
      {/* <button onClick={handleClick}>{clicked.toString()}</button> */}
    </div>
  );
}

export default App;
