function MarketplaceCard({ item }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
            />

            <div className="p-5">

                <span className="text-sm text-emerald-600 font-semibold">
                    {item.type}
                </span>

                <h2 className="text-xl font-bold mt-2">
                    {item.title}
                </h2>

                <p className="text-slate-500 mt-1">
                    {item.provider}
                </p>

                <div className="flex justify-between mt-5">

                    <span className="font-bold text-emerald-600">
                        {item.price}
                    </span>

                    <span className="text-slate-500">
                        ⭐ {item.rating}
                    </span>

                </div>

                <button className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition">
                    View Details
                </button>

            </div>

        </div>
    );
}

export default MarketplaceCard;