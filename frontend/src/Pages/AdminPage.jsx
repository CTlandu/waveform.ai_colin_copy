import { useState, useEffect } from "react";

function formatTime(time) {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${String(minutes).padStart(2, "0")} ${ampm}`;
  }

const AdminPage = () => {
    const [registrations, setRegistrations] = useState([]);

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
                                <td className="border px-4 py-2">Null</td>
                                <td className="border px-4 py-2">Null</td>
                                <td className="border px-4 py-2">Null</td>
                                <td className="border px-4 py-2">{registration.name}</td>
                                <td className="border px-4 py-2">{registration.email}</td>
                                <td className="border px-4 py-2">{registration.phone}</td>
                                <td className="border px-4 py-2">{registration.title}</td>
                                <td className="border px-4 py-2">{registration.affiliation}</td>
                                <td className="border px-4 py-2">{formatTime(registration.created_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;