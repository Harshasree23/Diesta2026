import { useState, useRef, useEffect } from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('Feb 6');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDates, setShowDates] = useState(false);
  const dateNavRef = useRef(null);
  const activeButtonRef = useRef(null);

  // Scroll active date button into view when selected
  useEffect(() => {
    if (activeButtonRef.current && dateNavRef.current) {
      const button = activeButtonRef.current;
      const container = dateNavRef.current;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.clientWidth;

      // On mobile, keep earlier dates visible; on desktop, center the button
      const isMobile = window.innerWidth <= 600;
      const targetScroll = isMobile
        ? Math.max(0, buttonLeft - Math.max(80, containerWidth - buttonWidth - 40)) // Keep earlier dates visible
        : buttonLeft + buttonWidth / 2 - containerWidth / 2; // Desktop: center

      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }, [selectedDate]);

  // On initial load, scroll to start on mobile
  useEffect(() => {
    if (dateNavRef.current && window.innerWidth <= 600) {
      dateNavRef.current.scrollLeft = 0;
    }
  }, []);
  const dates = [
    { date: 'Feb 6', day: 'Day 1' },
    { date: 'Feb 7', day: 'Day 2' },
    { date: 'Feb 8', day: 'Day 3' },
    { date: 'Feb 9', day: 'Day 4' },
    { date: 'Feb 10', day: 'Day 5' },
    { date: 'Feb 11', day: 'Day 6' },
    { date: 'Feb 12', day: 'Day 7' },
    { date: 'Feb 13', day: 'Day 8' },
    { date: 'Feb 14', day: 'Day 9' },
    { date: 'Feb 15', day: 'Day 10' }
  ];

  const scheduleData = {
    'Feb 6': [
      {
        id: 1,
        time: '10:00 AM',
        title: 'Opening Ceremony',
        location: 'Main Lawn',
        status: 'done',
        isCeremony: true
      },
      {
        id: 2,
        time: '01:00 PM',
        title: 'Cricket 🏏',
        team1: { name: 'Chemistry' },
        team2: { name: 'Civil' },
        location: 'Field A',
        status: 'done'
      },
      {
        id: 3,
        time: '03:00 PM',
        title: 'Cricket 🏏',
        team1: { name: 'CSE' },
        team2: { name: 'EE' },
        location: 'Field B',
        status: 'ongoing'
      },
      {
        id: 4,
        time: '06:00 PM',
        title: 'Football ⚽',
        team1: { name: 'BME' },
        team2: { name: 'MAE' },
        location: 'Field C',
        status: 'upcoming'
      }
      ,
      {
        id: 24,
        time: '11:00 AM',
        title: 'Poetry Competition',
        team1: { name: 'Rang De Manch' },
        location: 'Auditorium',
        status: 'upcoming'
      },
      {
        id: 25,
        time: '01:00 PM',
        title: 'Stage Play',
        team1: { name: 'Rang De Manch' },
        location: 'Main Stage',
        status: 'upcoming'
      },
      {
        id: 26,
        time: '02:30 PM',
        title: 'Poetry Writing',
        team1: { name: 'Writing Club' },
        location: 'Hall A',
        status: 'upcoming'
      },
      {
        id: 27,
        time: '04:00 PM',
        title: 'Creative Writing',
        team1: { name: 'Writing Club' },
        location: 'Hall B',
        status: 'upcoming'
      }
    ],
    'Feb 7': [
      {
        id: 5,
        time: '09:00 AM',
        title: 'Basketball 🏀',
        team1: { name: 'IC Design' },
        team2: { name: 'EM' },
        location: 'Court A',
        status: 'upcoming'
      },
      {
        id: 6,
        time: '11:00 AM',
        title: 'Badminton 🏸',
        team1: { name: 'Chemistry' },
        team2: { name: 'CSE' },
        location: 'Hall A',
        status: 'upcoming'
      },
      {
        id: 7,
        time: '02:00 PM',
        title: 'Debate 🎤',
        team1: { name: 'Civil' },
        team2: { name: 'EE' },
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 28,
        time: '09:30 AM',
        title: 'General Quiz',
        team1: { name: 'Quiz Club' },
        location: 'Quiz Hall',
        status: 'upcoming'
      },
      {
        id: 29,
        time: '11:30 AM',
        title: 'Cosplay',
        team1: { name: 'Otaku' },
        location: 'Exhibit Hall',
        status: 'upcoming'
      },
      {
        id: 30,
        time: '03:00 PM',
        title: 'Shuffle - Group',
        team1: { name: 'Shuffle' },
        location: 'Dance Arena',
        status: 'upcoming'
      }
    ],
    'Feb 8': [
      {
        id: 8,
        time: '10:00 AM',
        title: 'Chess Championship ♟️',
        team1: { name: 'Physics' },
        team2: { name: 'IC Design' },
        location: 'Building B',
        status: 'upcoming'
      },
      {
        id: 9,
        time: '03:00 PM',
        title: 'Hackathon 💻',
        team1: { name: 'BME' },
        team2: { name: 'ES' },
        location: 'Tech Lab',
        status: 'upcoming'
      }
      ,
      {
        id: 31,
        time: '10:00 AM',
        title: 'Shuffle - Duo/Trio',
        team1: { name: 'Shuffle' },
        location: 'Dance Arena',
        status: 'upcoming'
      },
      {
        id: 32,
        time: '01:00 PM',
        title: 'Shuffle - Solo',
        team1: { name: 'Shuffle' },
        location: 'Dance Arena',
        status: 'upcoming'
      }
    ],
    'Feb 9': [
      {
        id: 10,
        time: '09:00 AM',
        title: 'Volleyball 🏐',
        team1: { name: 'MAE' },
        team2: { name: 'Climate Change' },
        location: 'Court B',
        status: 'upcoming'
      },
      {
        id: 11,
        time: '04:00 PM',
        title: 'Table Tennis 🏓',
        team1: { name: 'Heritage Science' },
        team2: { name: 'Chemistry' },
        location: 'Hall B',
        status: 'upcoming'
      }
    ],
    'Feb 10': [
      {
        id: 12,
        time: '10:00 AM',
        title: 'Science Quiz 📚',
        team1: { name: 'Civil' },
        team2: { name: 'CSE' },
        location: 'Hall C',
        status: 'upcoming'
      },
      {
        id: 13,
        time: '02:00 PM',
        title: 'Coding Challenge 💻',
        team1: { name: 'EE' },
        team2: { name: 'IC Design' },
        location: 'Lab A',
        status: 'upcoming'
      }
    ],
    'Feb 11': [
      {
        id: 14,
        time: '10:00 AM',
        title: 'Cricket Semi Finals 🏏',
        team1: { name: 'BME' },
        team2: { name: 'MAE' },
        location: 'Field A',
        status: 'upcoming'
      },
      {
        id: 15,
        time: '03:00 PM',
        title: 'Dance Performance 💃',
        team1: { name: 'Chemistry' },
        team2: { name: 'Civil' },
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 33,
        time: '05:00 PM',
        title: 'Theme Based Portrait',
        team1: { name: 'Infocus' },
        location: 'Gallery',
        status: 'upcoming'
      },
      {
        id: 34,
        time: '06:30 PM',
        title: 'Photostory',
        team1: { name: 'Infocus' },
        location: 'Gallery',
        status: 'upcoming'
      }
    ],
    'Feb 12': [
      {
        id: 16,
        time: '09:00 AM',
        title: 'Business Case Study 📊',
        team1: { name: 'CSE' },
        team2: { name: 'Physics' },
        location: 'Hall D',
        status: 'upcoming'
      },
      {
        id: 17,
        time: '05:00 PM',
        title: 'Tech Talk Battle 🎯',
        team1: { name: 'EE' },
        team2: { name: 'IC Design' },
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 35,
        time: '02:00 PM',
        title: 'Board Games Event',
        team1: { name: 'WBC' },
        location: 'Common Room',
        status: 'upcoming'
      }
    ],
    'Feb 13': [
      {
        id: 18,
        time: '10:00 AM',
        title: 'Fashion Show Finale 👔',
        team1: { name: 'BME' },
        team2: { name: 'ES' },
        location: 'Main Lawn',
        status: 'upcoming'
      },
      {
        id: 19,
        time: '04:00 PM',
        title: 'Workshop Finals 🔧',
        team1: { name: 'MAE' },
        team2: { name: 'Climate Change' },
        location: 'Building C',
        status: 'upcoming'
      }
      ,
      {
        id: 36,
        time: '11:00 AM',
        title: 'Solo Singing',
        team1: { name: 'Vibes' },
        location: 'Auditorium',
        status: 'upcoming'
      },
      {
        id: 37,
        time: '02:00 PM',
        title: 'Battle of Bands',
        team1: { name: 'Vibes' },
        location: 'Main Stage',
        status: 'upcoming'
      },
      {
        id: 38,
        time: '05:00 PM',
        title: 'Freestyle',
        team1: { name: 'Vibes' },
        location: 'Open Area',
        status: 'upcoming'
      }
    ],
    'Feb 14': [
      {
        id: 20,
        time: '09:00 AM',
        title: 'Robotics Finals 🤖',
        team1: { name: 'Heritage Science' },
        team2: { name: 'Chemistry' },
        location: 'Arena',
        status: 'upcoming'
      },
      {
        id: 21,
        time: '02:00 PM',
        title: 'Cricket Finals 🏏',
        team1: { name: 'Civil' },
        team2: { name: 'CSE' },
        location: 'Main Field',
        status: 'upcoming'
      }
      ,
      {
        id: 39,
        time: '10:00 AM',
        title: 'Film Making Competition',
        team1: { name: 'BTL' },
        location: 'Hall C',
        status: 'upcoming'
      },
      {
        id: 40,
        time: '01:30 PM',
        title: 'Reel Making Competition',
        team1: { name: 'BTL' },
        location: 'Hall C',
        status: 'upcoming'
      }
    ],
    'Feb 15': [
      {
        id: 22,
        time: '10:00 AM',
        title: 'Prize Distribution',
        location: 'Main Lawn',
        status: 'upcoming',
        isCeremony: true
      },
      {
        id: 23,
        time: '02:00 PM',
        title: 'Closing Ceremony',
        location: 'Auditorium',
        status: 'upcoming',
        isCeremony: true
      }
      ,
      {
        id: 41,
        time: '10:00 AM',
        title: '24 hrs Animation Jam',
        team1: { name: 'Gesture' },
        location: 'Studio',
        status: 'upcoming'
      },
      {
        id: 42,
        time: '12:30 PM',
        title: 'Expressive Letter Battle',
        team1: { name: 'Gesture' },
        location: 'Hall D',
        status: 'upcoming'
      },
      {
        id: 43,
        time: '03:00 PM',
        title: 'Nologo Uprising',
        team1: { name: 'Gesture' },
        location: 'Exhibit Hall',
        status: 'upcoming'
      }
    ]
  };

  // Get all events across all dates and attach their date for searching
  const getAllEvents = () => {
    return Object.entries(scheduleData).flatMap(([date, events]) =>
      events.map((event) => ({ ...event, date }))
    );
  };

  // Map date to index for ordering (uses the `dates` array order)
  const dateOrder = Object.fromEntries(dates.map((d, i) => [d.date, i]));

  // Helper: parse times like '10:00 AM' into minutes since midnight for sorting
  const parseTimeToMinutes = (timeStr) => {
    if (!timeStr) return 24 * 60;
    const m = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!m) return 24 * 60;
    let h = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const ampm = m[3].toUpperCase();
    if (ampm === 'PM' && h !== 12) h += 12;
    if (ampm === 'AM' && h === 12) h = 0;
    return h * 60 + mm;
  };

  // Tokenized search: all tokens must match somewhere in the event text
  // Also returns results sorted chronologically (by date order then time)
  const getFilteredEvents = () => {
    const query = searchQuery.trim().toLowerCase();

    // No query: return events for the selected date in chronological order
    if (!query) {
      const events = (scheduleData[selectedDate] || []).slice();
      return events.sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
    }

    const tokens = query.split(/\s+/).filter(Boolean);
    const allEvents = getAllEvents();

    const filtered = allEvents.filter((event) => {
      const searchable = (
        `${event.title} ${event.location || ''} ${event.team1?.name || ''} ${event.team2?.name || ''} ${event.date || ''} ${event.time || ''}`
      ).toLowerCase();

      return tokens.every((t) => searchable.includes(t));
    });

    // Sort search results by date order (as in `dates` array) then by time
    return filtered.sort((a, b) => {
      const da = (dateOrder[a.date] ?? 0);
      const db = (dateOrder[b.date] ?? 0);
      if (da !== db) return da - db;
      return parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time);
    });
  };
  const downloadSchedule = () => {
    const scheduleText = Object.entries(scheduleData)
      .map(([date, events]) => {
        return `\n${date}\n${'-'.repeat(50)}\n${events
          .map(
            (event) =>
              `${event.time} - ${event.title}${
                event.team1 && event.team2 ? ` (${event.team1.name} VS ${event.team2.name})` : ''
              }\nLocation: ${event.location}\nStatus: ${event.status.toUpperCase()}\n`
          )
          .join('\n')}`;
      })
      .join('\n');

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(scheduleText));
    element.setAttribute('download', 'Diesta-Schedule.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'ongoing': return 'Ongoing';
      case 'done': return 'Done';
      case 'upcoming': return 'Upcoming';
      default: return 'Upcoming';
    }
  };

  // Pool mapping: Maps team/department names to their pools
  const pools = {
    'Civil': 'Civil Pool',
    'MSME': 'Civil Pool',
    'EM': 'Civil Pool',
    'Interdisciplinary': 'Civil Pool',
    
    'Chemical': 'Chemical Pool',
    'Chemistry': 'Chemical Pool',
    'IC': 'Chemical Pool',
    'Design': 'Chemical Pool',
    
    'CSE': 'CSE Pool',
    'MnC': 'CSE Pool',
    'Mathematics': 'CSE Pool',
    'Physics': 'CSE Pool',
    
    'BME': 'BME Pool',
    'BTE': 'BME Pool',
    'ES': 'BME Pool',
    'EP': 'BME Pool',
    
    'EE': 'EE Pool',
    'AI': 'EE Pool',
    'IC Design': 'EE Pool',
    'CoE': 'EE Pool',
    
    'MAE': 'MAE Pool',
    'LA': 'MAE Pool',
    'Climate Change': 'MAE Pool',
    'Heritage Science': 'MAE Pool',
    
    'Faculty': 'Faculty/Staff',
    'Staff': 'Faculty/Staff'
  };

  // Get pool name from team/department name
  const getPoolName = (teamName) => {
    if (!teamName) return 'TBD';
    return pools[teamName] || teamName;
  };

  // Color mapping for events based on their title for visual differentiation
  const getEventColor = (eventTitle, eventId) => {
    const colors = [
      'rgba(212, 175, 55, 0.08)', // gold
      'rgba(100, 200, 255, 0.08)', // blue
      'rgba(150, 100, 255, 0.08)', // purple
      'rgba(100, 255, 150, 0.08)', // green
      'rgba(255, 150, 100, 0.08)', // orange
      'rgba(255, 100, 200, 0.08)', // pink
      'rgba(100, 255, 255, 0.08)', // cyan
    ];
    // Use event ID to cycle through colors for consistency
    return colors[eventId % colors.length];
  };

  // Render title with emoji
  const renderTitle = (title) => {
    if (!title) return title;
    try {
      const emojis = title.match(/\p{Extended_Pictographic}/gu) || [];
      const text = title.replace(/\p{Extended_Pictographic}/gu, '').trim();
      return (
        <>
          {emojis.length > 0 && <span className="event-emoji">{emojis.join(' ')}&nbsp;</span>}
          <span className="event-title-text">{text || title}</span>
        </>
      );
    } catch (e) {
      // Fallback for environments without unicode property escapes
      const simple = title.replace(/[\u2600-\u27BF\u1F300-\u1F6FF\u1F900-\u1F9FF]/g, '').trim();
      const found = title.replace(simple, '').trim();
      return (
        <>
          {found && <span className="event-emoji">{found}&nbsp;</span>}
          <span className="event-title-text">{simple || title}</span>
        </>
      );
    }
  };

  return (
    <div className="schedule-container">
      {/* Search Box */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Events, Department, Location..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setShowDates(true); }}
            onFocus={() => setShowDates(true)}
          />
        </div>
      </div>

      {/* Date Navigation */}
      <div className="date-navigation" ref={dateNavRef}>
        {dates.map((dateObj) => (
          <button
            key={dateObj.date}
            ref={selectedDate === dateObj.date ? activeButtonRef : null}
            className={`date-btn ${selectedDate === dateObj.date ? 'active' : ''}`}
            onClick={() => setSelectedDate(dateObj.date)}
            aria-pressed={selectedDate === dateObj.date}
            aria-label={`Select ${dateObj.date} (${dateObj.day})`}
          >
            <div className="date-display">{dateObj.date}</div>
            <div className="day-label">{dateObj.day}</div>
          </button>
        ))}
      </div>


      {/* Selected Date Display or Search Results Display */}
      <div className="selected-date-display">
        <h3>{searchQuery.trim() ? `Search Results for "${searchQuery}"` : selectedDate}</h3>
        <div className="date-underline"></div>
      </div>
      {/* Events List */}
      <div className="events-container">
        {getFilteredEvents().length > 0 ? (
              getFilteredEvents().map((event) => (
                event.isCeremony ? (
            <div key={event.id} className={`event-card ceremony-card event-status-${event.status}`}>
              <div className="event-ceremony">
                <h3 className="event-title">{renderTitle(event.title)}</h3>
                <p className="event-location">📍 {event.location}</p>
              </div>
              <div className={`event-status-badge status-${event.status}`}>
                {getStatusLabel(event.status)}
              </div>
            </div>
          ) : (
            <div key={event.id} className={`event-card event-status-${event.status}`} style={{ background: getEventColor(event.title, event.id) }}>
              <div className="event-time">
                <span className="time-badge">{event.time}</span>
              </div>

              <div className="event-name">
                <h3 className="event-title">{renderTitle(event.title)}</h3>
                <p className="event-location">{event.location}</p>
              </div>

              <div className="event-teams">
                {event.team2 ? (
                  <>
                    <div className="team team1">
                      <span className="team-name">{getPoolName(event.team1?.name)}</span>
                    </div>

                    <div className="vs-divider">
                      VS
                    </div>

                    <div className="team team2">
                      <span className="team-name">{getPoolName(event.team2?.name)}</span>
                    </div>
                  </>
                ) : (
                  <div className="team team1 single-team">
                    <span className="team-name">{getPoolName(event.team1?.name)}</span>
                  </div>
                )}
              </div>

              <div className={`event-status-badge status-${event.status}`}>
                {getStatusLabel(event.status)}
              </div>
            </div>
          )
          ))
        ) : (
          <div className="no-events-message">
            <p>No events found. Try searching for a different term.</p>
          </div>
        )}
      </div>

      <div className="schedule-footer">
        <p>Updated event data, venues, and timings subject to change as per official announcements</p>
      </div>
    </div>
  );
};

export default Schedule;