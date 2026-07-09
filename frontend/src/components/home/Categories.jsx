import {
    CodeBracketIcon,
    PaintBrushIcon,
    CameraIcon,
    MegaphoneIcon,
    FilmIcon,
    HomeIcon,
    AcademicCapIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";

function Categories() {

    const categories = [
        {
            title: "Web Development",
            icon: CodeBracketIcon,
        },
        {
            title: "Graphic Design",
            icon: PaintBrushIcon,
        },
        {
            title: "Photography",
            icon: CameraIcon,
        },
        {
            title: "Digital Marketing",
            icon: MegaphoneIcon,
        },
        {
            title: "Video Editing",
            icon: FilmIcon,
        },
        {
            title: "Home Services",
            icon: HomeIcon,
        },
        {
            title: "Tutoring",
            icon: AcademicCapIcon,
        },
        {
            title: "Content Writing",
            icon: PencilSquareIcon,
        },
    ];

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center">

                    Browse Categories

                </h2>

                <p className="text-center text-gray-500 mt-3">

                    Explore thousands of trusted local services.

                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                    {categories.map((category, index) => {

                        const Icon = category.icon;

                        return (

                            <div
                                key={index}
                                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
                            >

                                <Icon className="h-12 w-12 text-emerald-600" />

                                <h3 className="text-xl font-semibold mt-6">

                                    {category.title}

                                </h3>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Categories;