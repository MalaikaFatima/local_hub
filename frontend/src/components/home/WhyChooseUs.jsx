function WhyChooseUs() {

    const features = [
        "Verified Service Providers",
        "Secure Booking System",
        "Fast Communication",
        "Trusted Local Marketplace",
    ];

    return (
        <section className="py-20 bg-slate-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold">

                    Why Choose LocalHub?

                </h2>

                <p className="text-gray-500 mt-4">

                    Everything you need in one trusted community platform.

                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow p-8 text-xl font-medium"
                        >

                            ✅ {item}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;