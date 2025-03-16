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
function formatTime(time) {
  // Ensure time is a string (just in case it's stored as an object)
  if (!time) return "";

  const [hours, minutes, seconds] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for AM times
  return `${formattedHours}:${String(minutes).padStart(2, "0")} ${ampm}`;
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
        <div className="bg-primary-30 text-white rounded-lg px-4 py-2 text-center">
          <p className="text-lg font-bold">{formattedDate.month} {formattedDate.day}</p>
          <p className="text-sm">{formatTime(event.time)}</p>
        </div>
        <div className="ml-4 flex-1">
          <h1 className="text-xl font-bold text-primary-50">{event.title}</h1>
          <p className="text-sm text-gray-600">Facilitated by: {event.facilitators}</p>
        </div>
        <img 
          src={event.image || "https://via.placeholder.com/150"} 
          alt={event.title} 
          className="w-20 h-20 object-contain rounded-md hidden md:block"
        />
      </div>

      {/* Footer Section with Buttons */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-t border-gray-300 md:h-32 lg:h-24">
      <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
      <div className="flex justify-end">
          <Link 
            to={`/register?id=${event.id}`} 
            className="w-48 h-10 bg-primary-60 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition text-center"
          >
            Register for Workshop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
