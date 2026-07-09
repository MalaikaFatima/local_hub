function Hero() {
    return (
        <section className="bg-slate-50">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="max-w-4xl mx-auto text-center">


                    {/* Heading */}

                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

                        Find Trusted{" "}

                        <span className="text-emerald-600">
                            Local Services
                        </span>

                        <br />

                        & Products

                    </h1>



                    {/* Description */}

                    <p className="mt-6 text-gray-600 text-lg leading-8">

                        Discover verified professionals, buy and sell products,
                        hire local experts, and connect with your community
                        through one secure marketplace.

                    </p>



                    {/* Search */}

                    <div className="mt-10">

                        <input
                            type="text"
                            placeholder="Search services or products..."
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600 text-left"
                        />

                    </div>



                    {/* Filters */}

                    <div className="mt-5 flex flex-col md:flex-row gap-4">


                        <select className="border rounded-xl p-4 flex-1 text-left">

                            <option>
                                Category
                            </option>

                            <option>
                                Web Development
                            </option>

                            <option>
                                Graphic Design
                            </option>

                            <option>
                                Photography
                            </option>

                        </select>



                        <select className="border rounded-xl p-4 flex-1 text-left">

                            <option>
                                Location
                            </option>

                            <option>
                                Lahore
                            </option>

                            <option>
                                Karachi
                            </option>

                            <option>
                                Islamabad
                            </option>

                        </select>


                    </div>



                    {/* Buttons */}

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">


                        <button
                            className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-8 py-4 rounded-xl"
                        >

                            Explore Services

                        </button>



                        <button
                            className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition px-8 py-4 rounded-xl"
                        >

                            Browse Marketplace

                        </button>


                    </div>


                </div>


            </div>


        </section>
    );
}

export default Hero;