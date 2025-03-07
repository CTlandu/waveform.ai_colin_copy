import { useState, useEffect } from "react";
import Event from "../Components/Event";
import FloatingBubbles from "../Components/FloatingBubbles";
import EventCard from "../Components/EventCard";

const Workshops = () => {
  const inProduction = import.meta.env.VITE_PROD == "true";
  const URL = inProduction
    ? import.meta.env.VITE_PROD_URL
    : import.meta.env.VITE_DEV_URL;
  const PORT = import.meta.env.VITE_PORT;

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEvents = async () => {
    try {
      const response = await fetch(`/api/events/get`);
      const data = await response.json();
      setEvents(data.result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Helper function to format the date (YYYY-MM-DD format)
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-us"); // "YYYY-MM-DD" format in local time
  };
  

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const dateKey = formatDate(event.date);
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(event);
    return acc;
  }, {});

  // Sort dates in chronological order
  const sortedDates = Object.keys(groupedEvents).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    
    <div className="container mx-auto px-4 py-8">
      <FloatingBubbles />
      <h2 className="text-3xl font-semibold text-cyan-900 mb-4">Workshops</h2>
      <p className="text-lg text-cyan-900/80 mb-6">
        Check out our upcoming workshops!
      </p>

      {sortedDates.length > 0 ? (
        sortedDates.map((date) => (
          <div key={date} className="mb-6">
            {/* Date Header */}
            <h3 className="text-2xl font-bold text-teal-800 mb-2 mt-16">
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>

            {/* Event Cards for this Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {groupedEvents[date].map((event) => (
                <Event
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No workshops available.</p>
      )}

      {/* Show modal if an event is selected */}
      {selectedEvent && (
        <EventCard
          id={selectedEvent.id}
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Workshops;
