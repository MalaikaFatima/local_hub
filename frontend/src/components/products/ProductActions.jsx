function ProductActions({ product, onEdit, onDelete }) {
    return (
        <div className="flex gap-2">

            <button
                onClick={() => onEdit(product)}
                className="px-3 py-2 rounded-lg border hover:bg-slate-100"
            >
                Edit
            </button>

            <button
                onClick={() => onDelete(product.id)}
                className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
                Delete
            </button>

        </div>
    );
}

export default ProductActions;