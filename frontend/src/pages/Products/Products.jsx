import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../../services/productService";
import ProductTable from "../../components/products/ProductTable";
import ProductModal from "../../components/products/ProductModal";
import ProductForm from "../../components/products/ProductForm";

function Products() {

    const { token } = useAuth();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [openModal, setOpenModal] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts() {

        try {

            const data = await getProducts(token);

            setProducts(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function handleCreate(formData) {

        await createProduct(token, formData);

        fetchProducts();

        setOpenModal(false);

    }

    async function handleUpdate(formData) {

        await updateProduct(token, selectedProduct.id, formData);

        fetchProducts();

        setSelectedProduct(null);

        setOpenModal(false);

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Delete this product?"
        );

        if (!confirmDelete) return;

        await deleteProduct(token, id);

        fetchProducts();

    }

    function handleEdit(product) {

        setSelectedProduct(product);

        setOpenModal(true);

    }

    function handleAdd() {

        setSelectedProduct(null);

        setOpenModal(true);

    }

    if (loading) {

        return (

            <div className="text-center py-20">

                Loading...

            </div>

        );

    }

    return (

        <div>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Products

                    </h1>

                    <p className="text-slate-500">

                        Manage your products.

                    </p>

                </div>

                <button
                    onClick={handleAdd}
                    className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                >

                    Add Product

                </button>

            </div>

            <ProductTable

                products={products}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            <ProductModal

                open={openModal}

                onClose={() => {

                    setOpenModal(false);

                    setSelectedProduct(null);

                }}

            >

                <ProductForm

                    product={selectedProduct}

                    onSubmit={
                        selectedProduct
                            ? handleUpdate
                            : handleCreate
                    }

                />

            </ProductModal>

        </div>

    );

}

export default Products;