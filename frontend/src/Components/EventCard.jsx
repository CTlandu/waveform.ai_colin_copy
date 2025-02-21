import { Link } from "react-router-dom";

const EventCard = ({ event, onClose }) => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        onClick={onClose} // Close when clicking outside the modal
      >
        <div
          className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
  
          {/* Event Content */}
          <img
            src={event.image || "https://via.placeholder.com/400"}
            alt={event.title}
            className="h-36 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold text-cyan-900 mt-3">{event.title}</h2>
          <p className="text-sm text-gray-700 mt-2">{event.date}</p>
          <p className="text-md text-gray-800 mt-2">{event.description}</p>
  
          {/* External Link */}
          <Link to={`/register?id=${event.id}`} className="mt-4 inline-block bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition">
            Register for Event
          </Link>
          
        </div>
      </div>
    );
  };
  
  export default EventCard;
  