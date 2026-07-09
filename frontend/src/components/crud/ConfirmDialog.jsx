function ConfirmDialog({
    open,
    title,
    message,
    onCancel,
    onConfirm,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl p-6 w-full max-w-md">

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

                <p className="mt-3 text-slate-600">
                    {message}
                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onCancel}
                        className="border px-5 py-2 rounded-xl"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ConfirmDialog;