import { deleteReview } from "../../services/reviewService";


function ReviewTable({ reviews, onDelete, onEdit }) {


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this review?"
        );


        if(confirmDelete){

            try {

                await deleteReview(id);

                onDelete();

            } catch(error){

                console.log(error);

                alert("Delete failed");

            }

        }

    };



    return (

        <div className="bg-white shadow-md rounded-lg p-6">


            <h2 className="text-xl font-bold mb-4">
                Reviews List
            </h2>



            <div className="overflow-x-auto">


                <table className="w-full border">


                    <thead>

                        <tr className="bg-gray-100">

                            <th className="border p-2">
                                Service ID
                            </th>


                            <th className="border p-2">
                                Rating
                            </th>


                            <th className="border p-2">
                                Review
                            </th>


                            <th className="border p-2">
                                Actions
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            reviews.length > 0 ? (

                                reviews.map((item)=>(

                                    <tr key={item.id}>


                                        <td className="border p-2 text-center">
                                            {item.service_id}
                                        </td>



                                        <td className="border p-2 text-center">

                                            {"⭐".repeat(item.rating)}

                                        </td>



                                        <td className="border p-2">

                                            {item.review}

                                        </td>



                                        <td className="border p-2 text-center">


                                            <button

                                                onClick={() => onEdit(item)}

                                                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"

                                            >

                                                Edit

                                            </button>




                                            <button

                                                onClick={() => handleDelete(item.id)}

                                                className="bg-red-600 text-white px-3 py-1 rounded"

                                            >

                                                Delete

                                            </button>


                                        </td>


                                    </tr>


                                ))


                            ) : (


                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center p-4"
                                    >

                                        No Reviews Found

                                    </td>

                                </tr>


                            )
                        }



                    </tbody>


                </table>


            </div>


        </div>

    );

}


export default ReviewTable;