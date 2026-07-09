function FormModal({
    open,
    title,
    children,
    onClose,
}) {
    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">

            <div
                className="
                bg-white
                rounded-2xl
                shadow-xl
                w-full
                max-w-2xl
                max-h-[90vh]
                flex
                flex-col
                "
            >

                {/* Header */}

                <div className="flex justify-between items-center p-6 border-b">

                    <h2 className="text-2xl font-semibold">

                        {title}

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl hover:text-red-600"
                    >

                        ×

                    </button>

                </div>

                {/* Body */}

                <div className="p-6 overflow-y-auto">

                    {children}

                </div>

            </div>

        </div>

    );
}

export default FormModal;