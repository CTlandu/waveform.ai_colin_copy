const Event = ({ event, onClick }) => {
    return (
      <div
        className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
        onClick={onClick}
      >
        <img
          src={event.image || "https://via.placeholder.com/300"} // Default placeholder image
          alt={event.title}
          className="w-full h-40 object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold text-cyan-900 mt-2">{event.title}</h3>
      </div>
    );
  };
  
  export default Event;
  