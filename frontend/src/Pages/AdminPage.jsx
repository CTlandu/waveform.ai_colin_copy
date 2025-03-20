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
    
    // Options to display the date in a readable format
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    return date.toLocaleDateString("en-US", options); // Format it as "March 24, 2025"
}
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // You can define options for different formats like 'long' or 'short' dates
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true, // AM/PM format
    };

    return date.toLocaleString("en-US", options); // Example: "March 20, 2025, 12:31 AM"
}


const AdminPage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [events, setEvents] = useState({}); // Store event details by ID

    useEffect(() => {
        const getRegistrations = async () => {
            try {
                console.log("Test timestamp conversion: ", formatTimestamp('2025-03-20T00:49:21.000Z'))
                const response = await fetch("http://localhost:3000/api/registration/get");
                const data = await response.json();
                setRegistrations(data.result);
            } catch (err) {
                console.error(err);
            }
        };

        getRegistrations();
    }, []);

    useEffect(() => {
        const getEventDetailsById = async (eventId) => {
            try {
                const response = await fetch(`http://localhost:3000/api/events/${eventId}/get`);
                const data = await response.json();
                setEvents(prevState => ({ ...prevState, [eventId]: data.result }));
            } catch (err) {
                console.error(err);
            }
        };

        // Fetch event details for each registration's event_id
        registrations.forEach((registration) => {
            if (registration.event_id) {
                getEventDetailsById(registration.event_id);
            }
        });
    }, [registrations]); // Only run when registrations change

    return (
        <div>
            <h1>ADMIN PAGE</h1>

            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Event</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Time</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Affiliation</th>
                            <th className="border px-4 py-2">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((registration, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {/* Event details */}
                                <td className="border px-4 py-2">
                                    {events[registration.event_id] ? events[registration.event_id].title : "Loading..."}
                                </td>
                                <td className="border px-4 py-2">
                                    {events[registration.event_id] ? formatDate(events[registration.event_id].date) : "Loading..."}
                                </td>
                                <td className="border px-4 py-2">
                                    {events[registration.event_id] ? formatTime(events[registration.event_id].time) : "Loading..."}
                                </td>

                                {/* Registration details */}
                                <td className="border px-4 py-2">{registration.name}</td>
                                <td className="border px-4 py-2">{registration.email}</td>
                                <td className="border px-4 py-2">{registration.phone}</td>
                                <td className="border px-4 py-2">{registration.title}</td>
                                <td className="border px-4 py-2">{registration.affiliation}</td>
                                <td className="border px-4 py-2">{formatTimestamp(registration.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
