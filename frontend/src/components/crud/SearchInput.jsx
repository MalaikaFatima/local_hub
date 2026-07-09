import { Search } from "lucide-react";

function SearchInput({ value, onChange }) {
    return (
        <div className="relative mb-6">

            <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
                value={value}
                onChange={onChange}
                placeholder="Search..."
                className="w-full border rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

        </div>
    );
}

export default SearchInput;