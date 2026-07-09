import { useEffect, useState } from "react";
import { getMarketplaceServices } from "../../services/marketplaceService";

function Testimonials() {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {

        loadReviews();

    }, []);



    async function loadReviews() {

        try {

            const services = await getMarketplaceServices();


            // collect reviews from all services
            const allReviews = services.flatMap(service =>

                service.reviews
                    ? service.reviews.map(review => ({
                        ...review,
                        serviceTitle: service.title
                    }))
                    : []

            );


            // show latest 3 reviews
            setReviews(allReviews.slice(0,3));


        } catch(error) {

            console.log(error);

        }

    }



    return (

        <section className="py-20 bg-slate-50">

            <div className="max-w-6xl mx-auto px-6">


                <h2 className="text-center text-4xl font-bold">

                    What Our Users Say

                </h2>



                {reviews.length === 0 ? (

                    <div className="text-center mt-12 text-gray-500">

                        No reviews available yet

                    </div>


                ) : (


                    <div className="grid md:grid-cols-3 gap-8 mt-12">


                        {reviews.map((review)=>(


                            <div
                                key={review.id}
                                className="bg-white rounded-2xl shadow p-8"
                            >


                                <div className="text-yellow-500 text-xl mb-3">

                                    {"⭐".repeat(review.rating)}

                                </div>



                                <p className="text-gray-600">

                                    "{review.review}"

                                </p>



                                <h4 className="mt-6 font-bold">

                                    {review.customer?.name || "Customer"}

                                </h4>



                                <p className="text-sm text-gray-400 mt-1">

                                    {review.serviceTitle}

                                </p>


                            </div>


                        ))}


                    </div>


                )}


            </div>


        </section>

    );

}


export default Testimonials;