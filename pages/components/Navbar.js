import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="Navbar">
    <ul>
        <li> 
            <Link href="/">Home</Link>
        </li>   
        <li>
            <Link href="/About">About</Link>
        </li>
        <li>
            <Link href="/Profil">Profil</Link>
        </li>
    </ul>
    </nav>
    );
}
export default Navbar;
