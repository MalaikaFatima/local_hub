import { useEffect, useState } from "react";

function ProductForm({ product, onSubmit }) {

    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        status: "active",
    });

    useEffect(() => {

        if (product) {

            setForm({
                name: product.name || "",
                description: product.description || "",
                category: product.category || "",
                price: product.price || "",
                stock: product.stock || "",
                status: product.status || "active",
            });

        }

    }, [product]);

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    }

    function handleSubmit(e) {

        e.preventDefault();
        onSubmit(form);

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-5">

            <input
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-xl p-3"
            />

            <input
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <div className="grid grid-cols-2 gap-4">

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                />

            </div>

            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>

            <button
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition"
            >
                {product ? "Update Product" : "Add Product"}
            </button>

        </form>

    );

}

export default ProductForm;