import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PageHeader from "../../components/crud/PageHeader";
import FormModal from "../../components/crud/FormModal";
import SearchInput from "../../components/crud/SearchInput";
import BookingForm from "../../components/bookings/BookingForm";
import BookingTable from "../../components/bookings/BookingTable";
import {
    getBookings,
    createBooking,
    updateBooking,
    deleteBooking,
} from "../../services/bookingService";
import { useSearchParams } from "react-router-dom";
import { getServices } from "../../services/serviceService";

function Bookings() {
    const { token } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [searchParams] = useSearchParams();
    const serviceId = searchParams.get("service");
    const [prefilledService, setPrefilledService] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    useEffect(() => {
        if (!serviceId) return;
        async function loadService() {
            const services = await getServices(token);
            const service = services.find(item => item.id == serviceId);
            if (service) {
                setPrefilledService({
                    service_id: service.id,
                    requirements: "",
                    budget: "",
                    deadline: "",
                    status: "pending",
                });
                setSelected(null);
                setOpen(true);
            }
        }
        loadService();
    }, [serviceId]);

    useEffect(() => {
        setFiltered(
            bookings.filter((booking) =>
                booking.requirements
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            )
        );
    }, [search, bookings]);

    async function fetchBookings() {
        const data = await getBookings(token);
        setBookings(data);
        setFiltered(data);
    }

    async function saveBooking(form) {
        try {
            if (selected) {
                await updateBooking(token, selected.id, form);
            } else {
                await createBooking(token, form);
            }
            await fetchBookings();
            setOpen(false);
            setSelected(null);
        } catch (error) {
            console.log(error);
            console.log(error.response?.data);
        }
    }

    async function changeStatus(id, status) {
        try {
            const booking = bookings.find(item => item.id === id);
            await updateBooking(token, id, {
                ...booking,
                status,
            });
            fetchBookings();
        } catch (error) {
            console.log(error);
        }
    }

    async function removeBooking(id) {
        if (!window.confirm("Delete Booking?")) return;
        await deleteBooking(token, id);
        fetchBookings();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <PageHeader
                        title="Bookings"
                        subtitle="Manage your bookings"
                        buttonText="Add Booking"
                        onClick={() => {
                            setSelected(null);
                            setOpen(true);
                        }}
                    />
                </div>

                {/* Search Section */}
                <div className="mb-6">
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Table Section - Responsive */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <BookingTable
                            bookings={filtered}
                            onEdit={(booking) => {
                                setSelected(booking);
                                setOpen(true);
                            }}
                            onDelete={removeBooking}
                            onStatusChange={changeStatus}
                        />
                    </div>
                </div>

                {/* Modal */}
                <FormModal
                    open={open}
                    title={selected ? "Edit Booking" : "Add Booking"}
                    onClose={() => {
                        setOpen(false);
                        setSelected(null);
                    }}
                >
                    <BookingForm
                        booking={selected}
                        defaultBooking={prefilledService}
                        onSubmit={saveBooking}
                    />
                </FormModal>
            </div>
        </div>
    );
}

export default Bookings;