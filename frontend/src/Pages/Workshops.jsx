import { useState } from "react";
import Event from "../Components/Event";
import EventCard from "../Components/EventCard";

const sampleEvents = [
  {
    title: "Waveform.ai",
    date: "05/25/2025",
    description:
      "The Art & Science Exchange presents Waveform.ai, a collaboration between human musicians and artificial intelligence. Developed jointly by William & Mary's Music and Physics departments with contributions from renowned international transdisciplinary artist Melody (Melo) Chua, Waveform.ai provides a novel approach to sound design. Join us for a FREE demonstration of how music and physics work together to celebrate the transhumanist potential of welcoming AI onto the stage as a partner instead of merely as a tool. ",
    image: "https://cdn-university.azureedge.net/wm/images/thumbs/waveform.ai%20logos%20(1)2025401506401364.svg", // Replace with real image
    link: "https://wm.universitytickets.com/w/event.aspx?id=1689",
  },
  {
    title: "Sample Workshop 2",
    date: "01/02/2022",
    description: "This is a sample workshop description.",
    image: "https://events.wm.edu/images/system/wm_event_library_2020_02_24_14_28_31.jpg",
  },
  {
    title: "Sample Workshop 3",
    date: "01/02/2022",
    description: "This is a sample workshop description.",
    image: "https://events.wm.edu/images/system/wm_event_library_2020_02_24_14_28_31.jpg",
  },
  {
    title: "Sample Workshop 4",
    date: "01/02/2022",
    description: "This is a sample workshop description.",
    image: "https://events.wm.edu/images/system/wm_event_library_2020_02_24_14_28_31.jpg",
  }
];

const Workshops = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-cyan-900 mb-4">Workshops</h2>
      <p className="text-lg text-cyan-900/80 mb-6">Check out our upcoming workshops!</p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleEvents.map((event, index) => (
          <Event key={index} event={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>

      {/* Show modal if an event is selected */}
      {selectedEvent && <EventCard event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default Workshops;
