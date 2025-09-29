import { useEffect, useState } from 'react';
import { toyService } from '../service/toyService';
import ToyPreview from '../cmps/ToyPreview';
import { useNavigate } from 'react-router-dom';
import './ToyIndex.css';

export default function ToyIndex() {
  const [toys, setToys] = useState(toyService.query());
  const navigate = useNavigate();
  useEffect(() => {
    setToys(toyService.query());
  }, []);

  function onAddToy() {
    navigate('/toy/edit');
  }

  return (
    <section className="toyIndex-container">
      <h1> All The Toys</h1>
      <button onClick={onAddToy}>Add Toy</button>
      <div className="toys-grid">
        {toys.length === 0 ? (
          <div className="no-toys-message">No toys available</div>
        ) : (
          toys.map((toy) => {
            return (
              <ToyPreview
                key={toy._id}
                toy={toy}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
