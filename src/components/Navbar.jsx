import Logo from '../assets/Logo.svg'
export default function Navbar() {
    return (
        <nav className="nav__container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </nav>
    )
}
