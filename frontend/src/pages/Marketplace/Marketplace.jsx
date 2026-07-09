import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMarketplaceServices } from "../../services/marketplaceService";

function Marketplace() {
    const navigate = useNavigate();

    const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = useState("latest");

    useEffect(() => {
        loadServices();
    }, []);

    async function loadServices() {
        const data = await getMarketplaceServices();
        setServices(data);
    }

    const filteredServices = [...services]
        .filter((service) =>
            service.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((service) =>
            category ? service.category === category : true
        )
        .filter((service) =>
            minPrice ? Number(service.price) >= Number(minPrice) : true
        )
        .filter((service) =>
            maxPrice ? Number(service.price) <= Number(maxPrice) : true
        )
        .sort((a, b) => {
            if (sort === "priceLow") {
                return a.price - b.price;
            }

            if (sort === "priceHigh") {
                return b.price - a.price;
            }

            return new Date(b.created_at) - new Date(a.created_at);
        });

    return (
        <div className="p-4 max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                <div>
                    <h1 className="text-3xl font-bold">
                        Marketplace
                    </h1>

                    <p className="text-gray-500">
                        Find Local Services
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Search Service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-xl p-3 w-full md:w-80"
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="">
                        All Categories
                    </option>

                    {[...new Set(services.map((s) => s.category))].map((cat) => (
                        <option
                            key={cat}
                            value={cat}
                        >
                            {cat}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="latest">
                        Latest Listings
                    </option>

                    <option value="priceLow">
                        Price Low → High
                    </option>

                    <option value="priceHigh">
                        Price High → Low
                    </option>
                </select>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredServices.map((service) => (

                    <div
                        key={service.id}
                        className="bg-white rounded-2xl border shadow hover:shadow-xl overflow-hidden transition"
                    >

                        <img
                            src={
                                service.image
                                    ? service.image
                                    : "https://placehold.co/600x350?text=No+Image"
                            }
                            alt={service.title}
                            className="w-full h-52 object-cover cursor-pointer"
                            onClick={() =>
                                navigate(`/services/${service.id}`)
                            }
                        />

                        <div className="p-5">

                            <p className="text-emerald-600 font-semibold text-sm">
                                {service.category}
                            </p>

                            <h2
                                className="text-xl font-bold mt-2 cursor-pointer hover:text-emerald-600"
                                onClick={() =>
                                    navigate(`/services/${service.id}`)
                                }
                            >
                                {service.title}
                            </h2>

                            <p className="text-gray-500 mt-3 line-clamp-3">
                                {service.description}
                            </p>

                            <div className="mt-5">

                                <h3 className="text-2xl font-bold text-emerald-600">
                                    Rs {service.price}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    {service.delivery_time} Days Delivery
                                </p>

                            </div>

                            <div className="flex gap-2 mt-6">

                                <button
                                    onClick={() =>
                                        navigate(`/services/${service.id}`)
                                    }
                                    className="flex-1 border border-emerald-600 text-emerald-600 py-2 rounded-xl hover:bg-emerald-50"
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() =>
                                        navigate(`/bookings?service=${service.id}`)
                                    }
                                    className="flex-1 bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700"
                                >
                                    Book Now
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {filteredServices.length === 0 && (

                <div className="text-center py-20">

                    <h2 className="text-2xl font-bold text-gray-500">
                        No Services Found
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Try another search or filter.
                    </p>

                </div>

            )}

        </div>
    );
}

export default Marketplace;