import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

function Navbar() {

    return (

        <nav className="shadow">

            <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

                <Logo />

                <NavLinks />

                <AuthButtons />

            </div>

        </nav>

    );

}

export default Navbar;