import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    const [affiliation, setAffiliation] = useState("");
    const [selectedEvent, setSelectedEvent] = useState("");
    const [link, setLink] = useState("");
    const [eventName, setEventName] = useState("");
    
    const [submitted, setSubmitted] = useState(false);
    
    // Form validation states
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });
    
    // Real-time validation
    const validateLatinInput = (value, field) => {
        const latinPattern = /^[A-Za-z0-9\s.,!?@#$%^&*()_\-+=[\]{}|\\:;"'<>\/~`]*$/;
        if (value && !latinPattern.test(value)) {
            setErrors(prev => ({
                ...prev,
                [field]: "Please use only Latin-based characters"
            }));
            return false;
        } else {
            setErrors(prev => ({
                ...prev,
                [field]: ""
            }));
            return true;
        }
    };
    
    const validateEmail = (value) => {
        if (!value) return true; // Empty is handled by required attribute
        
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailPattern.test(value)) {
            setErrors(prev => ({
                ...prev,
                email: "Please enter a valid email address"
            }));
            return false;
        } else {
            setErrors(prev => ({
                ...prev,
                email: ""
            }));
            return true;
        }
    };
    
    const validatePhone = (value) => {
        if (!value) return true; // Phone is optional
        
        // Basic international phone validation
        // Allows for various formats including country codes
        const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
        
        if (!phonePattern.test(value)) {
            setErrors(prev => ({
                ...prev,
                phone: "Please enter a valid phone number"
            }));
            return false;
        } else {
            setErrors(prev => ({
                ...prev,
                phone: ""
            }));
            return true;
        }
    };
    
    // Input change handlers with validation
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        validateLatinInput(value, "name");
    };
    
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateLatinInput(value, "email") && validateEmail(value);
    };
    
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        validateLatinInput(value, "phone") && validatePhone(value);
    };

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await fetch(`/api/events/${eventId}/get`);
                const data = await response.json();
                
                if (data.result) {
                    setEventName(data.result.title);
                    setLink(data.result.link);
                }
            } catch (err) {
                console.error("Error fetching event details:", err);
            }
        };

        if (eventId) getEventDetails();
    }, [eventId]);
    
    const validateForm = () => {
        const nameValid = validateLatinInput(name, "name");
        const emailValid = validateLatinInput(email, "email") && validateEmail(email);
        const phoneValid = !phone || (validateLatinInput(phone, "phone") && validatePhone(phone));
        
        return nameValid && emailValid && phoneValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            // Scroll to the first error
            const errorElement = document.querySelector('.error-message');
            errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        
        try {
            const response = await fetch(`/api/registration/${eventId}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, title, affiliation, event: selectedEvent }),
            });
            if (response.ok) setSubmitted(true);
            else {
                const errorData = await response.json();
                console.error("Server error:", errorData);
                // Handle server errors here (e.g., database constraints)
            }
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
                <h6 className='pb-8 text-red-500'><span className="text-red-500">*</span> indicates required field</h6> 
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label className="font-medium">Full Name: <span className="text-red-500">*</span> </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                            className={`border rounded p-2 mt-1 ${errors.name ? "border-red-500" : ""}`}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1 error-message">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Title:</label>
                        <select 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className={`border rounded p-2 mt-1 ${title ? "text-black" : "text-gray-400"}`}
                        >
                            <option value="">Choose a Title</option>
                            <option value="Ms." className='text-black'>Ms.</option>
                            <option value="Mrs." className='text-black'>Mrs.</option>
                            <option value="Mr." className='text-black'>Mr.</option>
                            <option value="Dr." className='text-black'>Dr.</option>
                            <option value="Prof." className='text-black'>Prof.</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Email: <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`border rounded p-2 mt-1 ${errors.email ? "border-red-500" : ""}`}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1 error-message">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Phone Number:</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={handlePhoneChange}
                            className={`border rounded p-2 mt-1 ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1 error-message">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium">Affiliation to William & Mary:</label>
                        <select 
                            value={affiliation} 
                            onChange={(e) => setAffiliation(e.target.value)} 
                            className={`border rounded p-2 mt-1 ${affiliation ? "text-black" : "text-gray-400"}`}
                        >
                            <option value="">Choose affiliation</option>
                            <option value="Student" className='text-black'>Student</option>
                            <option value="Professor" className='text-black'>Alumni</option>
                            <option value="Staff" className='text-black'>Staff</option>
                            <option value="Community Member" className='text-black'>Community Member</option>
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
                <div className="text-center max-w-md mx-auto p-8 rounded-lg bg-white">
                    <h2 className="text-cyan-900 text-2xl font-bold mb-4">Thank you for registering!</h2>
                    <p className="text-gray-600 mb-6">Your workshop registration has been confirmed. We look forward to seeing you there!</p>
                    
                    <Link
                        to={`/workshops`}
                        className="mb-3 w-full bg-cyan-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-cyan-700 transition shadow-md block text-center"
                    >
                        Explore More Workshops
                    </Link>
                    
                    <Link
                        to={`/`}
                        className="w-full text-cyan-600 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition border border-cyan-600 block text-center"
                    >
                        Return Home
                    </Link>
                </div>
            )}
            </div>
        </div>
    );
}

export default RegistrationPage;