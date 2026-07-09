function HowItWorks() {

    const steps = [
        "Create Your Account",
        "Find a Service or Product",
        "Book or Purchase",
        "Leave a Review",
    ];

    return (
        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-4xl font-bold">

                    How It Works

                </h2>

                <div className="grid md:grid-cols-4 gap-8 mt-16">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className="text-center p-8 border rounded-2xl"
                        >

                            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">

                                {index + 1}

                            </div>

                            <h3 className="mt-6 text-xl font-semibold">

                                {step}

                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default HowItWorks;