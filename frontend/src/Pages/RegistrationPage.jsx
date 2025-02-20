import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const RegistrationPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    
    const eventId = query.get("id");
    const eventName = query.get("title");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedEvent, setSelectedEvent] = useState("");

    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/registration/${eventId}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, event: selectedEvent }),
            });
            if (response.ok) setSubmitted(true);
        } catch (err) {
            console.error(err);
        }
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border p-6 rounded-lg shadow-md bg-white w-full max-w-md">
                <h2 className="text-3xl font-semibold text-cyan-900 mb-6 text-center">
                    Registering For
                </h2>
                <h3 className="text-xl font-semibold text-cyan-900 mb-6 text-center">
                    {eventName}
                </h3>
                
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    {!submitted && (
                        <>
                    <div className="flex flex-col">
                        <label className="font-medium">Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded p-2 mt-1"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded p-2 mt-1"
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

                    <button 
                        type="submit" 
                        className="bg-cyan-900 text-white p-3 rounded-lg hover:bg-cyan-700 transition"
                    >
                        Submit
                    </button>
                        </>
                    )}

                    {submitted && (
                        <>
                        <p className='text-cyan-900'>
                            Thank you for registering! Click the button below to complete the process!
                        </p>
                        <a className='flex justify-center items-center bg-cyan-900 text-white p-3 rounded-lg hover:bg-cyan-700 transition'
                        href='https://wm.universitytickets.com/w/event.aspx?id=1689'
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Finish Registration
                        </a>
                        </>
                    )
                    
                    }

                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
