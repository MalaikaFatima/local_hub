import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getServiceById } from "../../services/serviceService";
import ReviewForm from "../../components/reviews/ReviewForm";
function ServiceDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();
    const [service, setService] = useState(null);

    useEffect(() => {
        loadService();
    }, []);

    async function loadService() {
        const data = await getServiceById(token, id);
        setService(data);
    }

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl font-semibold text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

                    {/* Image */}
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
                        <img
                            src={service.image || "https://placehold.co/600x350"}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            {service.title}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                            {service.description}
                        </p>

                        {/* Service Details - Moved Up */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                                <p className="text-sm text-gray-500">Category</p>
                                <p className="font-semibold text-gray-900 capitalize">
                                    {service.category}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="font-semibold text-gray-900">
                                    Rs {service.price}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                                <p className="text-sm text-gray-500">Delivery Time</p>
                                <p className="font-semibold text-gray-900">
                                    {service.delivery_time} Days
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="font-semibold text-gray-900">
                                    {service.is_active ? "Active" : "Inactive"}
                                </p>
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <button
                            onClick={() => navigate(`/bookings?service=${service.id}`)}
                            className="mt-6 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
                        >
                            Book Now
                        </button>

                        {/* Divider */}
                        <hr className="my-6 border-gray-200" />

                        {/* Provider Information - Moved Down */}
                        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                                Provider Information
                            </h3>
                            <div className="space-y-2 text-sm sm:text-base">
                                <p className="flex flex-wrap items-center">
                                    <span className="font-medium text-gray-600 mr-2">Name:</span>
                                    <span className="font-semibold text-gray-900">
                                        {service.user?.name || "N/A"}
                                    </span>
                                </p>
                                <p className="flex flex-wrap items-center">
                                    <span className="font-medium text-gray-600 mr-2">Email:</span>
                                    <span className="font-semibold text-gray-900 break-all">
                                        {service.user?.email || "N/A"}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-200" />

                        {/* Reviews - Moved Down */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                Reviews
                            </h2>

                            {service.reviews?.length > 0 ? (
                                <div className="space-y-4">
                                    {service.reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="border border-gray-200 p-4 sm:p-5 rounded-xl hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-center justify-between flex-wrap gap-2">
                                                <p className="text-lg sm:text-xl font-semibold text-yellow-500">
                                                    ⭐ {review.rating}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    By {review.user?.name || "Anonymous"}
                                                </p>
                                            </div>
                                            <p className="text-gray-700 mt-2 text-sm sm:text-base">
                                                {review.review}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-6 rounded-xl text-center text-gray-500">
                                    <p className="text-sm sm:text-base">No reviews yet</p>
                                    <p className="text-xs sm:text-sm mt-1">Be the first to review!</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-8">

                            <ReviewForm

                                serviceId={service.id}

                                onSuccess={loadService}

                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;