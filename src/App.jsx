/* eslint-disable no-unused-vars */
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



function alphabetizeTwoWords(word1, word2) {
  let first = '';
  let second = '';

  let index = 0;
  while (index < word1.length) {
    if (!word2[index]) return [word2, word1];

    if (word1[index] < word2[index]) {
      return [word1, word2];
    }
    if (word1[index] > word2[index]) {
      return [word2, word1];
    }
    index++;
  }
  return [word1, word2];
}

console.log(
  "alphabetizeTwoWords('emily', 'emili')",
  alphabetizeTwoWords('emily', 'emili'),
);
export default App;
