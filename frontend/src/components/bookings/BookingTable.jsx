import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function BookingTable({
    bookings,
    onEdit,
    onDelete,
    onStatusChange,
}) {
    const { role } = useAuth();

    const [statusValues, setStatusValues] = useState({});

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-700";

            case "accepted":
                return "bg-blue-100 text-blue-700";

            case "in_progress":
                return "bg-purple-100 text-purple-700";

            case "completed":
                return "bg-emerald-100 text-emerald-700";

            case "cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="bg-white rounded-2xl border overflow-x-auto">

            <table className="min-w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">Service</th>

                        <th className="p-4 text-left">Budget</th>

                        <th className="p-4 text-left">Deadline</th>

                        <th className="p-4 text-left">Status</th>

                        <th className="p-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {bookings.length > 0 ? (

                        bookings.map((booking) => (

                            <tr
                                key={booking.id}
                                className="border-t"
                            >

                                <td className="p-4">

                                    {booking.service?.title}

                                </td>

                                <td className="p-4">

                                    Rs {booking.budget}

                                </td>

                                <td className="p-4">

                                    {new Date(
                                        booking.deadline
                                    ).toLocaleDateString()}

                                </td>

                                <td className="p-4">

                                    {role === "provider" ? (

                                        <select
                                            value={
                                                statusValues[booking.id] ??
                                                booking.status
                                            }
                                            onChange={(e) =>
                                                setStatusValues({
                                                    ...statusValues,
                                                    [booking.id]:
                                                        e.target.value,
                                                })
                                            }
                                            className="border rounded-lg p-2"
                                        >

                                            <option value="pending">
                                                Pending
                                            </option>

                                            <option value="accepted">
                                                Accepted
                                            </option>

                                            <option value="in_progress">
                                                In Progress
                                            </option>

                                            <option value="completed">
                                                Completed
                                            </option>

                                            <option value="cancelled">
                                                Cancelled
                                            </option>

                                        </select>

                                    ) : (

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                                                booking.status
                                            )}`}
                                        >

                                            {booking.status}

                                        </span>

                                    )}

                                </td>

                                <td className="p-4 text-center">

                                    {/* CUSTOMER */}

                                    {role === "customer" && (

                                        booking.status === "pending" ? (

                                            <div className="flex justify-center gap-2">

                                                <button
                                                    onClick={() =>
                                                        onEdit(booking)
                                                    }
                                                    className="px-3 py-2 rounded-lg border hover:bg-slate-100"
                                                >

                                                    Edit

                                                </button>

                                                <button
                                                    onClick={() =>
                                                        onDelete(
                                                            booking.id
                                                        )
                                                    }
                                                    className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                                >

                                                    Delete

                                                </button>

                                            </div>

                                        ) : (

                                            <span className="text-gray-500 font-medium">

Booking Done

                                            </span>

                                        )

                                    )}

                                    {/* PROVIDER */}

                                    {role === "provider" && (

                                        <button
                                            onClick={() =>
                                                onStatusChange(
                                                    booking.id,
                                                    statusValues[
                                                        booking.id
                                                    ] ??
                                                        booking.status
                                                )
                                            }
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                                        >

                                            Update

                                        </button>

                                    )}

                                    {/* ADMIN */}

                                    {role === "admin" && (

                                        <div className="flex justify-center gap-2">

                                            <button
                                                onClick={() =>
                                                    onEdit(booking)
                                                }
                                                className="px-3 py-2 rounded-lg border hover:bg-slate-100"
                                            >

                                                Edit

                                            </button>

                                            <button
                                                onClick={() =>
                                                    onDelete(
                                                        booking.id
                                                    )
                                                }
                                                className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                            >

                                                Delete

                                            </button>

                                        </div>

                                    )}

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="5"
                                className="text-center py-8 text-gray-400"
                            >

                                No bookings found

                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default BookingTable;