function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search products or services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />
    );
}

export default SearchBar;