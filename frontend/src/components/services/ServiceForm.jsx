import { useEffect, useState } from "react";

function ServiceForm({ service, onSubmit }) {

    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        delivery_time: "",
        status: "active",
        image: null,
    });

    useEffect(() => {

        if (service) {

            setForm({

                title: service.title || "",

                description: service.description || "",

                category: service.category || "",

                price: service.price || "",

                delivery_time: service.delivery_time || "",

                status: service.status || "active",

                image: null,

            });

            if (service.image) {

                setPreview(
                    `http://127.0.0.1:8000/storage/${service.image}`
                );

            }

        }

    }, [service]);

    function handleChange(e) {

        const { name, value, files } = e.target;

        if (name === "image") {

            setForm({

                ...form,

                image: files[0],

            });

            if (files[0]) {

                setPreview(URL.createObjectURL(files[0]));

            }

            return;

        }

        setForm({

            ...form,

            [name]: value,

        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", form.title);
        formData.append("description", form.description);
        formData.append("category", form.category);
        formData.append("price", form.price);
        formData.append("delivery_time", form.delivery_time);
        formData.append("status", form.status);

        if (form.image) {

            formData.append("image", form.image);

        }

        onSubmit(formData);

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <input
                name="title"
                placeholder="Service Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            />

            <textarea
                name="description"
                placeholder="Description"
                rows="4"
                value={form.description}
                onChange={handleChange}
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
                    className="border rounded-xl p-3"
                />

                <input
                    type="number"
                    name="delivery_time"
                    placeholder="Delivery Days"
                    value={form.delivery_time}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

            </div>

            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
            >

                <option value="active">

                    Active

                </option>

                <option value="inactive">

                    Inactive

                </option>

            </select>

            <div>

                <label className="font-semibold block mb-2">

                    Service Image

                </label>

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                />

            </div>

            {preview && (

                <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-52 rounded-xl object-cover border"
                />

            )}

            <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold"
            >

                {service ? "Update Service" : "Add Service"}

            </button>

        </form>

    );

}

export default ServiceForm;