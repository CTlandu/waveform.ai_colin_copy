import { useState } from 'react';

const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [event, setEvent] = useState("Select an Event");

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleEventChange = (e) => {
        setEvent(e.target.value);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border p-6 rounded-lg shadow-md bg-white w-full max-w-md">
                <h2 className="text-3xl font-semibold text-cyan-900 mb-6 text-center">
                    Register
                </h2>
                
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
                    
                    <div className="flex flex-col">
                        <label className='font-medium'>Event registering for:</label>
                        <select value={event} onChange={handleEventChange} className='border rounded p-2 mt-1'>
                            <option value="Choose an Event" disabled>Choose an Event</option>
                            <option value="Waveform ai Premier">Waveform ai Premier</option>
                            <option value="Sample Event 1">Sample Event 1</option>
                            <option value="Sample Event 2">Sample Event 2</option>
                        </select>
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
