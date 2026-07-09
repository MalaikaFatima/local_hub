import DataTable from "../crud/DataTable";
import { Link } from "react-router-dom";

function ServiceTable({
    services,
    onEdit,
    onDelete,
}) {
    return (
        <div>
            {/* Desktop Table View */}
            <div className="hidden md:block">
                <DataTable
                    columns={[
                        "Title",
                        "Category",
                        "Price",
                        "Delivery",
                        "Status",
                        "Actions",
                    ]}
                >
                    {services.map((service) => (
                        <tr key={service.id} className="border-t">
                            <td className="p-4">{service.title}</td>
                            <td className="p-4">{service.category}</td>
                            <td className="p-4">Rs {service.price}</td>
                            <td className="p-4">{service.delivery_time} Days</td>
                            <td className="p-4">{service.status}</td>
                            <td className="p-4">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEdit(service)}
                                        className="px-3 py-1 border rounded-lg hover:bg-gray-50 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(service.id)}
                                        className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                                    >
                                        Delete
                                    </button>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition"
                                    >
                                        View
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </DataTable>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-2xl border p-4">
                        <div className="space-y-3">
                            <div>
                                <h3 className="font-semibold text-lg">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.category}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-gray-500">Price:</span>
                                    <span className="ml-1 font-medium">Rs {service.price}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Delivery:</span>
                                    <span className="ml-1">{service.delivery_time} Days</span>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-gray-500">Status:</span>
                                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                                        service.status === "Active" 
                                            ? "bg-green-100 text-green-700" 
                                            : service.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}>
                                        {service.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2 border-t">
                                <button
                                    onClick={() => onEdit(service)}
                                    className="flex-1 px-3 py-1.5 border rounded-lg hover:bg-gray-50 transition text-sm"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(service.id)}
                                    className="flex-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm transition"
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm text-center transition"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceTable;