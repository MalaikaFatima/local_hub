import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getProducts } from "../../services/productService";

function FeaturedProducts() {

    const navigate = useNavigate();
    const { token } = useAuth();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        loadProducts();

    }, []);



    async function loadProducts() {

        try {

            const data = await getProducts(token);

            // show only first 3 products
            setProducts(data.slice(0, 3));

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }



    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">


                {/* Header */}

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">


                    <div>

                        <h2 className="text-4xl font-bold">
                            Featured Products
                        </h2>


                        <p className="text-gray-500 mt-2">
                            Buy products from trusted local sellers.
                        </p>


                    </div>


                    <button
                        onClick={() => navigate("/products")}
                        className="text-emerald-600 font-semibold hover:underline"
                    >
                        View All →
                    </button>


                </div>



                {/* Loading */}

                {loading && (

                    <div className="text-center py-12 text-gray-500">

                        Loading Products...

                    </div>

                )}



                {/* Empty */}

                {!loading && products.length === 0 && (

                    <div className="text-center py-12">

                        <h3 className="text-xl text-gray-500">

                            No Products Available

                        </h3>

                    </div>

                )}



                {/* Products */}

                {!loading && products.length > 0 && (

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">


                        {products.map((product) => (

                            <div
                                key={product.id}
                                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition p-6"
                            >


                                <h3 className="text-2xl font-semibold">

                                    {product.name}

                                </h3>



                                <p className="text-gray-500 mt-3">

                                    Seller: {product.user?.name || "Local Seller"}

                                </p>



                                <p className="text-gray-600 mt-3 line-clamp-2">

                                    {product.description || "No description available"}

                                </p>



                                <div className="flex justify-between items-center mt-8">


                                    <span className="text-emerald-600 text-2xl font-bold">

                                        Rs {product.price}

                                    </span>



                                    <button
                                        onClick={() =>
                                            navigate(`/products/${product.id}`)
                                        }
                                        className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition"
                                    >

                                        View

                                    </button>


                                </div>


                            </div>


                        ))}


                    </div>

                )}


            </div>


        </section>

    );

}


export default FeaturedProducts;