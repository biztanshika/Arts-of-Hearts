'use client';

import { useEvent } from '../contexts/EventContext';
import ArtistCard from './ArtistCard';

export default function ArtistGrid() {
  const { data, loading } = useEvent();

  if (loading || !data) {
    return (
      <section className="section">
        <h2 className="text-center">Selected Artists</h2>
        <div className="grid-skeleton">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-skeleton">
              <div className="card-image-skeleton loading-skeleton"></div>
              <div className="card-content-skeleton">
                <div className="card-title-skeleton loading-skeleton"></div>
                <div className="card-location-skeleton loading-skeleton"></div>
                <div className="card-tag-skeleton loading-skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const artists = data.data.selected_artist;

  if (!artists || artists.length === 0) {
    return (
      <section className="section">
        <h2 className="text-center">Selected Artists</h2>
        <div className="no-data">No artists available</div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="text-center">Selected Artists</h2>
      <div className="artist-grid">
        {artists.map((artist) => (
          <ArtistCard key={artist.username} artist={artist} />
        ))}
      </div>
    </section>
  );
}