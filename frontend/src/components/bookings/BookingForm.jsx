import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getServices } from "../../services/serviceService";

function BookingForm({
    booking,
    onSubmit,
    defaultBooking,
}) {
    const { token } = useAuth();

    const [services, setServices] = useState([]);
    const [form, setForm] = useState({

        service_id: "",
        requirements: "",
        budget: "",
        deadline: "",
        status: "pending",

    }); useEffect(() => {
        async function loadServices() {
            try {
                const data = await getServices(token);
                setServices(data);
            } catch (err) {
                console.log(err);
            }
        }

        loadServices();
    }, []);

    useEffect(() => {

        if (booking) {
    
            setForm({
    
                service_id: booking.service_id || "",
                requirements: booking.requirements || "",
                budget: booking.budget || "",
                deadline: booking.deadline || "",
                status: booking.status || "pending",
    
            });
    
        }
    
        else if (defaultBooking) {
    
            setForm(defaultBooking);
    
        }
    
        else {
    
            setForm({
    
                service_id: "",
                requirements: "",
                budget: "",
                deadline: "",
                status: "pending",
    
            });
    
        }
    
    }, [booking, defaultBooking]);

    function handleChange(e) {

        setForm({

            ...form,
            [e.target.name]: e.target.value,

        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        onSubmit(form);

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-5">

            <select
                name="service_id"
                value={form.service_id}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="">Select Service</option>

                {services.map(service => (
                    <option
                        key={service.id}
                        value={service.id}
                    >
                        {service.title}
                    </option>
                ))}
            </select>
            <textarea
                name="requirements"
                placeholder="Requirements"
                value={form.requirements}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-xl p-3"
            />

            <input
                type="number"
                name="budget"
                placeholder="Budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

         

            <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3"
            >
                {booking ? "Update Booking" : "Add Booking"}
            </button>

        </form>

    );

}

export default BookingForm;