import { Link } from "react-router-dom";
import info from '../assets/info.png';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return {
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    year: date.getFullYear(),
    month: date.toLocaleDateString('en-US', { month: 'long' }),
    day: date.getDate(),
    time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  };
}

const Event = ({ event, onClick }) => {
  const formattedDate = formatDate(event.date);

  return (
    <div 
      className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden transition-transform transform"
      onClick={onClick}
    >
      {/* Date and Title Section */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-teal-50">
        <div className="bg-teal-600 text-white rounded-lg px-4 py-2 text-center">
          <p className="text-lg font-bold">{formattedDate.month} {formattedDate.day}</p>
          <p className="text-sm">{event.time}</p>
        </div>
        <div className="ml-4 flex-1">
          <h1 className="text-xl font-bold text-teal-800">{event.title}</h1>
          <p className="text-sm text-gray-600">Facilitated by: {event.facilitators}</p>
        </div>
        <img 
          src={event.image || "https://via.placeholder.com/150"} 
          alt={event.title} 
          className="w-20 h-20 object-contain rounded-md"
        />
      </div>

      {/* Event Details Section */}
      <div className="p-4">
        <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
      </div>

      {/* Footer Section with Buttons */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-t border-gray-300">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <img src={info} alt="Info" className="w-6 h-6" />
        </button>
        <Link 
          to={`/register?id=${event.id}`} 
          className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition"
        >
          Register for Workshop
        </Link>
      </div>
    </div>
  );
};

export default Event;
