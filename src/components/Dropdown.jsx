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
