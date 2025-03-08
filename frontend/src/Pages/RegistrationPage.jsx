import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import { get } from '../../../backend/routes/registrationRoutes';

const RegistrationPage = () => {
    const inProduction = import.meta.env.VITE_PROD == 'true';
    const URL = inProduction ? import.meta.env.VITE_PROD_URL : import.meta.env.VITE_DEV_URL;
    const PORT = import.meta.env.VITE_PORT;
    
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    
    const eventId = query.get("id");

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [affiliation, setAffiliation] = useState("")
    const [selectedEvent, setSelectedEvent] = useState("");
    const [link, setLink] = useState("");
    const [eventName, setEventName] = useState("");

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await fetch(`/api/events/${eventId}/get`);
                const data = await response.json();
                
                if (data.result) {
                    setEventName(data.result.title);  // Set event title
                    setLink(data.result.link);  // Set event link
                }
            } catch (err) {
                console.error("Error fetching event details:", err);
            }
        };

        if (eventId) getEventDetails();
    }, [eventId]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/registration/${eventId}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, title, affiliation, event: selectedEvent }),
            });
            if (response.ok) setSubmitted(true);
        } catch (err) {
            console.error(err);
        }
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border p-6 rounded-lg shadow-md bg-white w-full max-w-md">

            {!submitted && (
                        <>           
                <h2 className="text-2xl font-semibold text-cyan-900 mb-4 text-center">Register for</h2>
                <h3 className="text-lg text-cyan-900/80 mb-6 text-center">{eventName}</h3>    
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label className="font-medium">Full Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded p-2 mt-1"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Title:</label>
                        <select value={title} onChange={(e) => setTitle(e.target.value)} className='border-2'>
                            <option value="">Choose a Title</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Prof.">Prof.</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded p-2 mt-1"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Phone Number:</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border rounded p-2 mt-1"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Affiliation to William & Mary:</label>
                        <select value={affiliation} onChange={(e) => setAffiliation(e.target.value)} className='border-2'>
                            <option value="">Choose affiliation</option>
                            <option value="Student">Student</option>
                            <option value="Professor">Professor</option>
                            <option value="Staff">Staff</option>
                            <option value="Community Member">Community Member</option>
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-cyan-900 text-white p-3 rounded-lg hover:bg-cyan-700 transition"
                    >
                        Submit
                    </button>
                    </form>
                        </>
                    )}

                    {submitted && (
                        <>
                        <p className='text-cyan-900 font-bold'>
                            Thank you for registering! Click the button below to complete the process!
                        </p>
                        <a className='flex justify-center items-center bg-cyan-900 text-white p-3 rounded-lg hover:bg-cyan-700 transition'
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Finish Registration
                        </a>
                        </>
                    )
                    
                    }

            </div>
        </div>
    );
}

export default RegistrationPage;
