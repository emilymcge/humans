/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Dropdown from './components/Dropdown.jsx';
import List from './components/List.jsx';
import Form from './components/Form.jsx';
import './App.css';

function App() {
  let peopleData = [
    { firstName: 'Emily', lastName: 'McGettrick', jobTitle: 'Tutor' },
    { firstName: 'Emma', lastName: 'Latimer', jobTitle: 'Project Manager' },
    { firstName: 'Camil', lastName: 'Mikiej', jobTitle: 'Physician Assistant' },
    { firstName: 'Abner', lastName: 'Jacobsen', jobTitle: 'Graphic Designer' },
  ];

  const [people, setPeople] = useState(peopleData);
  const [catFact, setCatFact] = useState(false);

  const handleClick = (e) => {
    fetch('https://catfact.ninja/fact')
      .then((res) => {
        console.log('response.ok', res.ok);
        console.log('respons status', res.status);
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.log('error fetching fact in thenable: ', error);
      });
  };

  const handleClick2 = async (e) => {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json;
  };

  return (
    <div className='App'>
      <Dropdown
        people={people}
        setPeople={setPeople}
      />
      <List
        people={people}
        className='list'
      />
      <div className='cat-fact-box'>
        <button onClick={handleClick}>Click for a cat fact</button>
        <span className='cat-fact'>{catFact && <>{catFact}</>}</span>
      </div>
      <Form />
    </div>
  );
}

export default App;
