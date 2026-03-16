'use client';

import { useEvent } from '../contexts/EventContext';

export default function EventDetails() {
  const { data, loading } = useEvent();

  if (loading || !data) {
    return (
      <section className="section">
        <div className="loading">
          <div className="loading-skeleton skeleton-title"></div>
          <div className="loading-skeleton skeleton-text"></div>
          <div className="loading-skeleton skeleton-text"></div>
        </div>
      </section>
    );
  }

  const event = data.data.event_detail;

  return (
    <section className="section">
      <div className="event-details">
        <div className="event-card event-card-main">
          <h2>About the Event</h2>
          {event.banner_content ? (
            <div dangerouslySetInnerHTML={{ __html: event.banner_content }} />
          ) : (
            <p className="no-data">No event description available</p>
          )}
        </div>
        <div className="event-info">
          <div className="event-row">
            <div className="event-card">
              <h3>Eligibility</h3>
              <p>{event.eligibility || 'No eligibility information available'}</p>
            </div>
            <div className="event-card">
              <h3>Categories</h3>
              <div className="categories">
                {event.categories?.length > 0 ? event.categories.map((category, index) => (
                  <span
                    key={index}
                    className="category-tag"
                  >
                    {category || 'No Category'}
                  </span>
                )) : <span className="no-data">No categories available</span>}
              </div>
            </div>
          </div>
          <div className="event-row">
            <div className="event-card">
              <h3>Awards & Prizes</h3>
              <p>{event.awards || 'No awards information available'}</p>
            </div>
            <div className="event-card">
              <h3>Location</h3>
              <p>
                {event.location?.city || 'No City'}, {event.location?.country || 'No Country'} - {event.location?.venue || 'No Venue'}
              </p>
            </div>
          </div>
          <div className="event-card event-card-full">
            <h3>Important Dates</h3>
            <div>
              <p>Event Date: {event.event_date ? new Date(event.event_date).toLocaleDateString() : 'No date available'}</p>
              <p>Submission Deadline: {event.submission_deadline ? new Date(event.submission_deadline).toLocaleDateString() : 'No deadline available'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}