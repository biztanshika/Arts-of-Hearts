'use client';

import Image from 'next/image';
import { useEvent } from '../contexts/EventContext';

export default function HeroSection() {
  const { data, loading } = useEvent();

  if (loading || !data) {
    return (
      <section className="hero-section">
        <div className="loading">
          <div className="loading-content">
            <div className="loading-skeleton skeleton-title"></div>
            <div className="loading-skeleton skeleton-text"></div>
          </div>
        </div>
      </section>
    );
  }

  const event = data.data.event_detail;

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          {event.call_title || 'No Title'}
        </h1>
        <p className="hero-subtitle">
          {event.call_tagline || 'No Tagline'}
        </p>
        <div className="hero-description">
          <p>
            {event.announcer ? event.announcer.replace(/<[^>]*>/g, '') : 'No announcement available'}
          </p>
        </div>
        <div className="hero-buttons">
          <button className="hero-button-primary">
            Submit Your Work
          </button>
          <button className="hero-button-secondary">
            Learn More
          </button>
        </div>
      </div>
      {event.thumbnail_url ? (
        <Image
          src={event.thumbnail_url}
          alt={event.call_title || 'Event Image'}
          fill
          className="hero-image"
          priority
        />
      ) : (
        <div className="hero-image no-image-placeholder" style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e7eb'}}>
          No Image
        </div>
      )}
    </section>
  );
}