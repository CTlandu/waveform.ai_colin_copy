import { Link } from "react-router-dom";

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(time) {
  if (!time) return "";
  const [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${String(minutes).padStart(2, "0")} ${ampm}`;
}

const EventCard = ({ event, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity animate-fadeIn "
      onClick={onClose}
    >
<div
  className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
  onClick={(e) => e.stopPropagation()}
>
  {/* Close Button */}
  <button
    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
    onClick={onClose}
  >
    ✕
  </button>

  {/* Event Image */}
  <img
    src={event.image || "https://via.placeholder.com/400"}
    alt={event.title}
    className="h-40 w-full object-contain rounded-lg shadow-md"
  />

  {/* Event Title (Centered) */}
  <h2 className="text-2xl font-bold text-cyan-900 text-center mt-4">
    {event.title}
  </h2>

  {/* Event Details (Left-Aligned) */}
  <div className="mt-3 text-left">
    <div className="border-l-2 border-b-2 pl-4"> 
      <p className="text-md text-cyan-700 font-medium">{event.location}</p>
      <h3 className="italic text-sm text-gray-600">Facilitated by: {event.facilitators}</h3>
      <p className="text-md text-gray-700">
        {formatDate(event.date)} - {formatTime(event.time)}
      </p>
    </div>
    <p className="text-md text-gray-800 mt-2">{event.description}</p>
  </div>

  {/* Register Button (Centered) */}
  <Link
    to={`/register?id=${event.id}`}
    className="mt-5 w-full bg-cyan-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-cyan-700 transition shadow-md block text-center"
  >
    Register for Workshop
  </Link>
</div>

    </div>
  );
};

export default EventCard;
