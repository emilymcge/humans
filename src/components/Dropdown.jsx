/* eslint-disable no-unused-vars */

import { useState } from 'react';

export default function Dropdown({ people, setPeople }) {
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const handleSelect = (e) => {
    setSelectedAttribute(e.target.value);

    setPeople(alphabetizeList(people, e.target.value));
  };

  return (
    <>
      <label>Sort By</label>
      <select
        name='selectedAttribute'
        value={selectedAttribute}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        <option value='firstName'>First Name</option>
        <option value='lastName'>Last Name</option>
        <option value='jobTitle'>Job</option>
      </select>
    </>
  );
}

//arr is an object array
//returns object array sorted alphabetically by feature property
function alphabetizeList(arr, attribute) {
  if (attribute.length == 0) {
    return arr;
  }
  if (!arr) return [];
  const copy = [...arr];
  let result = [copy.pop()];
  let current = '';

  if (!result[attribute]) return arr;
  while (copy.length != 0) {
    current = copy.pop();
    for (let i = 0; i <= result.length; i++) {
      if (!result[i]) {
        result.push(current);
        break;
      }
      if (alphabetizeTwoWords(current[attribute], result[i][attribute])) {
        result.splice(i, 0, current);
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
