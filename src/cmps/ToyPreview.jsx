import React from 'react';
import './ToyPreview.css';
import { useNavigate } from 'react-router-dom';

export default function ToyPreview({ toy }) {
  const navigate = useNavigate();
  function onEditToy() {
    navigate(`/toy/edit/${toy._id}`);
  }

  return (
    <div className="toy-preview">
      <div className="toy-header">
        <h3 className="toy-name">{toy.name}</h3>
        <button
          className="edit-btn"
          onClick={onEditToy}
        >
          Edit
        </button>
      </div>
      <div className="toy-price">${toy.price}</div>
      <div className="toy-labels">
        {toy.labels &&
          toy.labels.map((label, index) => (
            <span
              key={index}
              className="toy-label"
            >
              {label}
            </span>
          ))}
      </div>

      <div className="toy-info">
        <span className="toy-date">
          Created: {new Date(toy.createdAt).toLocaleDateString()}
        </span>
        <span
          className={`toy-stock ${toy.inStock ? 'in-stock' : 'out-of-stock'}`}
        >
          {toy.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
}
