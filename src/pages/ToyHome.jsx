import React from 'react';
import './ToyHome.css';

export default function ToyHome() {
  return (
    <div className="toy-home">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ToyStore</h1>
        <a
          href="/toys"
          className="cta-button"
        >
          Browse Our Collection
        </a>
      </section>
    </div>
  );
}
