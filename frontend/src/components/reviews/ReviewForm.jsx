import { useState, useEffect } from "react";
import { createReview, updateReview } from "../../services/reviewService";

function ReviewForm({ serviceId, selectedReview, onSuccess }) {

    const [formData, setFormData] = useState({
        service_id: serviceId,
        rating: "",
        review: "",
    });


    // Jab edit button press hoga to old data form me load hoga
    useEffect(() => {

        if(selectedReview){

            setFormData({

                service_id: selectedReview.service_id,

                rating: selectedReview.rating,

                review: selectedReview.review,

            });

        }

    }, [selectedReview]);



    // Input change handle
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };



    // Submit form
    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            if(selectedReview){

                await updateReview(
                    selectedReview.id,
                    formData
                );

                alert("Review updated successfully");


            }else{

                await createReview(formData);

                alert("Review added successfully");

            }


            // Reset form

            setFormData({

                service_id:"",
                rating:"",
                review:"",

            });


            // Refresh reviews list

            onSuccess();


        } catch(error){

            console.log(error);

            alert("Something went wrong");

        }

    };



    return (

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">

            <h2 className="text-xl font-bold mb-4">

                {selectedReview ? "Update Review" : "Add Review"}

            </h2>



            <form onSubmit={handleSubmit}>


               
               



                {/* Rating */}

                <select

                    name="rating"

                    value={formData.rating}

                    onChange={handleChange}

                    className="border p-2 w-full mb-3 rounded"

                    required

                >

                    <option value="">Select Rating</option>

                    <option value="1">⭐</option>

                    <option value="2">⭐⭐</option>

                    <option value="3">⭐⭐⭐</option>

                    <option value="4">⭐⭐⭐⭐</option>

                    <option value="5">⭐⭐⭐⭐⭐</option>


                </select>



                {/* Review */}

                <textarea

                    name="review"

                    placeholder="Write your review"

                    value={formData.review}

                    onChange={handleChange}

                    className="border p-2 w-full mb-3 rounded"

                    rows="4"

                    required

                />



                <button

                    type="submit"

                    className="bg-blue-600 text-white px-5 py-2 rounded"

                >

                    {selectedReview ? "Update" : "Submit"}

                </button>


            </form>


        </div>

    );

}


export default ReviewForm;