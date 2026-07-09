const categories = [
    "All",
    "Technology",
    "Electronics",
    "Home",
];

function CategoryFilter({ selected, setSelected }) {
    return (
        <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`px-5 py-2 rounded-full border transition ${
                        selected === category
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white hover:bg-emerald-50"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;