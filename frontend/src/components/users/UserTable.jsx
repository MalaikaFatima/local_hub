function UserTable({ users, onDelete }) {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border">
            <table className="min-w-full">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">Role</th>
                        <th className="p-4 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-t hover:bg-slate-50"
                        >
                            <td className="p-4">{user.name}</td>

                            <td className="p-4">{user.email}</td>

                            <td className="p-4">
                                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm">
                                    {user.role}
                                </span>
                            </td>

                            <td className="p-4">
                                <button
                                    onClick={() => onDelete(user.id)}
                                    className="text-red-600 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;