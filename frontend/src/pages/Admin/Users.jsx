import { useEffect, useState } from "react";

import UserTable from "../../components/users/UserTable";

import {
    getUsers,
    deleteUser,
} from "../../services/userService";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const data = await getUsers();
        setUsers(data);
    }

    async function removeUser(id) {

        if (!window.confirm("Delete user?")) return;

        await deleteUser(id);

        loadUsers();
    }

    return (
        <div>

            <h1 className="text-3xl font-bold mb-6">
                Users
            </h1>

            <UserTable
                users={users}
                onDelete={removeUser}
            />

        </div>
    );
}

export default Users;