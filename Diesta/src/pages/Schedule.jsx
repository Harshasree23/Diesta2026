import { useState, useRef, useEffect } from 'react';
import '../styles/Schedule.css';

const API_URL = "https://script.google.com/macros/s/AKfycbxHGE7PDuL0JCS2Ki0_-A_6h8RK9H6OTTbnDSh9Q6vs1xq-4Dwhz6QnCoGP1CbmFfg1/exec";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('Feb 6');
  const [searchQuery, setSearchQuery] = useState('');
  const [scheduleData, setScheduleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dateNavRef = useRef(null);
  const activeButtonRef = useRef(null);

  const dates = ['Feb 6', 'Feb 7', 'Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15'];

  // Get current IST date
  const getCurrentISTDate = () => {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset + now.getTimezoneOffset() * 60 * 1000);
    const day = istTime.getDate();
    const month = istTime.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' });
    return `${month} ${day}`;
  };

  // Parse time to minutes for sorting
  const parseTimeToMinutes = (timeStr) => {
    if (!timeStr) return 1440; // End of day
    const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!match) return 1440;
    let [, hours, minutes, period] = match;
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
    if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  // Fetch and merge schedule data
  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setLoading(true);
        const [sportsResponse, culturalsResponse] = await Promise.all([
          fetch(API_URL)
        ]);

        if (!sportsResponse.ok || !culturalsResponse.ok) {
          throw new Error('Failed to fetch schedule data');
        }

        const [sportsResult, culturalsResult] = await Promise.all([
          sportsResponse.json(),
          culturalsResponse.json()
        ]);

        // Merge and deduplicate events
        const mergedData = {};
        const addEvents = (data, type) => {
          Object.entries(data).forEach(([date, events]) => {
            if (!mergedData[date]) mergedData[date] = [];
            mergedData[date].push(...events.map(event => ({ ...event, type })));
          });
        };

        addEvents(sportsResult, 'sports');
        addEvents(culturalsResult, 'culturals');

        // Remove duplicates and sort by time
        Object.keys(mergedData).forEach(date => {
          const seen = new Set();
          mergedData[date] = mergedData[date]
            .filter(event => {
              const key = `${event.s_id || event.c_id}-${event.title}-${event.start_time || event.time}-${event.location}`;
              if (seen.has(key)) return false;
              seen.add(key);
              return true;
            })
            .sort((a, b) => parseTimeToMinutes(a.start_time || a.time) - parseTimeToMinutes(b.start_time || b.time));
        });

        setScheduleData(mergedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching schedule:', err);
        setError('Failed to load schedule data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, []);

  // Set current date after data loads
  useEffect(() => {
    if (Object.keys(scheduleData).length > 0) {
      const currentDate = getCurrentISTDate();
      if (scheduleData[currentDate]) setSelectedDate(currentDate);
    }
  }, [scheduleData]);

  // Scroll active date into view (desktop only)
  useEffect(() => {
    if (activeButtonRef.current && dateNavRef.current) {
      const button = activeButtonRef.current;
      const container = dateNavRef.current;
      const isMobile = window.innerWidth <= 768;
      
      // Only scroll on desktop where dates are in a horizontal line
      if (!isMobile) {
        const targetScroll = button.offsetLeft + button.offsetWidth / 2 - container.clientWidth / 2;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [selectedDate]);

  // Format time display - clean all extra spaces
  const formatTime = (event) => {
    const cleanTime = (timeStr) => {
      if (!timeStr) return '';
      // Remove all extra spaces and normalize
      return timeStr.replace(/\s+/g, ' ').trim();
    };
    
    const startTime = cleanTime(event.start_time || event.startTime || event.time || '');
    const endTime = cleanTime(event.end_time || event.endTime || '');
    
    if (startTime && endTime) {
      return `${startTime} - ${endTime}`;
    }
    return startTime;
  };

  // Get filtered events
  const getFilteredEvents = () => {
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) {
      return scheduleData[selectedDate] || [];
    }

    const tokens = query.split(/\s+/).filter(Boolean);
    const allEvents = Object.entries(scheduleData).flatMap(([date, events]) =>
      events.map(event => ({ ...event, date }))
    );

    return allEvents
      .filter(event => {
        const searchable = `${event.title} ${event.location} ${event.team1} ${event.team2} ${event.date}`.toLowerCase();
        return tokens.every(token => searchable.includes(token));
      })
      .sort((a, b) => {
        const dateA = dates.indexOf(a.date);
        const dateB = dates.indexOf(b.date);
        if (dateA !== dateB) return dateA - dateB;
        return parseTimeToMinutes(a.start_time || a.time) - parseTimeToMinutes(b.start_time || b.time);
      });
  };

  if (loading) {
    return (
      <div className="schedule-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading schedule data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="schedule-container">
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-container">
      {/* Search Box */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Events, Teams, Location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Date Navigation */}
      <div className="date-navigation" ref={dateNavRef}>
        {dates.map((date) => (
          <button
            key={date}
            ref={selectedDate === date ? activeButtonRef : null}
            className={`date-btn ${selectedDate === date ? 'active' : ''}`}
            onClick={() => setSelectedDate(date)}
            aria-pressed={selectedDate === date}
            aria-label={`Select ${date}`}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="events-container">
        {getFilteredEvents().length > 0 ? (
          getFilteredEvents().map((event, index) => (
            <div key={event.s_id || event.c_id || `event-${index}`} className="event-card">
              {/* Time Badge */}
              <div className="event-time">
                <span className="time-badge">{formatTime(event)}</span>
              </div>

              {/* Event Details */}
              <div className="event-main-info">
                <h3 className="event-title">
                  {event.title}
                </h3>
                <p className="event-location">{event.location || event.venue}</p>
              </div>

              {/* Teams */}
              <div className="event-teams">
                {event.team1 && event.team2 ? (
                  <>
                    <div className="team">
                      <span className="team-name">{event.team1}</span>
                    </div>
                    <div className="vs-divider">VS</div>
                    <div className="team">
                      <span className="team-name">{event.team2}</span>
                    </div>
                  </>
                ) : event.team1 ? (
                  <div className="team single-team">
                    <span className="team-name">{event.team1}</span>
                  </div>
                ) : null}
              </div>

              {/* Status Badge */}
              <div className={`event-status-badge status-${event.status}`}>
                {event.status || 'Upcoming'}
              </div>
            </div>
          ))
        ) : (
          <div className="no-events-message">
            <p>No events found{searchQuery ? ` for "${searchQuery}"` : ' for this date'}.</p>
          </div>
        )}
      </div>

      <div className="schedule-footer">
        <p>Event timings and venues subject to change as per official announcements</p>
      </div>
    </div>
  );
};

export default Schedule;

