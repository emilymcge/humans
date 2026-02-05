/* eslint-disable no-unused-vars */

import { useState } from 'react';

export default function Dropdown({ people, setPeople }) {
  const [selectedAttribute, setSelectedAttribute] = useState('');
  return (
    <>
      <label>Sort By</label>
      <select name='selectedAttribute'>
        <option>First Name</option>
        <option>Last Name</option>
        <option>Job</option>
      </select>
    </>
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
function alphabetizeList(arr, attribute) {
  if (attribute.length == 0) return arr;
  console.log('hi');
  if (!arr) return [];
  const copy = [...arr];
  let result = [copy.pop()];
  let current = '';

  // }
  while (copy.length != 0) {
    console.log('entering while loop');
    console.log('result.length', result.length);
    current = copy.pop();
    for (let i = 0; i <= result.length; i++) {
      console.log('result[i]', result[i]);
      if (!result[i]) {
        result.push(current);
        break;
      }
      if (alphabetizeTwoWords(current[attribute], result[i][attribute])) {
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