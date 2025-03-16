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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full h-full sm:h-[90vh] md:max-w-lg md:h-auto sm:overflow-y-auto p-4 md:p-6 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-lg md:text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Event Image */}
        <img
          src={event.image || "https://via.placeholder.com/400"}
          alt={event.title}
          className="h-32 md:h-40 w-full object-contain rounded-lg shadow-md"
        />

        {/* Event Title (Centered) */}
        <h2 className="text-xl md:text-2xl font-bold text-cyan-900 text-center mt-4">
          {event.title}
        </h2>

        {/* Event Details (Left-Aligned) */}
        <div className="mt-3 text-left flex-grow overflow-y-auto">
          <div className="border-l-2 border-b-2 pl-4">
            <p className="text-sm md:text-md text-cyan-700 font-medium">{event.location}</p>
            <h3 className="italic text-xs md:text-sm text-gray-600">Facilitated by: {event.facilitators}</h3>
            <p className="text-sm md:text-md text-gray-700">
              {formatDate(event.date)} - {formatTime(event.time)}
            </p>
          </div>
          <p className="text-sm md:text-md text-gray-800 mt-2">{event.description}</p>
        </div>

        {/* Register Button (Centered) */}
        <Link
          to={`/register?id=${event.id}`}
          className="mt-5 w-full bg-cyan-600 text-white py-2 md:py-3 rounded-lg text-md md:text-lg font-medium hover:bg-cyan-700 transition shadow-md block text-center"
        >
          Register for Workshop
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
