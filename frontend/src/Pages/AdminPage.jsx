import { useState, useEffect } from "react";

function formatTime(time) {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${String(minutes).padStart(2, "0")} ${ampm}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true, // AM/PM format
    };
    return date.toLocaleString("en-US", options);
}

const AdminPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [events, setEvents] = useState({});
    const [filteredEventTitle, setFilteredEventTitle] = useState("");

    // Fetch registrations from the API
    useEffect(() => {
        const getRegistrations = async () => {
            try {
                const response = await fetch("/api/registration/get");
                const data = await response.json();
                setRegistrations(data.result);
            } catch (err) {
                console.error(err);
            }
        };
        getRegistrations();
    }, []);

    // Fetch event details for each registration's event_id
    useEffect(() => {
        const getEventDetailsById = async (eventId) => {
            try {
                const response = await fetch(`/api/events/${eventId}/get`);
                const data = await response.json();
                setEvents(prevState => ({ ...prevState, [eventId]: data.result }));
            } catch (err) {
                console.error(err);
            }
        };

        registrations.forEach((registration) => {
            if (registration.event_id && !events[registration.event_id]) {
                getEventDetailsById(registration.event_id);
            }
        });
    }, [registrations]);

    // Handle event title change
    const handleEventChange = (event) => {
        setFilteredEventTitle(event.target.value);
    };

    // Filter registrations by event title before selecting from the dropdown
    const filteredRegistrations = filteredEventTitle
        ? registrations.filter(reg => {
            const event = events[reg.event_id];
            return event && event.title === filteredEventTitle;
        })
        : registrations;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Admin Page</h1>

            {/* Event Filter Dropdown */}
            <div className="mb-4 flex justify-center">
                <select
                    className="p-2 border border-gray-300 rounded-md shadow-sm"
                    value={filteredEventTitle}
                    onChange={handleEventChange}
                >
                    <option value="">All Events</option>
                    {Object.values(events).map((event) => (
                        <option key={event.id} value={event.title}>
                            {event.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="border px-4 py-2 text-left">Event</th>
                            <th className="border px-4 py-2 text-left">Date</th>
                            <th className="border px-4 py-2 text-left">Time</th>
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Email</th>
                            <th className="border px-4 py-2 text-left">Phone</th>
                            <th className="border px-4 py-2 text-left">Title</th>
                            <th className="border px-4 py-2 text-left">Affiliation</th>
                            <th className="border px-4 py-2 text-left">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRegistrations.length > 0 ? (
                            filteredRegistrations.map((registration, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">
                                        {events[registration.event_id]
                                            ? events[registration.event_id].title
                                            : "Loading..."}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {events[registration.event_id]
                                            ? formatDate(events[registration.event_id].date)
                                            : "Loading..."}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {events[registration.event_id]
                                            ? formatTime(events[registration.event_id].time)
                                            : "Loading..."}
                                    </td>
                                    <td className="border px-4 py-2">{registration.name}</td>
                                    <td className="border px-4 py-2">{registration.email}</td>
                                    <td className="border px-4 py-2">{registration.phone}</td>
                                    <td className="border px-4 py-2">{registration.title}</td>
                                    <td className="border px-4 py-2">{registration.affiliation}</td>
                                    <td className="border px-4 py-2">
                                        {formatTimestamp(registration.created_at)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center p-4 text-gray-500">
                                    No registrations found for this event.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
