import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/profileService";

function Profile() {

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: "",
        phone: "",
        location: "",
        skills: "",
        role: "",
        avatar: "",
    });


    useEffect(() => {
        loadProfile();
    }, []);


    async function loadProfile() {

        try {

            const data = await getProfile();

            setFormData({

                name: data.name || "",
                email: data.email || "",
                bio: data.bio || "",
                phone: data.phone || "",
                location: data.location || "",
                skills: data.skills || "",
                role: data.role || "",
                avatar: data.avatar || "",

            });

            setLoading(false);

        } catch(error){

            console.log(error);

        }

    }



    function handleChange(e){

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    }



    async function handleSubmit(e){

        e.preventDefault();

        try{

            await updateProfile(formData);

            alert("Profile Updated Successfully");

        }
        catch(error){

            console.log(error);

            alert("Update Failed");

        }

    }



    if(loading){

        return (

            <div className="text-center py-10 text-xl">
                Loading Profile...
            </div>

        );

    }



    return (

        <div className="max-w-4xl mx-auto">


            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">


                {/* Header */}

                <div className="flex items-center gap-5 mb-8">


                    <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold">

                        {formData.name.charAt(0)}

                    </div>


                    <div>

                        <h1 className="text-3xl font-bold text-slate-800">

                            {formData.name}

                        </h1>


                        <span className="inline-block mt-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm">

                            {formData.role}

                        </span>

                    </div>


                </div>




                <form 
                onSubmit={handleSubmit}
                className="space-y-5"
                >



                    <div>

                        <label className="font-medium">
                            Name
                        </label>

                        <input

                            type="text"

                            name="name"

                            value={formData.name}

                            onChange={handleChange}

                            className="w-full mt-2 border rounded-xl p-3"

                        />

                    </div>




                    <div>

                        <label className="font-medium">
                            Email
                        </label>

                        <input

                            type="email"

                            name="email"

                            value={formData.email}

                            onChange={handleChange}

                            className="w-full mt-2 border rounded-xl p-3"

                        />

                    </div>




                    <div className="grid md:grid-cols-2 gap-5">


                        <div>

                            <label className="font-medium">
                                Phone
                            </label>

                            <input

                                type="text"

                                name="phone"

                                value={formData.phone}

                                onChange={handleChange}

                                className="w-full mt-2 border rounded-xl p-3"

                            />

                        </div>



                        <div>

                            <label className="font-medium">
                                Location
                            </label>

                            <input

                                type="text"

                                name="location"

                                value={formData.location}

                                onChange={handleChange}

                                className="w-full mt-2 border rounded-xl p-3"

                            />

                        </div>


                    </div>





                    <div>

                        <label className="font-medium">
                            Bio
                        </label>


                        <textarea

                            name="bio"

                            value={formData.bio}

                            onChange={handleChange}

                            rows="4"

                            className="w-full mt-2 border rounded-xl p-3"

                            placeholder="Write something about yourself"

                        />

                    </div>




                    <div>

                        <label className="font-medium">
                            Skills
                        </label>


                        <textarea

                            name="skills"

                            value={formData.skills}

                            onChange={handleChange}

                            rows="3"

                            className="w-full mt-2 border rounded-xl p-3"

                            placeholder="Laravel, React, UI Design..."

                        />

                    </div>




                    <button

                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl transition"

                    >

                        Update Profile

                    </button>



                </form>



            </div>


        </div>

    );

}


export default Profile;