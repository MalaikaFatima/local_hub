function DataTable({
    columns,
    children,
}) {
    return (
        <div className="bg-white rounded-2xl border overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        {columns.map((column) => (

                            <th
                                key={column}
                                className="p-4 text-left"
                            >
                                {column}
                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {children}

                </tbody>

            </table>

        </div>
    );
}

export default DataTable;