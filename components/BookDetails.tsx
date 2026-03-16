'use client';

import Image from 'next/image';
import { useEvent } from '../contexts/EventContext';

export default function BookDetails() {
  const { data, loading } = useEvent();

  if (loading || !data || !data.data.book_detail.length) {
    return null;
  }

  const book = data.data.book_detail[0];

  return (
    <section className="section book-section">
      <div className="text-center">
        <h2 className="book-title">{book.title || 'No Title'}</h2>
        <p className="book-description">{book.description || 'No description available'}</p>
      </div>

      <div className="book-content">
        <div>
          <h3 className="section-header">Cover Artist</h3>
          <div className="book-card">
            <div className="book-artist">
              {book.cover_artist.profile_photo ? (
                <Image
                  src={book.cover_artist.profile_photo}
                  alt={book.cover_artist.name || 'Cover Artist'}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="no-image-placeholder" style={{width: '80px', height: '80px', borderRadius: '50%'}}>
                  No Image
                </div>
              )}
              <div>
                <h4>{book.cover_artist.name || 'No Name'}</h4>
                <p>{book.cover_artist.title || 'No Title'}</p>
                <p>{book.cover_artist.location || 'No Location'}</p>
              </div>
            </div>
            <p>{book.cover_artist.description || 'No description available'}</p>
          </div>
        </div>

        <div>
          <h3 className="section-header">Winner</h3>
          <div className="book-card">
            <div className="book-artist">
              {book.winner.profile_photo ? (
                <Image
                  src={book.winner.profile_photo}
                  alt={book.winner.name || 'Winner'}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="no-image-placeholder" style={{width: '80px', height: '80px', borderRadius: '50%'}}>
                  No Image
                </div>
              )}
              <div>
                <h4>{book.winner.name || 'No Name'}</h4>
                <p>{book.winner.title || 'No Title'}</p>
                <p>{book.winner.location || 'No Location'}</p>
              </div>
            </div>
            <p>{book.winner.description || 'No description available'}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="book-tags">
          {book.tags?.length > 0 ? book.tags.map((tag, index) => (
            <span
              key={index}
              className="book-tag"
            >
              {tag || 'No Tag'}
            </span>
          )) : <span className="no-data">No tags available</span>}
        </div>
        {book.link?.[0] ? (
          <a
            href={book.link[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="purchase-button"
          >
            Purchase Book
          </a>
        ) : (
          <span className="no-data">No purchase link available</span>
        )}
      </div>
    </section>
  );
}