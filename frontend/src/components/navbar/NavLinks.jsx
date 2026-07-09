import { NavLink } from "react-router-dom";

function NavLinks() {

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Marketplace", path: "/marketplace" },
        { name: "About", path: "/about" }
    ];

    return (

        <div className="flex gap-8">

            {links.map((link) => (

                <NavLink
                    key={link.path}
                    to={link.path}
                    className="font-medium hover:text-emerald-600 transition"
                >
                    {link.name}
                </NavLink>

            ))}

        </div>

    );

}

export default NavLinks;