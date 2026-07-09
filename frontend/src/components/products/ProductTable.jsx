import ProductActions from "./ProductActions";

function ProductTable({ products, onEdit, onDelete }) {
    return (
        <div className="bg-white rounded-2xl border overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-left">Stock</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-4">{product.name}</td>
                                <td className="p-4">{product.category}</td>
                                <td className="p-4">Rs {product.price}</td>
                                <td className="p-4">{product.stock}</td>
                                <td className="p-4 text-center">
                                    <ProductActions
                                        product={product}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y">
                {products.map((product) => (
                    <div key={product.id} className="p-4 space-y-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.category}</p>
                            </div>
                            <ProductActions
                                product={product}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </div>
                        <div className="flex gap-4 text-sm">
                            <span className="font-medium">Rs {product.price}</span>
                            <span className="text-gray-600">Stock: {product.stock}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductTable;