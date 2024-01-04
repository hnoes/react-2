// VendingMachine.js
import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li>
          <Link to="/snacks/pretzels">Pretzels</Link>
        </li>
        <li>
          <Link to="/snacks/gummy-worms">Gummy Worms</Link>
        </li>
        <li>
          <Link to="/snacks/water">Water</Link>
        </li>
        <li>
          <Link to="/snacks/kombucha">Kombucha</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
