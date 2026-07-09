function PageHeader({
    title,
    subtitle,
    buttonText,
    onClick,
}) {
    return (
        <div className="flex items-center justify-between mb-8">

            <div>

                <h1 className="text-3xl font-bold text-slate-800">
                    {title}
                </h1>

                <p className="text-slate-500 mt-1">
                    {subtitle}
                </p>

            </div>

            {buttonText && (
                <button
                    onClick={onClick}
                    className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                >
                    {buttonText}
                </button>
            )}

        </div>
    );
}

export default PageHeader;