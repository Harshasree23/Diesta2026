import { useState, useRef, useEffect } from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('Feb 6');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDates, setShowDates] = useState(false);
  const dateNavRef = useRef(null);
  const activeButtonRef = useRef(null);

  // Function to get current IST date and format it for the schedule
  const getCurrentISTDate = () => {
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const istTime = new Date(now.getTime() + istOffset + now.getTimezoneOffset() * 60 * 1000);
    
    const day = istTime.getDate();
    const month = istTime.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' });
    
    // Format as "Feb 8", "Feb 9", etc.
    return `${month} ${day}`;
  };

  // Set current date on component mount
  useEffect(() => {
    const currentDate = getCurrentISTDate();
    // Check if current date exists in our schedule data
    if (scheduleData[currentDate]) {
      setSelectedDate(currentDate);
    }
  }, []);

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
        id: 'c1',
        startTime: '10:00 AM',
        endTime: null,
        title: 'Opening Ceremony',
        location: 'Main Lawn',
        status: 'done',
        isCeremony: true
      },
      {
        id: 's1',
        startTime: '01:00 PM',
        endTime: '03:00 PM',
        title: 'Cricket 🏏',
        team1: "Chemistry",
        team2: "Civil",
        location: 'Field A',
        status: 'done'
      },
      {
        id: 's2',
        startTime: '03:00 PM',
        endTime: '05:00 PM',
        title: 'Cricket 🏏',
        team1: "CSE",
        team2: "EE",
        location: 'Field B',
        status: 'ongoing'
      },
      {
        id: 's3',
        startTime: '06:00 PM',
        endTime: null,
        title: 'Football ⚽',
        team1: "BME",
        team2: "MAE",
        location: 'Field C',
        status: 'upcoming'
      }
      ,
      {
        id: 'c2',
        startTime: '11:00 AM',
        endTime: null,
        title: 'Poetry Competition',
        team1: "Rang De Manch",
        team2: null,
        location: 'Auditorium',
        status: 'upcoming'
      },
      {
        id: 'c3',
        startTime: '01:00 PM',
        endTime: null,
        title: 'Stage Play',
        team1: "Rang De Manch",
        team2: null,
        location: 'Main Stage',
        status: 'upcoming'
      },
      {
        id: 'c4',
        startTime: '02:30 PM',
        endTime: null,
        title: 'Poetry Writing',
        team1: "Writing Club",
        team2: null,
        location: 'Hall A',
        status: 'upcoming'
      },
      {
        id: 'c5',
        startTime: '04:00 PM',
        endTime: null,
        title: 'Creative Writing',
        team1: "Writing Club",
        team2: null,
        location: 'Hall B',
        status: 'upcoming'
      }
    ],
    'Feb 7': [
      {
        id: 's4',
        time: '09:00 AM',
        title: 'Basketball 🏀',
        team1: "IC Design",
        team2: "EM",
        location: 'Court A',
        status: 'upcoming'
      },
      {
        id: 's5',
        time: '11:00 AM',
        title: 'Badminton 🏸',
        team1: "Chemistry",
        team2: "CSE",
        location: 'Hall A',
        status: 'upcoming'
      },
      {
        id: 'c6',
        time: '02:00 PM',
        title: 'Debate 🎤',
        team1: "Civil",
        team2: "EE",
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 'c7',
        time: '09:30 AM',
        title: 'General Quiz',
        team1: "Quiz Club",
        location: 'Quiz Hall',
        status: 'upcoming'
      },
      {
        id: 'c8',
        time: '11:30 AM',
        title: 'Cosplay',
        team1: "Otaku",
        location: 'Exhibit Hall',
        status: 'upcoming'
      },
      {
        id: 'c9',
        time: '03:00 PM',
        title: 'Shuffle - Group',
        team1: "Shuffle",
        location: 'Dance Arena',
        status: 'upcoming'
      }
    ],
    'Feb 8': [
      {
        id: 's6',
        time: '10:00 AM',
        title: 'Chess Championship ♟️',
        team1: "Physics",
        team2: "IC Design",
        location: 'Building B',
        status: 'upcoming'
      },
      {
        id: 's7',
        time: '03:00 PM',
        title: 'Hackathon 💻',
        team1: "BME",
        team2: "ES",
        location: 'Tech Lab',
        status: 'upcoming'
      }
      ,
      {
        id: 'c10',
        time: '10:00 AM',
        title: 'Shuffle - Duo/Trio',
        team1: "Shuffle",
        location: 'Dance Arena',
        status: 'upcoming'
      },
      {
        id: 'c11',
        time: '01:00 PM',
        title: 'Shuffle - Solo',
        team1: "Shuffle",
        location: 'Dance Arena',
        status: 'upcoming'
      }
    ],
    'Feb 9': [
      {
        id: 's8',
        time: '09:00 AM',
        title: 'Volleyball 🏐',
        team1: "MAE",
        team2: "Climate Change",
        location: 'Court B',
        status: 'upcoming'
      },
      {
        id: 's9',
        time: '04:00 PM',
        title: 'Table Tennis ',
        team1: "Heritage Science",
        team2: "Chemistry",
        location: 'Hall B',
        status: 'upcoming'
      }
    ],
    'Feb 10': [
      {
        id: 'c12',
        time: '10:00 AM',
        title: 'Science Quiz ',
        team1: "Civil",
        team2: "CSE",
        location: 'Hall C',
        status: 'upcoming'
      },
      {
        id: 's10',
        time: '02:00 PM',
        title: 'Coding Challenge ',
        team1: "EE",
        team2: "IC Design",
        location: 'Lab A',
        status: 'upcoming'
      }
    ],
    'Feb 11': [
      {
        id: 's11',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        title: 'Cricket Semi Finals ',
        team1: "BME",
        team2: "MAE",
        location: 'Field A',
        status: 'upcoming'
      },
      {
        id: 15,
        time: '03:00 PM',
        title: 'Dance Performance ',
        team1: "Chemistry",
        team2: "Civil",
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 33,
        time: '05:00 PM',
        title: 'Theme Based Portrait',
        team1: "Infocus",
        location: 'Gallery',
        status: 'upcoming'
      },
      {
        id: 34,
        time: '06:30 PM',
        title: 'Photostory',
        team1: "Infocus",
        location: 'Gallery',
        status: 'upcoming'
      }
    ],
    'Feb 12': [
      {
        id: 16,
        time: '09:00 AM',
        title: 'Business Case Study ',
        team1: "CSE",
        team2: "Physics",
        location: 'Hall D',
        status: 'upcoming'
      },
      {
        id: 17,
        time: '05:00 PM',
        title: 'Tech Talk Battle ',
        team1: "EE",
        team2: "IC Design",
        location: 'Auditorium',
        status: 'upcoming'
      }
      ,
      {
        id: 35,
        time: '02:00 PM',
        title: 'Board Games Event',
        team1: "WBC",
        location: 'Common Room',
        status: 'upcoming'
      }
    ],
    'Feb 13': [
      {
        id: 18,
        time: '10:00 AM',
        title: 'Fashion Show Finale ',
        team1: "BME",
        team2: "ES",
        location: 'Main Lawn',
        status: 'upcoming'
      },
      {
        id: 19,
        time: '04:00 PM',
        title: 'Workshop Finals ',
        team1: "MAE",
        team2: "Climate Change",
        location: 'Building C',
        status: 'upcoming'
      }
      ,
      {
        id: 36,
        time: '11:00 AM',
        title: 'Solo Singing',
        team1: "Vibes",
        location: 'Auditorium',
        status: 'upcoming'
      },
      {
        id: 37,
        time: '02:00 PM',
        title: 'Battle of Bands',
        team1: "Vibes",
        location: 'Main Stage',
        status: 'upcoming'
      },
      {
        id: 38,
        time: '05:00 PM',
        title: 'Freestyle',
        team1: "Vibes",
        location: 'Open Area',
        status: 'upcoming'
      }
    ],
    'Feb 14': [
      {
        id: 20,
        time: '09:00 AM',
        title: 'Robotics Finals ',
        team1: "Heritage Science",
        team2: "Chemistry",
        location: 'Arena',
        status: 'upcoming'
      },
      {
        id: 21,
        time: '02:00 PM',
        title: 'Cricket Finals 🏏',
        team1: "Civil",
        team2: "CSE",
        location: 'Main Field',
        status: 'upcoming'
      }
      ,
      {
        id: 39,
        time: '10:00 AM',
        title: 'Film Making Competition',
        team1: "BTL",
        location: 'Hall C',
        status: 'upcoming'
      },
      {
        id: 40,
        time: '01:30 PM',
        title: 'Reel Making Competition',
        team1: "BTL",
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
        team1: "Gesture",
        location: 'Studio',
        status: 'upcoming'
      },
      {
        id: 42,
        time: '12:30 PM',
        title: 'Expressive Letter Battle',
        team1: "Gesture",
        location: 'Hall D',
        status: 'upcoming'
      },
      {
        id: 43,
        time: '03:00 PM',
        title: 'Nologo Uprising',
        team1: "Gesture",
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

  // Format time display: show start time and end time if available
  const formatTimeDisplay = (event) => {
    if (event.startTime && event.endTime) {
      return `${event.startTime} - ${event.endTime}`;
    } else if (event.startTime) {
      return event.startTime;
    } else if (event.time) {
      // Fallback for old format
      return event.time;
    }
    return '';
  };

  // Get time for sorting (prefer startTime, fallback to time)
  const getSortTime = (event) => {
    return event.startTime || event.time || '';
  };

  // Tokenized search: all tokens must match somewhere in the event text
  // Also returns results sorted chronologically (by date order then time)
  const getFilteredEvents = () => {
    const query = searchQuery.trim().toLowerCase();

    // No query: return events for the selected date in chronological order
    if (!query) {
      const events = (scheduleData[selectedDate] || []).slice();
      return events.sort((a, b) => parseTimeToMinutes(getSortTime(a)) - parseTimeToMinutes(getSortTime(b)));
    }

    const tokens = query.split(/\s+/).filter(Boolean);
    const allEvents = getAllEvents();

    const filtered = allEvents.filter((event) => {
      const searchable = (
        `${event.title} ${event.location || ''} ${event.team1 || ''} ${event.team2 || ''} ${event.date || ''} ${event.startTime || event.time || ''} ${event.endTime || ''}`
      ).toLowerCase();

      return tokens.every((t) => searchable.includes(t));
    });

    // Sort search results by date order (as in `dates` array) then by time
    return filtered.sort((a, b) => {
      const da = (dateOrder[a.date] ?? 0);
      const db = (dateOrder[b.date] ?? 0);
      if (da !== db) return da - db;
      return parseTimeToMinutes(getSortTime(a)) - parseTimeToMinutes(getSortTime(b));
    });
  };
  const downloadSchedule = () => {
    const scheduleText = Object.entries(scheduleData)
      .map(([date, events]) => {
        return `\n${date}\n${'-'.repeat(50)}\n${events
          .map(
            (event) =>
              `${event.time} - ${event.title}${
                event.team1 && event.team2 ? ` (${event.team1} VS ${event.team2})` : ''
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
    // Use a single subtle gold-tinted background for all events
    return 'rgba(212, 175, 55, 0.06)';
  };

  // Get emoji for event type
  const getEventEmoji = (title) => {
    const titleLower = title.toLowerCase();
    
    // Sports emojis
    if (titleLower.includes('cricket')) return '🏏';
    if (titleLower.includes('football')) return '⚽';
    if (titleLower.includes('basketball')) return '🏀';
    if (titleLower.includes('volleyball')) return '🏐';
    if (titleLower.includes('badminton')) return '🏸';
    if (titleLower.includes('table tennis')) return '🏓';
    if (titleLower.includes('chess')) return '♟️';
    if (titleLower.includes('hackathon')) return '💻';
    
    // Cultural/Performance emojis
    if (titleLower.includes('dance')) return '💃';
    if (titleLower.includes('poetry')) return '📝';
    if (titleLower.includes('stage play')) return '🎭';
    if (titleLower.includes('singing')) return '🎤';
    if (titleLower.includes('music') || titleLower.includes('battle of bands')) return '🎵';
    if (titleLower.includes('fashion')) return '👗';
    if (titleLower.includes('quiz')) return '🧠';
    if (titleLower.includes('debate')) return '🎤';
    if (titleLower.includes('robotics')) return '🤖';
    if (titleLower.includes('coding')) return '💻';
    
    // Ceremony emojis
    if (titleLower.includes('ceremony')) return '🎉';
    if (titleLower.includes('opening')) return '🚀';
    if (titleLower.includes('closing')) return '🏆';
    if (titleLower.includes('prize')) return '🏆';
    
    // Writing/Art emojis
    if (titleLower.includes('writing')) return '✍️';
    if (titleLower.includes('creative')) return '🎨';
    if (titleLower.includes('portrait')) return '🖼️';
    if (titleLower.includes('photography') || titleLower.includes('photostory')) return '📷';
    if (titleLower.includes('film') || titleLower.includes('reel')) return '🎬';
    if (titleLower.includes('animation')) return '🎨';
    if (titleLower.includes('cosplay')) return '🎭';
    if (titleLower.includes('shuffle')) return '🕺';
    
    // General event emoji
    return '📅';
  };

  // Render title with emoji
  const renderTitle = (title) => {
    if (!title) return title;
    
    const emoji = getEventEmoji(title);
    const titleLower = title.toLowerCase();
    
    // Check if title already has emoji
    try {
      const existingEmojis = title.match(/\p{Extended_Pictographic}/gu) || [];
      const text = title.replace(/\p{Extended_Pictographic}/gu, '').trim();
      
      // If title already has emoji, use it as-is
      if (existingEmojis.length > 0) {
        return (
          <>
            <span className="event-emoji">{existingEmojis.join(' ')}&nbsp;</span>
            <span className="event-title-text">{text || title}</span>
          </>
        );
      }
    } catch (e) {
      // Fallback for environments without unicode property escapes
      const simple = title.replace(/[\u2600-\u27BF\u1F300-\u1F6FF\u1F900-\u1F9FF]/g, '').trim();
      const found = title.replace(simple, '').trim();
      
      if (found) {
        return (
          <>
            <span className="event-emoji">{found}&nbsp;</span>
            <span className="event-title-text">{simple || title}</span>
          </>
        );
      }
    }
    
    // Add emoji based on event type
    return (
      <>
        <span className="event-emoji">{emoji}&nbsp;</span>
        <span className="event-title-text">{title}</span>
      </>
    );
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
            <div key={event.id} className={`event-card ${event.isCeremony ? 'ceremony-card' : ''} event-status-${event.status}`} style={{ background: getEventColor(event.title, event.id) }}>
              <div className="event-time">
                <span className="time-badge">{formatTimeDisplay(event)}</span>
              </div>

              <div className="event-name">
                <h3 className="event-title">{renderTitle(event.title)}</h3>
                <p className="event-location">{event.location}</p>
              </div>

              <div className="event-teams">
                {event.team1 && event.team2 ? (
                  <>
                    <div className="team team1">
                      <span className="team-name">{getPoolName(event.team1)}</span>
                    </div>

                    <div className="vs-divider">
                      VS
                    </div>

                    <div className="team team2">
                      <span className="team-name">{getPoolName(event.team2)}</span>
                    </div>
                  </>
                ) : event.team1 ? (
                  <div className="team team1 single-team">
                    <span className="team-name">{getPoolName(event.team1)}</span>
                  </div>
                ) : null}
              </div>

              <div className={`event-status-badge status-${event.status}`}>
                {getStatusLabel(event.status)}
              </div>
            </div>
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