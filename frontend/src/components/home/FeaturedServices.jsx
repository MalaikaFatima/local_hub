import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMarketplaceServices } from "../../services/marketplaceService";

function FeaturedServices() {
    const navigate = useNavigate();

    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    async function loadServices() {
        try {
            const data = await getMarketplaceServices();

            // Show only first 3 latest services
            setServices(data.slice(0, 3));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

                    <div>
                        <h2 className="text-4xl font-bold">
                            Featured Services
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Hire trusted professionals near you.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/marketplace")}
                        className="text-emerald-600 font-semibold hover:underline"
                    >
                        View All →
                    </button>

                </div>

                {services.length === 0 ? (

                    <div className="text-center py-16">

                        <h3 className="text-2xl font-semibold text-gray-500">
                            No Services Available
                        </h3>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                        {services.map((service) => (

                            <div
                                key={service.id}
                                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                            >

                                <img
                                    src={
                                        service.image
                                            ? service.image
                                            : "https://placehold.co/600x350?text=No+Image"
                                    }
                                    alt={service.title}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-6">

                                    <span className="text-sm text-emerald-600 font-semibold uppercase">
                                        {service.category}
                                    </span>

                                    <h3 className="text-2xl font-semibold mt-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 mt-3 line-clamp-2">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-between mt-6 text-sm text-gray-500">

                                        <span>
                                            {service.delivery_time} Days
                                        </span>

                                        <span>
                                            {service.user?.name || "Provider"}
                                        </span>

                                    </div>

                                    <div className="flex justify-between items-center mt-8">

                                        <h4 className="text-emerald-600 font-bold text-2xl">
                                            Rs {service.price}
                                        </h4>

                                        <button
                                            onClick={() =>
                                                navigate(`/services/${service.id}`)
                                            }
                                            className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-5 py-2 rounded-xl"
                                        >
                                            View Details
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>
        </section>
    );
}

export default FeaturedServices;