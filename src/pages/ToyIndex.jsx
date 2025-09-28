import { useEffect, useState } from 'react';
import { toyService } from '../service/toyService';

export default function ToyIndex() {
  const [toys, setToys] = useState(toyService.query());

  useEffect(() => {
    console.log('hello');
    setToys(toyService.query());
    console.log(toys.length);
  }, []);

  return (
    <section className="toyIndex-container">
      <h1> All The Toys</h1>
      <div>
        {toys.length === 0 ? (
          <div>no toys</div>
        ) : (
          toys.map((toy) => {
            return (
              <div key={toy._id}>
                <span>{toy.name}</span>
                <pspan>{toy.price}</pspan>
                <span>{toy.labels}</span>
                <span>{toy.createdAt}</span>
                <span>{toy.inStock}</span>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
