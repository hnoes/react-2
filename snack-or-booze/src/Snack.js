import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Snack.css';

const snacks = [
  { id: 'pretzels', name: 'Pretzels', image: 'https://www.instacart.com/assets/domains/product-image/file/large_f2166d62-2de6-4924-ab6e-acb11595b32a.png' },
  { id: 'gummy-worms', name: 'Gummy Worms', image: 'https://www.instacart.com/assets/domains/product-image/file/large_a68e05d0-6274-4968-b8ec-7cf75735ff95.jpg' },
  { id: 'water', name: 'Water', image: 'https://www.instacart.com/image-server/514x514/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98e28ddc-220f-4e08-a414-96f07a0dd1e6.png' },
  { id: 'kombucha', name: 'Kombucha', image: 'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_6339bbcb-178e-443a-b1c8-e3f971641044.JPG' },
];

function Snack() {
  const { id } = useParams();
  const selectedSnack = snacks.find((snack) => snack.id === id);

  return (
    <div>
      <h2 className="capitalized">{selectedSnack ? selectedSnack.name : ''}</h2>
      {selectedSnack && (
        <div>
        <img src={selectedSnack.image} alt={selectedSnack.name} width="200" height="200" />
        <p>Details of {selectedSnack.name} snack</p>
        </div>
      )}
      <Link to="/snacks">Back to Snack List</Link>
    </div>
  );
}

export default Snack;
