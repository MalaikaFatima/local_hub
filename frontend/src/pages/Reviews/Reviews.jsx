import { useEffect, useState } from "react";

import ReviewForm from "../../components/reviews/ReviewForm";
import ReviewTable from "../../components/reviews/ReviewTable";

import { getReviews } from "../../services/reviewService";


function Reviews() {


    const [reviews, setReviews] = useState([]);

    const [selectedReview, setSelectedReview] = useState(null);



    // Fetch reviews from API

    const fetchReviews = async () => {

        try {

            const data = await getReviews();

            setReviews(data.data || data);


        } catch(error){

            console.log(error);

        }

    };



    // Page load par reviews fetch

    useEffect(()=>{

        fetchReviews();

    },[]);



    // Edit button

    const handleEdit = (review)=>{

        setSelectedReview(review);

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };



    // Delete ke baad refresh

    const handleDelete = ()=>{

        fetchReviews();

    };



    // Form submit ke baad refresh

    const handleSuccess = ()=>{

        setSelectedReview(null);

        fetchReviews();

    };



    return (

        <div className="p-6 bg-gray-50 min-h-screen">


            <h1 className="text-3xl font-bold mb-6">

                Service Reviews

            </h1>



            <ReviewForm

                selectedReview={selectedReview}

                onSuccess={handleSuccess}

            />



            <ReviewTable

                reviews={reviews}

                onDelete={handleDelete}

                onEdit={handleEdit}

            />


        </div>

    );

}


export default Reviews;