import './ToyEdit.css';
import { useState, useEffect } from 'react';
import { toyService } from '../service/toyService.js';
import { useNavigate, useParams } from 'react-router-dom';

export default function ToyEdit() {
  const [toy, setToy] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      const toy = toyService.get(id);
      setToy(toy);
    }
  }, [id]);

  function handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const toyToSave = {
      _id: id || '',
      name: formData.get('name'),
      price: +formData.get('price'),
      inStock: formData.get('inStock'),
      createdAt: toy?.createdAt || '',
    };
    toyService.save(toyToSave);
    navigate('/toys');
  }

  return (
    <section className="toy-edit-container">
      <div className="toy-edit">
        <h2>Add New Toy</h2>
        <form
          onSubmit={handleSubmit}
          className="toy-form"
        >
          <div className="form-group">
            <label htmlFor="name">Toy Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={toy?.name}
              onChange={(ev) => {
                setToy({ ...toy, name: ev.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              min="0"
              value={toy?.price}
              required
              onChange={(ev) => {
                setToy({ ...toy, price: ev.target.value });
              }}
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="inStock">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={toy?.inStock}
                onChange={(ev) => {
                  setToy({ ...toy, inStock: ev.target.checked });
                }}
              />
              In Stock
            </label>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Add Toy
          </button>
        </form>
      </div>
    </section>
  );
}
