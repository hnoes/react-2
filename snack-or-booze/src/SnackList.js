import React from 'react';
import { Link } from 'react-router-dom';
import './SnackList.css';

const snacks = [
  { id: 'pretzels', name: 'Pretzels' },
  { id: 'gummy-worms', name: 'Gummy Worms' },
  { id: 'water', name: 'Water' },
  { id: 'kombucha', name: 'Kombucha' },
];

function SnackList() {
  return (
    <div>
      <h2>Snack List</h2>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnackList;
