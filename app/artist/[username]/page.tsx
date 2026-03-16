'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEvent } from '../../../contexts/EventContext';

export default function ArtistDetail() {
  const params = useParams();
  const username = params.username as string;
  const { data, loading } = useEvent();

  if (loading || !data) {
    return (
      <div className="loading">
        <div className="loading-content">
          <div className="loading-skeleton skeleton-title"></div>
          <div className="loading-skeleton skeleton-text"></div>
        </div>
      </div>
    );
  }

  const artist = data.data.selected_artist.find(a => a.username === username);

  if (!artist) {
    return (
      <div className="loading">
        <div className="text-center">
          <h1>Artist Not Found</h1>
          <Link href="/" className="back-link">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="artist-detail">
      <div className="detail-container">
        <Link href="/" className="back-link">
          ← Back to Artists
        </Link>

        <div className="detail-card">
          <div className="detail-header">
            <div>
              {artist.profile_picture ? (
                <Image
                  src={artist.profile_picture}
                  alt={`${artist.first_name || 'No Name'} ${artist.last_name || ''}`}
                  width={100}
                  height={100}
                  className="detail-avatar"
                />
              ) : (
                <div className="detail-avatar no-image-placeholder">
                  No Image
                </div>
              )}
            </div>
            <div className="detail-info">
              <h1>
                {artist.first_name || 'No First Name'} {artist.last_name || 'No Last Name'}
              </h1>
              <p className="artist-location">
                {artist.city || 'No City'}, {artist.country || 'No Country'}
              </p>
              <p className="artist-pronouns">
                {artist.preferred_pronouns || 'No Pronouns'}
              </p>
              <p className="detail-bio">{artist.form_response?.artist_bio || 'No bio available'}</p>

              <div className="detail-grid">
                <div className="detail-section">
                  <h3>Artistic Skills</h3>
                  <div className="detail-skills">
                    {artist.artistic_skills?.length > 0 ? artist.artistic_skills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag-detail"
                      >
                        {skill || 'No Skill'}
                      </span>
                    )) : <span className="no-data">No artistic skills listed</span>}
                  </div>
                </div>
                <div className="detail-section">
                  <h3>Technical Skills</h3>
                  <div className="detail-skills">
                    {artist.technical_skills?.length > 0 ? artist.technical_skills.map((skill, index) => (
                      <span
                        key={index}
                        className="tech-skill-tag skill-tag-detail"
                      >
                        {skill || 'No Skill'}
                      </span>
                    )) : <span className="no-data">No technical skills listed</span>}
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <div className="contact-social-row">
                  <div className="contact-section">
                    <h3>Contact</h3>
                    <div className="detail-contact">
                      <p>Email: {artist.form_response?.email || 'No email provided'}</p>
                      <p>Phone: {artist.form_response?.phone || 'No phone provided'}</p>
                      {artist.website ? (
                        <p>Website: <a href={artist.website} target="_blank" rel="noopener noreferrer">{artist.website}</a></p>
                      ) : (
                        <p className="no-data">No website provided</p>
                      )}
                    </div>
                  </div>

                  <div className="social-section">
                    <h3>Social Media</h3>
                    <div className="detail-social">
                      {artist.social_media_links?.instagram ? (
                        <a href={artist.social_media_links.instagram} target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      ) : null}
                      {artist.social_media_links?.facebook ? (
                        <a href={artist.social_media_links.facebook} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      ) : null}
                      {artist.social_media_links?.twitter ? (
                        <a href={artist.social_media_links.twitter} target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      ) : null}
                      {(!artist.social_media_links?.instagram && !artist.social_media_links?.facebook && !artist.social_media_links?.twitter) && (
                        <span className="no-data">No social media links provided</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-artwork">
            <h2>Selected Artwork</h2>
            <div className="artwork-grid">
              {artist.selected_artwork?.length > 0 ? artist.selected_artwork.map((artwork, index) => (
                <div key={index} className="artwork-card">
                  <div className="artwork-image-container">
                    {artwork.image_url ? (
                      <Image
                        src={artwork.image_url}
                        alt={artwork.image_title || 'Artwork'}
                        width={400}
                        height={300}
                        className="artwork-image"
                      />
                    ) : (
                      <div className="artwork-image no-image-placeholder">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="artwork-content">
                    <h3 className="artwork-title">{artwork.image_title || 'Untitled'}</h3>
                    <p className="artwork-description">{artwork.image_description || 'No description available'}</p>
                    <div className="artwork-details">
                      <p>Year: {artwork.year_created || 'Unknown'}</p>
                      <p>Material: {artwork.material_used || 'Unknown'}</p>
                      <p>Dimensions: {artwork.image_dimensions || 'Unknown'}</p>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="no-data">No artworks available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}