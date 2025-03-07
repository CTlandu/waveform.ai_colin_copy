import { useState, useEffect } from "react";
import Event from "../Components/Event";
import EventCard from "../Components/EventCard";
import FloatingBubbles from "../Components/FloatingBubbles";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <FloatingBubbles></FloatingBubbles>
      <h2 className="text-3xl font-semibold text-cyan-900 mb-4">Workshops</h2>
      <p className="text-lg text-cyan-900/80 mb-6">
        Check out our upcoming workshops!
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No workshops available.
          </p>
        )}
      </div>

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
