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

let people = [
  { firstName: 'Emily', lastName: 'McGettrick', jobTitle: 'Tutor' },
  { firstName: 'Emma', lastName: 'Latimer', jobTitle: 'Project Manager' },
  { firstName: 'Camil', lastName: 'Mikiej', jobTitle: 'Physician Assistant' },
  { firstName: 'Abner', lastName: 'Jacobsen', jobTitle: 'Graphic Designer' },
];

//arr is an object array
//returns object array sorted alphabetically by feature property
function alphabetizeList(arr, feature) {
  console.log('hi');
  if (!arr) return [];
  let result = [arr.pop()];
  let current = '';

  // }
  while (arr.length != 0) {
    console.log('entering while loop');
    console.log('result.length', result.length);
    current = arr.pop();
    for (let i = 0; i <= result.length; i++) {
      console.log('result[i]', result[i]);
      if (!result[i]) {
        result.push(current);
        break;
      }
      if (alphabetizeTwoWords(current[feature], result[i][feature])) {
        result.splice(i, 0, current);
        console.log('result when i = ', i, '--->', result);
        break;
      }
    }
  }
  return result;
}

//Returns true if word1 comes before word2 alphabetically
function alphabetizeTwoWords(word1, word2) {

  if (word2.length == 0) {
    return true;
  }

  let index = 0;
  while (index < word1.length) {
    if (!word2[index]) return false;

    if (word1[index] < word2[index]) {
      return true;
    }
    if (word1[index] > word2[index]) {
      return false;
    }
    index++;
  }
  return true;
}
console.log('below');
console.log('alphabetizelist', alphabetizeList(people, 'lastName'));
console.log(
  alphabetizeList([{ name: 'Zoe' }, { name: 'Mia' }, { name: 'Anna' }], 'name'),
);
export default App;
