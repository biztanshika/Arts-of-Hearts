'use client';


import Image from 'next/image';
import Link from 'next/link';
import { SelectedArtist } from '../types/api';
import { useState } from 'react';

interface ArtistCardProps {
  artist: SelectedArtist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = artist.profile_picture && !imgError;

  return (
    <Link href={`/artist/${artist.username}`}>
      <div className="artist-card">
        <div className="artist-header">
          <div className="artist-avatar">
            {hasImage ? (
              <Image
                src={artist.profile_picture}
                alt={artist.first_name ? `${artist.first_name} ${artist.last_name || ''}` : 'Artist Avatar'}
                width={80}
                height={80}
                className="avatar-image"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <div className="avatar-placeholder">
                <span>NI</span>
              </div>
            )}
          </div>
          <div className="artist-basic-info">
            <h3 className="artist-name">
              {artist.first_name || 'No First Name'} {artist.last_name || 'No Last Name'}
            </h3>
            <p className="artist-location">
              {artist.city || 'No City'}, {artist.country || 'No Country'}
            </p>
            <p className="artist-pronouns">
              {artist.preferred_pronouns || 'No Pronouns'}
            </p>
          </div>
        </div>

        <div className="artist-content">
          <div className="artist-stats">
            <div className="stat-item">
              <span className="stat-number">{artist.artistic_skills?.length || 0}</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{artist.selected_artwork?.length || 0}</span>
              <span className="stat-label">Artworks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {artist.social_media_links &&
                 Object.values(artist.social_media_links).filter(link => link).length}
              </span>
              <span className="stat-label">Social</span>
            </div>
          </div>

          <div className="skill-tags">
            {artist.artistic_skills?.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="skill-tag"
              >
                {skill || 'No Skill'}
              </span>
            )) || <span className="no-data">No Skills</span>}
          </div>

          <div className="artist-actions">
            <span className="view-profile">View Profile →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}