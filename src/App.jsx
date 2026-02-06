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

  fetch('https://catfact.ninja/fact')
    .then((res) => {
      console.log('response.ok', res.ok);
      console.log('respons status', res.status);
      return res.json();
    })
    .then((data) => {
      console.log('data', data);
    })
    .catch((error) => {
      console.log('error fetching fact in thenable: ', error);
    });

  return (
    <div className='App'>
      <Dropdown
        people={people}
        setPeople={setPeople}
      />
      <List people={people} />
      {/* <button onClick={handleClick}>{clicked.toString()}</button> */}
    </div>
  );
}

export default App;
