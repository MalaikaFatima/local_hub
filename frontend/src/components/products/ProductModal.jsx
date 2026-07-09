function ProductModal({ open, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl">

                <div className="flex justify-between items-center p-6 border-b">

                    <h2 className="text-2xl font-bold">

                        Add Product

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ×
                    </button>

                </div>

                <div className="p-6">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default ProductModal;